import React from 'react';

import WeatherForecasts from './weather-forecasts.jsx';
import BusSchedulesList from './bus-schedules.container.jsx';

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
                    <BusSchedulesList></BusSchedulesList>
                </div>);
    }

    componentDidMount() {
        
    }
}

export default Home;