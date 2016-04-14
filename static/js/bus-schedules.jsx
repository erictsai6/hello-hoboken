import React from 'react';
import 'fetch';
import BusSchedule from 'js/bus-schedule.jsx!';

class BusSchedules extends React.Component {

    render() {
        if (this.state &&
            typeof this.state.busSchedulesNy !== 'undefined') {
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
        return <div>Awaiting AJAX response</div>
    }

    // API call to
    componentDidMount() {
        fetch('/api/v1/bus_schedules')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    'busSchedulesNy': data.bus_schedules_ny,
                    'busSchedulesHoboken': data.bus_schedules_hoboken
                });
            });
    }
}

export default BusSchedules;