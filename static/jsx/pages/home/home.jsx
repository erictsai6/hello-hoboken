import React from 'react';

import WeatherForecasts from './weather-forecasts.jsx';
import BusSchedules from './bus-schedules.jsx';

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            weatherForecast: {
                hourly_forecast: []
            }
        };
    }

    render() {
        return (<div className="row">
                    <WeatherForecasts></WeatherForecasts>
                    <BusSchedules></BusSchedules>
                </div>);
    }

    componentDidMount() {
        
    }
}

export default Home;