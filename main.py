from server.parser.njtransit import NJTransitParser
from server.workers.njtransit import NJTransitWorker
from server.models.bus_schedules import BusSchedules

from flask import Flask, jsonify, render_template
app = Flask(__name__)

bus_schedules = BusSchedules()

@app.route('/api/v1/bus_schedules')
def api_bus_schedules():
    global bus_schedules
    return jsonify(bus_schedules.to_dict())

@app.route('/')
def index():
    return render_template('index.html')

def main():
    print ' -- Initializing NJ Transit Parser Process -- '

    global bus_schedules

    # Establishing Constants
    # TODO - separate into constants.py file
    route_num = 126    # Route Number
    stop_id_ny = 20514      # Washington + 13th Street -> New York
    stop_id_hoboken = 20515  # Washington + 12th Street -> Hoboken
    show_all_busses = 'on'
    hide_other_busses = 'off'
    direction_ny = 'New York'
    direction_hoboken = 'Hoboken/Jersey C'

    # Create 2 parsers, one for NY and one for Hoboken
    njtransit_parser_ny = NJTransitParser(route_num, stop_id_ny, direction_ny, hide_other_busses)
    njtransit_parser_hoboken = NJTransitParser(route_num, stop_id_hoboken, direction_hoboken, show_all_busses)

    # Create one daemon process to grab all
    njtransit_worker = NJTransitWorker(njtransit_parser_ny, njtransit_parser_hoboken, bus_schedules)
    njtransit_worker.daemon = True

    njtransit_worker.start()

    print ' -- Daemon NJ Transit Parser Process Begun -- '


if __name__ == '__main__':
    main()
    app.run()