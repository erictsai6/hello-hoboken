from lxml import html
import requests
import re
import datetime
from server.models.bus_schedule import BusSchedule

class NJTransitParser:

    def __init__(self, route_num, stop_id, direction, show_all_busses):
        self.url = 'http://mybusnow.njtransit.com/bustime/wireless/html/eta.jsp'
        self.route_num = route_num
        self.stop_id = stop_id
        self.direction = direction
        self.show_all_busses = show_all_busses

    def get_bus_schedules(self):
        bus_schedules = []

        query_params = {
            'route': self.route_num,
            'id': self.stop_id,
            'direction': self.direction,
            'showAllBusses': self.show_all_busses
        }
        page = requests.get(self.url, params=query_params)

        if page.status_code == 200:
            tree = html.fromstring(page.content)
            b_text_nodes = tree.xpath('//b/text()')
            all_text = tree.text_content()
            bus_numbers = self.extract_bus_numbers(all_text)

            for i in range(0, len(b_text_nodes) / 2):
                ind = i * 2
                extracted_route_num = self.extract_route_num(b_text_nodes[ind])
                extracted_time_remaining = self.extract_time_remaining(b_text_nodes[ind+1])
                extracted_id = bus_numbers[i]

                bus_schedule = BusSchedule(extracted_id, extracted_route_num, extracted_time_remaining)
                bus_schedules.append(bus_schedule)
        else:
            print 'Error - NJ Transit failed to return valid status code.  Returned status code:', page.status_code

        return (bus_schedules, datetime.datetime.now())


    def extract_route_num(self, input):
        match_obj = re.match( r'^#(\d+)', input, re.M|re.I)
        if match_obj:
            try:
                return match_obj.group(1)
            except:
                return None
        return None

    def extract_time_remaining(self, input):
        match_obj = re.match( r'^&lt;.*1.*MIN', input, re.M|re.I)
        if match_obj:
            return "0.5"

        match_obj = re.match( r'^<.*1.*MIN', input, re.M|re.I)
        if match_obj:
            return "0.5"

        match_obj = re.match( r'^(\d+).*MIN', input, re.M|re.I)
        if match_obj:
            try:
                return match_obj.group(1)
            except:
                pass

        return None

    def extract_bus_numbers(self, input):
        bus_numbers = []
        match_iter = re.findall( r'\(\w+ (\d+)\)', input, re.M|re.I)
        for match in match_iter:
            bus_numbers.append(int(match))
        return bus_numbers