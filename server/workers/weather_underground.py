import threading
import time

class WeatherUndergroundWorker(threading.Thread):

    def __init__(self, weather_underground_parser, weather_forecast):
        self.weather_underground_parser = weather_underground_parser
        self.weather_forecast = weather_forecast
        self.kill_received = False
        threading.Thread.__init__(self)

    def run (self):
        while not self.kill_received:
            self.weather_forecast.set_data(self.weather_underground_parser.get_weather_forecast())
            time.sleep(1800)
