import React from 'react';
import $ from "jquery";
import BusSchedule from './bus-schedule.jsx';

let DEFAULT_NY_BUS_STOP = 20514;
let DEFAULT_HOBOKEN_BUS_STOP = 20515;

class BusSchedules extends React.Component {
    constructor() {
        super();

        // Initializes the previous state
        let nyBusStop = localStorage.getItem('nyBusStop') ? JSON.parse(localStorage.getItem('nyBusStop')) : DEFAULT_NY_BUS_STOP,
            hobokenBusStop = localStorage.getItem('hobokenBusStop') ? JSON.parse(localStorage.getItem('hobokenBusStop')) : DEFAULT_HOBOKEN_BUS_STOP;

        this.handleHobokenChange = this.handleHobokenChange.bind(this);
        this.handleNyChange = this.handleNyChange.bind(this);
        this.geolocate = this.geolocate.bind(this);
        this.state = {
            busStopNy: nyBusStop,
            busStopHoboken: hobokenBusStop,
            busStopsNy: [
                {
                    id: 20514,
                    name: 'Washington & 13th'
                }
            ],
            busStopsHoboken: [
                {
                    id: 20515,
                    name: 'Washington & 12th'
                }
            ],
            busSchedulesNy: [],
            busSchedulesHoboken: []
        };
    }
    render() {
        return  (<div>
                    <div className="col-xs-12 autogeolocate">
                        <button className="btn btn-default" onClick={this.geolocate}>
                            Geolocate
                        </button>
                    </div>
                    <div className="col-sm-6 busSchedule-container">
                    <h3>To New York Port Authority</h3>
                    <select value={this.state.busStopNy} onChange={this.handleNyChange}>
                    {
                        this.state.busStopsNy.map(item => {
                            return (<option key={item.id} 
                                value={item.id}>{item.name}</option>);
                        })
                    }
                    </select>
                    <ul>
                    {
                        this.state.busSchedulesNy.map(item => {
                            return (<BusSchedule key={item.id} item={item}></BusSchedule>);
                        })
                    }
                    </ul>
                </div>
                <div className="col-sm-6 busSchedule-container">
                    <h3>To Hoboken Path</h3>
                    <select value={this.state.busStopHoboken} onChange={this.handleHobokenChange}>
                    {
                        this.state.busStopsHoboken.map(item => {
                            return (<option key={item.id}
                                value={item.id}>{item.name}</option>);
                        })
                    }
                    </select>
                    <ul>
                    {
                        this.state.busSchedulesHoboken.map(item => {
                            return (<BusSchedule key={item.id} item={item}></BusSchedule>);
                        })
                    }
                    </ul>
                </div></div>);        
    }

    // API call to
    componentDidMount() {
        this.retrieveBusStops();
        this.retrieveBusSchedules();
        this.polling = setInterval(() => {
            this.retrieveBusSchedules();
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.polling);
    }

    retrieveBusSchedules(busStopNy, busStopHoboken) {
        busStopNy = busStopNy || this.state.busStopNy;
        busStopHoboken = busStopHoboken || this.state.busStopHoboken;
        $.getJSON('/api/v1/bus_schedules', {
            ny_bus_stop: busStopNy,
            hoboken_bus_stop: busStopHoboken
        })
            .then(data => {
                this.setState({
                    'busSchedulesNy': data.ny_bus_schedules,
                    'busSchedulesHoboken': data.hoboken_bus_schedules
                });
            }); 
    }

    retrieveBusStops() {
        $.getJSON('/api/v1/bus_stops')
            .then(data => {
                this.setState({
                    'busStopsNy': data.ny_bus_stops,
                    'busStopsHoboken': data.hoboken_bus_stops,
                });
            });
    }

    handleNyChange(event) {
        this.setState({busStopNy: event.target.value});
        localStorage.setItem('nyBusStop', JSON.stringify(event.target.value));
        this.retrieveBusSchedules(event.target.value, null);
    }

    handleHobokenChange(event) {
        this.setState({busStopHoboken: event.target.value});
        localStorage.setItem('hobokenBusStop', JSON.stringify(event.target.value));
        this.retrieveBusSchedules(null, event.target.value);        
    }

    geolocate() {
        navigator.geolocation.getCurrentPosition((position) => {
            // position.coords.latitude
            $.getJSON('/api/v1/bus_stops/nearby', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }).then((bus_stop_maps) => {
                this.setState({
                    busStopNy: bus_stop_maps.ny_bus_stop.id,
                    busStopHoboken: bus_stop_maps.hoboken_bus_stop.id,
                });  
                              
            });
        });
    }

    
}

export default BusSchedules;