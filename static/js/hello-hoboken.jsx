import React from 'react';
import 'fetch';

import WeatherForecast from 'js/weather-forecast.jsx!';
import BusSchedules from 'js/bus-schedules.jsx!';

class HelloHoboken extends React.Component {

    render() {
        return (<div className="row">
                    <WeatherForecast></WeatherForecast>
                    <BusSchedules></BusSchedules>
                </div>);
    }
}

export default HelloHoboken;