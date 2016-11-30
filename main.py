from server.parser.njtransit import NJTransitParser
from server.parser.weather_underground import WeatherUndergroundParser
from server.workers.njtransit import NJTransitWorker
from server.workers.weather_underground import WeatherUndergroundWorker
from server.models.bus_schedules import BusSchedules
from server.models.weather_forecast import WeatherForecast
from server.utilities.logger import LogFilter
from server.utilities.geo import Geo
import server.constants as c
import os

from flask import Flask, jsonify, render_template, request

environment = 'development'

static_folder = 'static'
if 'NJTRANSIT_SETTINGS' in os.environ and 'production' in os.environ['NJTRANSIT_SETTINGS']:
    environment = 'production'
    static_folder = 'dist'

app = Flask(__name__, static_folder=static_folder)
app.config.from_object('settings.default')

if environment == 'production':
    app.config.from_envvar('NJTRANSIT_SETTINGS')

bus_schedules = BusSchedules()
weather_forecast = WeatherForecast(c.wu_state, c.wu_city)

@app.route('/api/v1/bus_schedules')
def api_bus_schedules():
    ny_bus_stop = str(request.args.get('ny_bus_stop'))
    hoboken_bus_stop = str(request.args.get('hoboken_bus_stop'))

    global bus_schedules

    all_bus_schedules = bus_schedules.to_dict()

    ny_bus_schedules = all_bus_schedules['ny_bus_schedules'][ny_bus_stop] \
        if ny_bus_stop in all_bus_schedules['ny_bus_schedules'] else []                    
    hoboken_bus_schedules = all_bus_schedules['hoboken_bus_schedules'][hoboken_bus_stop] \
        if hoboken_bus_stop in all_bus_schedules['hoboken_bus_schedules'] else []

    return jsonify({
        'ny_bus_schedules': ny_bus_schedules,
        'hoboken_bus_schedules': hoboken_bus_schedules
    })

@app.route('/api/v1/bus_stops')
def api_bus_stops():
    return jsonify({
        'ny_bus_stops': c.stop_id_map_ny,
        'hoboken_bus_stops': c.stop_id_map_hoboken
    })

@app.route('/api/v1/bus_stops/nearby')
def api_bus_stops_nearby():
    latitude = float(request.args.get('latitude'))
    longitude = float(request.args.get('longitude'))

    nearest_distance = 10000
    nearest_ny_bus_stop = None    
    nearest_hoboken_bus_stop = None

    # Iterate through NY directions stops
    for ny_bus_stop in c.stop_id_map_ny:
        distance_from = Geo.distance_from(latitude, longitude,  
            ny_bus_stop['latitude'], ny_bus_stop['longitude'])
        if distance_from < nearest_distance:
            nearest_distance = distance_from
            nearest_ny_bus_stop = ny_bus_stop                    

    nearest_distance = 10000
    # Iterate through Hoboken direction stops
    for hoboken_bus_stop in c.stop_id_map_hoboken:
        distance_from = Geo.distance_from(latitude, longitude,  
            hoboken_bus_stop['latitude'], hoboken_bus_stop['longitude'])
        if distance_from < nearest_distance:
            nearest_distance = distance_from
            nearest_hoboken_bus_stop = hoboken_bus_stop 

    return jsonify({
        'ny_bus_stop': nearest_ny_bus_stop,
        'hoboken_bus_stop': nearest_hoboken_bus_stop
    })

@app.route('/api/v1/weather_forecast')
def api_weather_forecast():
    global weather_forecast
    return jsonify(weather_forecast.to_dict())

@app.route('/api/v1/alexa', methods=['POST'])
def alexa():
    body = request.get_json() 

    if body['session']['application']['applicationId'] != c.alexa_app_id:
        return '', 403

    if body['request']['type'] != 'IntentRequest':
        return '', 422

    # default should be new york    
    direction = 'new york'
    direction_key = 'ny_bus_schedules'
    bus_stop = '20514'
    intent = body['request']['intent']['slots']['Direction']
    if 'value' in intent and \
        intent['value'].lower() == 'hoboken':
        direction = 'hoboken'
        direction_key = 'hoboken_bus_schedules'
        bus_stop = '20515' 

    global bus_schedules

    all_bus_schedules = bus_schedules.to_dict()

    to_bus_schedules = all_bus_schedules[direction_key][bus_stop] \
        if bus_stop in all_bus_schedules[direction_key] else []

    speak_text = 'No busses are scheduled to ' + direction + ' at this time'
    if len(to_bus_schedules) > 0:
        speak_text = 'The next bus to ' + direction + ' is in ' + str(to_bus_schedules[0]['time_remaining']) + ' minutes'

    return jsonify({
        'version': body['version'],        
        'response': {
            'outputSpeech': {
                'type': 'PlainText',
                'text': speak_text
            }                       
        }
    })

@app.route('/')
def index():
    global environment
    return render_template('index.html', environment=environment)

def main():
    print ' -- Initializing NJ Transit Parser Process -- '

    global bus_schedules
    global weather_forecast

    # Create 3 parsers, one for NY and one for Hoboken and one for WeatherUnderground
    njtransit_ny_parsers = []
    njtransit_hoboken_parsers = []

    for bus_stop in c.stop_id_map_ny:
        njtransit_ny_parsers.append(NJTransitParser(c.route_num, bus_stop['id'], c.direction_ny, bus_stop['show_all']))

    for bus_stop in c.stop_id_map_hoboken:
        njtransit_hoboken_parsers.append(NJTransitParser(c.route_num, bus_stop['id'], c.direction_ny, bus_stop['show_all']))

    wu_parser = WeatherUndergroundParser(c.wu_api_key, c.wu_state, c.wu_city)

    # Start up both njtransit and weather underground workers
    njtransit_worker = NJTransitWorker(njtransit_ny_parsers, njtransit_hoboken_parsers, bus_schedules)
    njtransit_worker.daemon = True
    njtransit_worker.start()

    wu_worker = WeatherUndergroundWorker(wu_parser, weather_forecast)
    wu_worker.daemon = True
    wu_worker.start()

    print ' -- Daemon NJ Transit Parser Process Begun -- '

# Want to trigger the main process outside the context of python main.py
main()

if __name__ == '__main__':
    print 'Started in {} mode'.format(environment) 
    app.run(host='0.0.0.0')
