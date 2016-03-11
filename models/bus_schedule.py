class BusSchedule(object):
    """BusSchedule"""
    def __init__(self, route_num, time_remaining):
        self.route_num = route_num
        self.time_remaining = time_remaining

    def __str__(self):
        return "Route Num: " + self.route_num + ", Arriving in: " + self.time_remaining + " min"