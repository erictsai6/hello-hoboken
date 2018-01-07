import React from 'react';

import WeatherForecasts from './weather-forecasts/weather-forecasts.jsx';
import BusSchedulesList from './bus-schedules/bus-schedules.container.jsx';
import MapDirections from './map-directions/map-directions.jsx';
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
                    <MapDirections></MapDirections>
                    <EmbeddedTweets></EmbeddedTweets>
                </div>);
    }
}

export default Home;