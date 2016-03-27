from lxml import html
import requests
import re
from server.models.bus_schedule import BusSchedule

class NJTransitParser:

    def __init__(self, route_num, stop_id, show_all_busses):
        self.url = 'http://mybusnow.njtransit.com/bustime/wireless/html/eta.jsp'
        self.route_num = route_num
        self.stop_id = stop_id
        self.show_all_busses = show_all_busses

    def get_bus_schedules(self):
        bus_schedules = []

        query_params = {
            'route': self.route_num,
            'id': self.stop_id,
            'direction': 'New+York',
            'showAllBusses': self.show_all_busses
        }
        page = requests.get(self.url, params=query_params)

        if page.status_code == 200:
            tree = html.fromstring(page.content)
            text_nodes = tree.xpath('//b/text()')

            for i in range(0, len(text_nodes) / 2):
                ind = i * 2
                extracted_route_num = int(self.extract_route_num(text_nodes[ind]))
                extracted_time_remaining = int(self.extract_time_remaining(text_nodes[ind+1]))
                bus_schedule = BusSchedule(extracted_route_num, extracted_time_remaining)
                bus_schedules.append(bus_schedule)
        else:
            print 'Error - NJ Transit failed to return valid status code.  Returned status code:', page.status_code

        return bus_schedules


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