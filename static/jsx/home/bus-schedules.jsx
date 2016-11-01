import React from 'react';
import $ from "jquery";
import BusSchedule from './bus-schedule.jsx';

class BusSchedules extends React.Component {
    constructor() {
        super();
        this.handleHobokenChange = this.handleHobokenChange.bind(this);
        this.handleNyChange = this.handleNyChange.bind(this);
        this.geolocate = this.geolocate.bind(this);
        this.state = {
            busStopNy: 20514,
            busStopHoboken: 20515,
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
                        <button onClick={this.geolocate}>
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
    }

    retrieveBusSchedules() {
        $.getJSON('/api/v1/bus_schedules', {
            ny_bus_stop: this.state.busStopNy,
            hoboken_bus_stop: this.state.busStopHoboken
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
        this.retrieveBusSchedules();
    }

    handleHobokenChange(event) {
        this.setState({busStopHoboken: event.target.value});
        this.retrieveBusSchedules();        
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