class BusSchedules(object):
    """BusSchedules"""
    def __init__(self):
        self.bus_schedules_ny = []
        self.bus_schedules_nj = []

    def set_bus_schedules_ny(self, bus_schedules):
        self.bus_schedules_ny = bus_schedules

    def set_bus_schedules_hoboken(self, bus_schedules):
        self.bus_schedules_hoboken = bus_schedules

    def to_dict(self):
        bus_schedules_ny = [b.to_dict() for b in self.bus_schedules_ny]
        bus_schedules_hoboken = [b.to_dict() for b in self.bus_schedules_hoboken]

        return {
            'bus_schedules_ny': bus_schedules_ny,
            'bus_schedules_hoboken': bus_schedules_hoboken
        }