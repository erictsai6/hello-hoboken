import React from 'react';
import { connect } from 'react-redux'
import { setMapDirection } from '../../../actions'
import Loader from '../../../shared/loader/loader.jsx';

const HOBOKEN_ENDPOINT = 'Hoboken Bus Terminal';
const NEW_YORK_ENDPOINT = 'Port Authority Bus Terminal';

class MapDirections extends React.Component {

    constructor() {
        super();

        this.state = {
            isFetching: false,
            distance: null,
            duration: null,
            durationInTraffic: null
        };
        this.initGoogleMap = this.initGoogleMap.bind(this);
        this.updateGoogleMap = this.updateGoogleMap.bind(this);
        this.handleMapDirection = this.handleMapDirection.bind(this);
    }
    render() {

        return  (<div>
                    <div className="clearfix"></div>
                    <div className="col-md-6 col-md-offset-3">
                        { (this.state.isFetching)
                            ? <div className="loaderContainer">
                                <div className="loader">
                                    <Loader></Loader>
                                </div>
                            </div>
                            : null
                        }
                        <h3>Select direction</h3>
                        <select className="form-control"
                            value={this.props.toMapDirection}
                            onChange={this.handleMapDirection}>
                            <option value="newyork">To New York</option>
                            <option value="hoboken">To Hoboken</option>
                        </select>
                        {
                            (this.state.distance)
                                ? <div>
                                    <div className="center">
                                        <span className="label-header">Distance: </span><span>{this.state.distance}</span>
                                    </div>
                                    <div className="center">
                                        <span className="label-header">Duration: </span><span>{this.state.duration}</span>
                                    </div>
                                    <div className="center">
                                        <span className="label-header">Duration in traffic: </span><span>{this.state.durationInTraffic}</span>
                                    </div>
                                </div>
                            : null
                        }
                        <div className="padding-top" id="google-map"></div>
                    </div>
                </div>);

    }

    componentDidMount() {
        this.initGoogleMap();
        this.updateGoogleMap(this.props.toMapDirection);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.toMapDirection !== nextProps.toMapDirection) {
            // Trigger map direction change
            this.updateGoogleMap(nextProps.toMapDirection);

        }
    }

    initGoogleMap() {
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

    }

    updateGoogleMap(toMapDirection) {
        let origin = HOBOKEN_ENDPOINT;
        let destination = NEW_YORK_ENDPOINT;
        if (toMapDirection === 'hoboken') {
            origin = NEW_YORK_ENDPOINT;
            destination = HOBOKEN_ENDPOINT;
        }

        this.setState({
            isFetching: true
        });
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
                const distance = response.routes[0].legs[0].distance.text;
                const duration = response.routes[0].legs[0].duration.text;
                const durationInTraffic = response.routes[0].legs[0].duration_in_traffic.text;
                this.setState({
                    distance,
                    duration,
                    durationInTraffic,
                    isFetching: false
                });
            } else {
                this.setState({
                    isFetching: false
                });
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