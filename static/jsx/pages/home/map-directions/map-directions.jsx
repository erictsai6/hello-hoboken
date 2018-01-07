import React from 'react';
import { connect } from 'react-redux'
import { setMapDirection } from '../../../actions'

const HOBOKEN_ENDPOINT = 'Hoboken Bus Terminal';
const NEW_YORK_ENDPOINT = 'Port Authority Bus Terminal';

class MapDirections extends React.Component {

    constructor() {
        super();

        this.state = {
            duration: null
        };
        this.updateGoogleMap = this.updateGoogleMap.bind(this);
        this.handleMapDirection = this.handleMapDirection.bind(this);
    }
    render() {

        return  (<div>
                    <div className="col-md-6 col-md-offset-3">
                        <h3>Select direction</h3>
                        <select className="form-control"
                            value={this.props.toMapDirection}
                            onChange={this.handleMapDirection}>
                            <option value="newyork">To New York</option>
                            <option value="hoboken">To Hoboken</option>
                        </select>
                        <div className="center">
                            Duration: <span>{this.state.duration}</span>
                        </div>
                        <div className="padding-top" id="google-map"></div>
                    </div>
                </div>);

    }

    componentDidMount() {
        this.updateGoogleMap(this.props.toMapDirection);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.toMapDirection !== nextProps.toMapDirection) {
            // Trigger map direction change
            this.updateGoogleMap(nextProps.toMapDirection);

        }
    }

    updateGoogleMap(toMapDirection) {
        let origin = HOBOKEN_ENDPOINT;
        let destination = NEW_YORK_ENDPOINT;
        if (toMapDirection === 'hoboken') {
            origin = NEW_YORK_ENDPOINT;
            destination = HOBOKEN_ENDPOINT;
        }

        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;

        this.map = new google.maps.Map(document.getElementById('google-map'), {
            zoom: 9,
            center: {
                lat: 40.731950,
                lng: -74.023751
            }
        });
        this.directionsDisplay.setMap(this.map);

        this.directionsService.route({
            origin: origin,
            destination: destination,
            travelMode: 'DRIVING',
            drivingOptions: {
                departureTime: new Date(),
                trafficModel: 'pessimistic'
            }
        }, (response, status) => {
            if (status === 'OK') {
                this.directionsDisplay.setDirections(response);
                const duration = response.routes[0].legs[0].duration.text;
                this.setState({
                    duration
                });
            } else {
                console.log('Directions request failed due to ' + status);
            }
        });

    }

    handleMapDirection(event) {
        this.props.setMapDirection(event.target.value);
    }

}

const mapStateToProps = (state) => {
    return {
        toMapDirection: state.toMapDirection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMapDirection: (direction) => {
            dispatch(setMapDirection(direction));
        }
    }
}

const MapDirectionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MapDirections)

export default MapDirectionsContainer;