import React from 'react';

class WeatherForecast extends React.Component {

    constructor() {
        super();        
    }

    render() {

        return (<div className="hourlyForecast">
                    <div className="hourlyForecast-time">{this.props.item.FCTTIME.civil}</div>
                    <img className="hourlyForecast-icon" src={this.props.item.icon_url} alt={this.props.item.icon}/>
                    <div><span className="card-label">Temp:</span> {this.props.item.temp.english}&deg;F</div>
                    <div><span className="card-label">Feels like:</span> {this.props.item.feelslike.english}&deg;F</div>
                    <div><span className="card-label">Humidity:</span> {this.props.item.humidity}%</div>
                    <div className="hourlyForecast-condition">{this.props.item.condition}</div>
                </div>);

    }

}

export default WeatherForecast;