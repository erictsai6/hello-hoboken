import requests

class WeatherUndergroundParser:

    def __init__(self, api_key, state, city):
        self.api_key = api_key
        self.state = state
        self.city = city
        self.url = 'http://api.wunderground.com/api/{}/hourly/q/{}/{}.json'.format(self.api_key, self.state, self.city)

    def get_weather_forecast(self):

        response = requests.get(self.url)

        if response.status_code == 200:
            return response.json()
        else:
            print 'Error - Weather Underground failed to return valid status code.  Returned status code:', response.status_code
            return None


