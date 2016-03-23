import threading
import time

class NJTransitWorker(threading.Thread):

    def __init__(self, njtransit_parser, bus_schedules):
        self.njtransit_parser = njtransit_parser
        self.bus_schedules = bus_schedules
        self.kill_received = False
        threading.Thread.__init__(self)

    def run (self):
        while not self.kill_received:
            time.sleep(60)
            self.bus_schedules.set_bus_schedules(self.njtransit_parser.get_bus_schedules())
