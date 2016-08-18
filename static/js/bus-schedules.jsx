import React from 'react';
import $ from "jquery";
import BusSchedule from './bus-schedule.jsx';

class BusSchedules extends React.Component {
    constructor() {
        super();
        this.state = {
            busSchedulesNy: [],
            busSchedulesHoboken: []
        };
    }
    render() {
        return  (<div className="row">
                    <div className="col-xs-6 busSchedule-container">
                        <h3>To New York Port Authority</h3>
                        <ul>
                        {
                            this.state.busSchedulesNy.map(item => {
                                return (<BusSchedule key={item.id} item={item}></BusSchedule>);
                            })
                        }
                        </ul>
                    </div>
                    <div className="col-xs-6 busSchedule-container">
                        <h3>To Hoboken Path</h3>
                        <ul>
                        {
                            this.state.busSchedulesHoboken.map(item => {
                                return (<BusSchedule key={item.id} item={item}></BusSchedule>);
                            })
                        }
                        </ul>
                    </div>
                </div>);        
    }

    // API call to
    componentDidMount() {
        $.getJSON('/api/v1/bus_schedules')
            .then(data => {
                this.setState({
                    'busSchedulesNy': data.bus_schedules_ny,
                    'busSchedulesHoboken': data.bus_schedules_hoboken
                });
            });
    }
}

export default BusSchedules;