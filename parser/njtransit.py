from lxml import html
import requests
import re
from models.bus_schedule import BusSchedule

class NJTransitParser:

    def __init__(self):
        self.url = 'http://mybusnow.njtransit.com/bustime/wireless/html/eta.jsp'

    def get_bus_schedules(self, route_num, stop_id, show_all_busses):
        query_params = {
            'route': route_num,
            'id': stop_id,
            'direction': 'New+York',
            'showAllBusses': show_all_busses
        }
        page = requests.get(self.url, params=query_params)
        if page.status_code == 200:
            tree = html.fromstring(page.content)
            text_nodes = tree.xpath('//b/text()')

            bus_schedules = []
            for i in range(0, len(text_nodes) / 2):
                ind = i * 2
                extracted_route_num = self.extract_route_num(text_nodes[ind])
                extracted_time_remaining = self.extract_time_remaining(text_nodes[ind+1])
                bus_schedule = BusSchedule(extracted_route_num, extracted_time_remaining)
                bus_schedules.append(bus_schedule)


        else:
            print 'Error - NJ Transit failed to return valid status code.  Returned status code:', page.status_code

    def extract_route_num(self, input):
        match_obj = re.match( r'^#(\d+)', input, re.M|re.I)
        if match_obj:
            return match_obj.group(1)
        return None

    def extract_time_remaining(self, input):
        match_obj = re.match( r'^(\d+).*MIN', input, re.M|re.I)
        if match_obj:
            return match_obj.group(1)
        return None