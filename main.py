from server.parser.njtransit import NJTransitParser
from server.workers.njtransit import NJTransitWorker
from server.models.bus_schedules import BusSchedules

from flask import Flask, jsonify
app = Flask(__name__)

bus_schedules = BusSchedules()

@app.route('/api/v1/bus_schedules')
def api_bus_schedules():
    global bus_schedules
    return jsonify(bus_schedules.to_dict())

def main():
    print ' -- Initializing NJ Transit Parser Process -- '

    global bus_schedules

    route_num = 126
    stop_id = 20514
    show_all_busses = False
    njtransit_parser = NJTransitParser(route_num, stop_id, show_all_busses)

    njtransit_worker = NJTransitWorker(njtransit_parser, bus_schedules)
    njtransit_worker.daemon = True

    njtransit_worker.start()

    print ' -- Daemon NJ Transit Parser Process Begun -- '


if __name__ == '__main__':
    main()
    app.run()