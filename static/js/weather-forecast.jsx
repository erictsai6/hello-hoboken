import React from 'react';
import 'fetch';

class WeatherForecast extends React.Component {

    render() {

        if (this.state &&
            typeof this.state.weatherForecast !== 'undefined') {

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
        return (<div>Awaiting AJAX response</div>);

    }

    // API call to
    componentDidMount() {
        fetch('/api/v1/weather_forecast')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    'weatherForecast': data.data
                });
            });
    }
}

export default WeatherForecast;