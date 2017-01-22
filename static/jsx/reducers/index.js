import { UPDATE_NY_BUS, UPDATE_HOBOKEN_BUS, RECEIVE_BUS_SCHEDULES, RECEIVE_BUS_STOPS } from '../actions';
import { combineReducers } from 'redux'

const DEFAULT_NY_BUS_STOP = 20514;
const DEFAULT_HOBOKEN_BUS_STOP = 20515;

let nyBusStop = localStorage.getItem('nyBusStop') ? 
    JSON.parse(localStorage.getItem('nyBusStop')) : DEFAULT_NY_BUS_STOP;
let hobokenBusStop = localStorage.getItem('hobokenBusStop') ? 
    JSON.parse(localStorage.getItem('hobokenBusStop')) : DEFAULT_HOBOKEN_BUS_STOP;

console.log(nyBusStop);
const initialState = {
    busStopNy: nyBusStop,
    busStopHoboken: hobokenBusStop,
    busStopsNy: [],
    busStopsHoboken: [],
    busSchedulesNy: [],
    busSchedulesHoboken: []
};

function rootReducer(state = initialState, action) {
    console.log(action);
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
            return Object.assign({}, state, {
                busSchedulesNy: action.data.ny_bus_schedules,                
                busSchedulesHoboken: action.data.hoboken_bus_schedules 
            });
        default: 
            return state;
    }
}

export default rootReducer;