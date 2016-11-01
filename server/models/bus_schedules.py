class BusSchedules(object):
    """BusSchedules"""
    def __init__(self):        
        self.bus_schedules_ny = {}
        self.bus_schedules_hoboken = {}

    def set_bus_schedules_ny(self, bus_stop_id, bus_schedules):
        self.bus_schedules_ny[str(bus_stop_id)] = bus_schedules

    def get_bus_schedules_ny(self, bus_stop_id):
        return self.bus_schedules_ny[str(bus_stop_id)] \
            if str(bus_stop_id) in self.bus_schedules_ny else []


    def set_bus_schedules_hoboken(self, bus_stop_id, bus_schedules):
        self.bus_schedules_hoboken[str(bus_stop_id)] = bus_schedules

    def get_bus_schedules_hoboken(self, bus_stop_id):
        return self.bus_schedules_hoboken[str(bus_stop_id)] \
            if str(bus_stop_id) in self.bus_schedules_hoboken else []

    def to_dict(self):

        bus_schedules_ny = {}
        bus_schedules_hoboken = {}

        for k, v in self.bus_schedules_ny.iteritems():
            bus_schedules_ny[k] = [b.to_dict() for b in v]

        for k, v in self.bus_schedules_hoboken.iteritems():
            bus_schedules_hoboken[k] = [b.to_dict() for b in v]

        return {
            'ny_bus_schedules': bus_schedules_ny,
            'hoboken_bus_schedules': bus_schedules_hoboken
        }