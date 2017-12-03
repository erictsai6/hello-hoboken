import { UPDATE_NY_BUS,
    UPDATE_HOBOKEN_BUS,
    RECEIVE_BUS_SCHEDULES,
    RECEIVE_BUS_STOPS,
    SET_IS_GEOLOCATING } from '../actions';
import { combineReducers } from 'redux'

const DEFAULT_NY_BUS_STOP = 20514;
const DEFAULT_HOBOKEN_BUS_STOP = 20515;

let nyBusStop = localStorage.getItem('nyBusStop') ?
    JSON.parse(localStorage.getItem('nyBusStop')) : DEFAULT_NY_BUS_STOP;
let hobokenBusStop = localStorage.getItem('hobokenBusStop') ?
    JSON.parse(localStorage.getItem('hobokenBusStop')) : DEFAULT_HOBOKEN_BUS_STOP;

const initialState = {
    isGeolocating: false,
    lastUpdatedNy: null,
    lastUpdatedHoboken: null,
    busStopNy: nyBusStop,
    busStopHoboken: hobokenBusStop,
    busStopsNy: [],
    busStopsHoboken: [],
    busSchedulesNy: [],
    busSchedulesHoboken: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NY_BUS:
            return Object.assign({}, state, {
                busStopNy: action.stopId
            });
        case UPDATE_HOBOKEN_BUS:
            return Object.assign({}, state, {
                busStopHoboken: action.stopId
            });
        case RECEIVE_BUS_STOPS:
            return Object.assign({}, state, {
                busStopsNy: action.data.ny_bus_stops,
                busStopsHoboken: action.data.hoboken_bus_stops
            });
        case RECEIVE_BUS_SCHEDULES:
            console.log(action.data);
            return Object.assign({}, state, {
                lastUpdatedNy: new Date(action.data.ny_bus_schedules.last_updated),
                lastUpdatedHoboken: new Date(action.data.hoboken_bus_schedules.last_updated),
                busSchedulesNy: action.data.ny_bus_schedules.bus_schedules,
                busSchedulesHoboken: action.data.hoboken_bus_schedules.bus_schedules
            });
        case SET_IS_GEOLOCATING:
            return Object.assign({}, state, {
                isGeolocating: action.data
            });
        default:
            return state;
    }
}

export default rootReducer;