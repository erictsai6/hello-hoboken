import React from 'react';

import WeatherForecast from './weather-forecast.jsx';
import BusSchedules from './bus-schedules.jsx';

class Home extends React.Component {

    render() {
        return (<div className="row">
                    <WeatherForecast></WeatherForecast>
                    <BusSchedules></BusSchedules>
                </div>);
    }
}

export default Home;