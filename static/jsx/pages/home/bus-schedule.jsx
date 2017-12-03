import React from 'react';

class BusSchedule extends React.Component {

    render() {
        return (<li className="busSchedule">
                <span className="busSchedule-route">Route {this.props.item.route_num}</span>
                <span className="busSchedule-id">Bus #{this.props.item.id}</span>
                {
                    function(timeRemaining) {
                        if (timeRemaining === undefined || timeRemaining === null) {
                            return (<span className="busSchedule-timeRemaining">
                                    DELAYED
                                </span>);
                        }
                        return (
                            <span className={`busSchedule-timeRemaining
                                ${(timeRemaining <= 10 ? ' warningState' : '')}`}>
                                {timeRemaining} min
                            </span>
                        );

                    }(this.props.item.time_remaining)
                }
            </li>);
    }
}

export default BusSchedule;