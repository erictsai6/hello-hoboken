import threading
import time

class NJTransitWorker(threading.Thread):

    def __init__(self, njtransit_ny_parsers, njtransit_hoboken_parsers, bus_schedules):
        self.njtransit_ny_parsers = njtransit_ny_parsers
        self.njtransit_hoboken_parsers = njtransit_hoboken_parsers
        self.bus_schedules = bus_schedules
        self.kill_received = False
        threading.Thread.__init__(self)

    def run (self):
        while not self.kill_received:
            try:
                for parser in self.njtransit_ny_parsers:
                    self.bus_schedules.set_bus_schedules_ny(parser.stop_id, parser.get_bus_schedules())

                for parser in self.njtransit_hoboken_parsers:
                    self.bus_schedules.set_bus_schedules_hoboken(parser.stop_id, parser.get_bus_schedules())

                time.sleep(15)
            except Exception, e:
                print 'Failed to grab bus schedules', e
