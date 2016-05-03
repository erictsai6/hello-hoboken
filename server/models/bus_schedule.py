class BusSchedule(object):
    """BusSchedule"""
    def __init__(self, bus_num, route_num, time_remaining):
        self.id = bus_num
        self.route_num = route_num
        self.time_remaining = int(float(time_remaining)) if time_remaining is not None else None

    def __str__(self):
        return "Bus Num: {}, Route Num: {}, Arriving in: {}".format(self.id, self.route_num,self.time_remaining)

    def to_dict(self):
        return {
            'id': self.id,
            'route_num': self.route_num,
            'time_remaining': self.time_remaining
        }