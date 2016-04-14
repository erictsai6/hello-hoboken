from server.parser.njtransit import NJTransitParser
from server.parser.weather_underground import WeatherUndergroundParser
from server.workers.njtransit import NJTransitWorker
from server.workers.weather_underground import WeatherUndergroundWorker
from server.models.bus_schedules import BusSchedules
from server.models.weather_forecast import WeatherForecast
import server.constants as c

from flask import Flask, jsonify, render_template
app = Flask(__name__)

bus_schedules = BusSchedules()
weather_forecast = WeatherForecast(c.wu_state, c.wu_city)

@app.route('/api/v1/bus_schedules')
def api_bus_schedules():
    global bus_schedules
    return jsonify(bus_schedules.to_dict())

@app.route('/api/v1/weather_forecast')
def api_weather_forecast():
    global weather_forecast
    return jsonify(weather_forecast.to_dict())

@app.route('/')
def index():
    return render_template('index.html')

def main():
    print ' -- Initializing NJ Transit Parser Process -- '

    global bus_schedules
    global weather_forecast

    # Create 3 parsers, one for NY and one for Hoboken
    njtransit_parser_ny = NJTransitParser(c.route_num, c.stop_id_ny, c.direction_ny, c.hide_other_busses)
    njtransit_parser_hoboken = NJTransitParser(c.route_num, c.stop_id_hoboken, c.direction_hoboken, c.show_all_busses)
    wu_parser = WeatherUndergroundParser(c.wu_api_key, c.wu_state, c.wu_city)

    # Start up both njtransit and weather underground workers
    njtransit_worker = NJTransitWorker(njtransit_parser_ny, njtransit_parser_hoboken, bus_schedules)
    njtransit_worker.daemon = True
    njtransit_worker.start()

    wu_worker = WeatherUndergroundWorker(wu_parser, weather_forecast)
    wu_worker.daemon = True
    wu_worker.start()

    print ' -- Daemon NJ Transit Parser Process Begun -- '


if __name__ == '__main__':
    main()
    app.run()