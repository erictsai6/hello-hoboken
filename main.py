from server.parser.njtransit import NJTransitParser
from server.workers.njtransit import NJTransitWorker
from server.models.bus_schedules import BusSchedules
import server.constants as c

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

    # Create 2 parsers, one for NY and one for Hoboken
    njtransit_parser_ny = NJTransitParser(c.route_num, c.stop_id_ny, c.direction_ny, c.hide_other_busses)
    njtransit_parser_hoboken = NJTransitParser(c.route_num, c.stop_id_hoboken, c.direction_hoboken, c.show_all_busses)

    # Create one daemon process to grab all
    njtransit_worker = NJTransitWorker(njtransit_parser_ny, njtransit_parser_hoboken, bus_schedules)
    njtransit_worker.daemon = True

    njtransit_worker.start()

    print ' -- Daemon NJ Transit Parser Process Begun -- '


if __name__ == '__main__':
    main()
    app.run()