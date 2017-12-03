import React from 'react';
import $ from "jquery";
import BusSchedule from './bus-schedule.jsx';

let DEFAULT_NY_BUS_STOP = 20514;
let DEFAULT_HOBOKEN_BUS_STOP = 20515;

class BusSchedules extends React.Component {
    constructor() {
        super();

        this.geolocate = this.geolocate.bind(this);
        this.handleNyChange = this.handleNyChange.bind(this);
        this.handleHobokenChange = this.handleHobokenChange.bind(this);
    }

    render() {
        return  (<div>
                    <div className="col-xs-12 autogeolocate">
                        <button className="btn btn-primary" onClick={this.geolocate}
                            disabled={this.props.isGeolocating}>
                            {!this.props.isGeolocating ? 'Geolocate' : 'Geolocating...'}
                        </button>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-sm-6 busSchedule-container">
                    <h3>To New York Port Authority</h3>
                    <select className="form-control" value={this.props.busStopNy} onChange={this.handleNyChange}>
                    {
                        this.props.busStopsNy.map(item => {
                            return (<option key={item.id}
                                value={item.id}>{item.name}</option>);
                        })
                    }
                    </select>
                    {
                        function(lastUpdated) {
                            if (lastUpdated) {
                                return (<div>{lastUpdated.toString()}</div>);
                            }
                        }(this.props.lastUpdatedNy)
                    }
                    <ul>
                    {
                        this.props.busSchedulesNy.map(item => {
                            return (<BusSchedule key={item.id} item={item}></BusSchedule>);
                        })
                    }
                    </ul>
                </div>
                <div className="col-sm-6 busSchedule-container">
                    <h3>To Hoboken Path</h3>
                    <select className="form-control" value={this.props.busStopHoboken} onChange={this.handleHobokenChange}>
                    {
                        this.props.busStopsHoboken.map(item => {
                            return (<option key={item.id}
                                value={item.id}>{item.name}</option>);
                        })
                    }
                    </select>
                    {
                        function(lastUpdated) {
                            if (lastUpdated) {
                                return (<div>{lastUpdated.toString()}</div>);
                            }
                        }(this.props.lastUpdatedHoboken)
                    }
                    <ul>
                    {
                        this.props.busSchedulesHoboken.map(item => {
                            return (<BusSchedule key={item.id} item={item}></BusSchedule>);
                        })
                    }
                    </ul>
                </div></div>);
    }

    // API call to
    componentDidMount() {
        this.props.fetchBusStops();
        this.props.fetchBusSchedules(this.props.busStopNy, this.props.busStopHoboken);

        this.polling = setInterval(() => {
            this.props.fetchBusSchedules(this.props.busStopNy, this.props.busStopHoboken);
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.polling);
    }

    handleNyChange(event) {
        this.props.updateNyBus(event.target.value);
        this.props.fetchBusSchedules(event.target.value, this.props.busStopHoboken);
    }

    handleHobokenChange(event) {
        this.props.updateHobokenBus(event.target.value);
        this.props.fetchBusSchedules(this.props.busStopNy, event.target.value);
    }

    geolocate(event) {
        if (this.isGeolocating) {
            return;
        }

        this.props.setIsGeolocating(true);
        navigator.geolocation.getCurrentPosition((position) => {
            // position.coords.latitude
            $.getJSON('/api/v1/bus_stops/nearby', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }).then((bus_stop_maps) => {
                this.props.setIsGeolocating(false);
                this.props.updateNyBus(bus_stop_maps.ny_bus_stop.id);
                this.props.updateHobokenBus(bus_stop_maps.hoboken_bus_stop.id);
                this.props.fetchBusSchedules(bus_stop_maps.ny_bus_stop.id, bus_stop_maps.hoboken_bus_stop.id);
            }).catch(() => {
                this.props.setIsGeolocating(false);
            });
        });
    }


}

export default BusSchedules;