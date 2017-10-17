import React from 'react';

import WeatherForecasts from './weather-forecasts.jsx';
import BusSchedulesList from './bus-schedules.container.jsx';
import EmbeddedTweets from './embedded-tweets.jsx';

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
                    <EmbeddedTweets></EmbeddedTweets>
                </div>);
    }
}

export default Home;