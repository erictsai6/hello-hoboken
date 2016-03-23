from parser.njtransit import NJTransitParser
from workers.njtransit import NJTransitWorker

from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return "Hello World"

def main():
    print ' -- Initializing NJ Transit Parser Process -- '

    route_num = 126
    stop_id = 20514
    show_all_busses = False
    njtransit_parser = NJTransitParser(route_num, stop_id, show_all_busses)

    njtransit_worker = NJTransitWorker(njtransit_parser)
    njtransit_worker.daemon = True

    njtransit_worker.start()

if __name__ == '__main__':
    main()
    app.run()