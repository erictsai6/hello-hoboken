class BusSchedules(object):
    """BusSchedules"""
    def __init__(self):
        self.bus_schedules_ny = {}
        self.bus_schedules_hoboken = {}

    def set_bus_schedules_ny(self, bus_stop_id, bus_schedules, last_updated):
        self.bus_schedules_ny[str(bus_stop_id)] = {
            'bus_schedules': bus_schedules,
            'last_updated': last_updated
        }

    def get_bus_schedules_ny(self, bus_stop_id):
        return self.bus_schedules_ny[str(bus_stop_id)] \
            if str(bus_stop_id) in self.bus_schedules_ny else {
                'bus_schedules': []
            }


    def set_bus_schedules_hoboken(self, bus_stop_id, bus_schedules, last_updated):
        self.bus_schedules_hoboken[str(bus_stop_id)] = {
            'bus_schedules': bus_schedules,
            'last_updated': last_updated
        }

    def get_bus_schedules_hoboken(self, bus_stop_id):
        return self.bus_schedules_hoboken[str(bus_stop_id)] \
            if str(bus_stop_id) in self.bus_schedules_hoboken else {
                'bus_schedules': []
            }

    def to_dict(self):

        bus_schedules_ny = {}
        bus_schedules_hoboken = {}

        for k, v in self.bus_schedules_ny.iteritems():
            bus_schedules_ny[k] = {
                'bus_schedules': [b.to_dict() for b in v['bus_schedules']],
                'last_updated': v['last_updated']
            }

        for k, v in self.bus_schedules_hoboken.iteritems():
            bus_schedules_hoboken[k] = {
                'bus_schedules': [b.to_dict() for b in v['bus_schedules']],
                'last_updated': v['last_updated']
            }

        return {
            'ny_bus_schedules': bus_schedules_ny,
            'hoboken_bus_schedules': bus_schedules_hoboken
        }