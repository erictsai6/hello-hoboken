import React from 'react';
import 'fetch';

class WeatherForecast extends React.Component {

    render() {

        if (this.state &&
            typeof this.state.weatherForecast !== 'undefined') {
            return  (<div className="row">
                        {
                            this.state.weatherForecast.hourly_forecast.map(item => {
                                return (<div key={item.FCTTIME.epoch} className="col-xs-1">{item.temp.english} F</div>);
                            })
                        }
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