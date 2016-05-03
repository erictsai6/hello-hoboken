import unittest
from server.parser.njtransit import NJTransitParser
from httmock import urlmatch, HTTMock

bus_schedules_regular_html = open('server/tests/data/bus_schedules_regular.html', 'r')
bus_schedules_less_than_1_html = open('server/tests/data/bus_schedules_less_than_1.html', 'r')

# define matcher:
@urlmatch(netloc=r'(.*\.)?mybusnow\.njtransit\.com$')
def regular_mock(url, request):
    return bus_schedules_regular_html.read()

@urlmatch(netloc=r'(.*\.)?mybusnow\.njtransit\.com$')
def less_than_1_mock(url, request):
    return bus_schedules_less_than_1_html.read()


class MyTest(unittest.TestCase):

    def setUp(self):
        self.route_num = 1
        self.stop_id = 1
        self.direction = True
        self.show_all_busses = True

        self.parser = NJTransitParser(self.route_num, \
            self.stop_id, \
            self.direction, \
            self.show_all_busses)


    def tearDown(self):
        pass


    def test_get_bus_schedules_regular(self):
        with HTTMock(regular_mock):
            r = self.parser.get_bus_schedules()

            self.assertEquals(len(r), 4)

            self.assertEquals(r[0].id, 5264)
            self.assertEquals(r[0].route_num, '126')
            self.assertEquals(r[0].time_remaining, 5)

            self.assertEquals(r[1].id, 5857)
            self.assertEquals(r[1].route_num, '89')
            self.assertEquals(r[1].time_remaining, 9)

            self.assertEquals(r[2].id, 5266)
            self.assertEquals(r[2].route_num, '126')
            self.assertEquals(r[2].time_remaining, 14)


    def test_get_bus_schedules_less_than_1_min(self):
        with HTTMock(less_than_1_mock):
            r = self.parser.get_bus_schedules()

            self.assertEquals(len(r), 3)

            self.assertEquals(r[0].id, 5255)
            self.assertEquals(r[0].route_num, '126')
            self.assertEquals(r[0].time_remaining, 0)

            self.assertEquals(r[1].id, 5302)
            self.assertEquals(r[1].route_num, '89')
            self.assertEquals(r[1].time_remaining, 13)

            self.assertEquals(r[2].id, 5272)
            self.assertEquals(r[2].route_num, '126')
            self.assertEquals(r[2].time_remaining, 20)


if __name__ == '__main__':
    unittest.main()
