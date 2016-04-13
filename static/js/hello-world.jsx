import React from 'react';
import 'fetch';

class HelloWorld extends React.Component {

    render() {
        if (this.state &&
            typeof this.state.busSchedulesNy !== 'undefined') {
            return  (<div className="row">
                        <div className="col-xs-6">
                            <h3>To New York Port Authority</h3>
                            <ul>
                            {
                                this.state.busSchedulesNy.map(item => {
                                    return (<li key={item.id}>
                                        {item.route_num} - {item.time_remaining} minutes
                                    </li>);
                                })
                            }
                            </ul>
                        </div>
                        <div className="col-xs-6">
                            <h3>To Hoboken Path</h3>
                            <ul>
                            {
                                this.state.busSchedulesHoboken.map(item => {
                                    return (<li key={item.id}>
                                        {item.route_num} - {item.time_remaining} minutes
                                    </li>);
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

export default HelloWorld;