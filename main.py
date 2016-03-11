from parser.njtransit import NJTransitParser

def main():
    print ' -- Initializing NJ Transit Parser Script -- '

    njtransit = NJTransitParser()

    route_num = 126
    stop_id = 20514
    show_all_busses = False

    njtransit.get_bus_schedules(route_num, stop_id, show_all_busses)

    print ' -- Completed NJ Transit Parser Script -- '

if __name__ == '__main__':
    main()