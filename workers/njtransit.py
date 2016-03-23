import threading
import time

class NJTransitWorker(threading.Thread):

    def __init__(self, njtransit_parser):
        self.__njtransit_parser = njtransit_parser
        self.kill_received = False
        threading.Thread.__init__(self)

    def run (self):
        while not self.kill_received:
            time.sleep(10)
            self.__njtransit_parser.get_bus_schedules()
