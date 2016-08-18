import React from 'react';
import $ from "jquery";

class WeatherForecast extends React.Component {

    constructor() {
        super();
        this.state = {
            weatherForecast: {
                hourly_forecast: []
            }
        };
    }
    render() {

        var hourlyForecasts = [];

        for (var i = 0; i < Math.min(this.state.weatherForecast.hourly_forecast.length, 12); i++) {

            var item = this.state.weatherForecast.hourly_forecast[i];
            hourlyForecasts.push(<div key={item.FCTTIME.epoch} className="col-xs-2 col-sm-1">
                <img src={item.icon_url} alt={item.icon}/>
                <span>{item.temp.english}</span></div>)
        }

        return  (<div className="jumbotron-hero">
                    <div className="container">
                        <div className="row">
                            <div className="weatherForecast-container">
                                {hourlyForecasts}
                            </div>
                        </div>
                    </div>
                </div>);

    }

    componentDidMount() {
        return $.getJSON('/api/v1/weather_forecast')
            .then((data) => {
                this.setState({
                    'weatherForecast': data.data
                });
            });
    }
}

export default WeatherForecast;