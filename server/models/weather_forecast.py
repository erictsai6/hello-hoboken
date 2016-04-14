import datetime

class WeatherForecast(object):
    """BusSchedules"""
    def __init__(self, state, city):
        self.data = None
        self.state = state
        self.city = city
        self.current_dt = datetime.datetime.utcnow()

    def set_data(self, data):
        self.data = data
        self.current_dt = datetime.datetime.utcnow()

    def to_dict(self):
        return {
            'data': self.data,
            'current_dt': self.current_dt
        }