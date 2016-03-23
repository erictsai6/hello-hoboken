class BusSchedules(object):
    """BusSchedules"""
    def __init__(self):
        self.bus_schedules = []

    def set_bus_schedules(self, bus_schedules):
        self.bus_schedules = bus_schedules

    def to_dict(self):
        bus_schedules = [b.to_dict() for b in self.bus_schedules]
        return {
            'bus_schedules': bus_schedules
        }