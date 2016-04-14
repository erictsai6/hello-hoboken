import React from 'react';

class BusSchedule extends React.Component {

    render() {

        // if (!this.props.item) {
        //     return (<li>
        //             Failed to render
        //         </li>);
        // }

        if (this.props.item.time_remaining === undefined || this.props.item.time_remaining === null) {

            return (<li className="busSchedule">
                <span className="busSchedule-id">Bus #{this.props.item.id}</span>
                <span className="busSchedule-route">Route {this.props.item.route_num}</span>
                <span className="busSchedule-timeRemaining warningState">DELAYED</span>
            </li>);
        }
        return (<li className="busSchedule">
                <span className="busSchedule-id">Bus #{this.props.item.id}</span>
                <span className="busSchedule-route">Route {this.props.item.route_num}</span>
                <span className="busSchedule-timeRemaining">{this.props.item.time_remaining} MIN</span>
            </li>);
    }
}

export default BusSchedule;