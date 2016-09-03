import threading
import time

class NJTransitWorker(threading.Thread):

    def __init__(self, njtransit_parser_ny, njtransit_parser_hoboken, bus_schedules):
        self.njtransit_parser_ny = njtransit_parser_ny
        self.njtransit_parser_hoboken = njtransit_parser_hoboken
        self.bus_schedules = bus_schedules
        self.kill_received = False
        threading.Thread.__init__(self)

    def run (self):
        while not self.kill_received:
            try:
                self.bus_schedules.set_bus_schedules_ny(self.njtransit_parser_ny.get_bus_schedules())
                self.bus_schedules.set_bus_schedules_hoboken(self.njtransit_parser_hoboken.get_bus_schedules())
                time.sleep(15)
            except Exception, e:
                print 'Failed to grab bus schedules', e
