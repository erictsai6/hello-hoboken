import { UPDATE_NY_BUS, UPDATE_HOBOKEN_BUS } from '../actions';
import { combineReducers } from 'redux'


const DEFAULT_NY_BUS_STOP = 20514;
const DEFAULT_HOBOKEN_BUS_STOP = 20515;

let nyBusStop = localStorage.getItem('nyBusStop') ? 
    JSON.parse(localStorage.getItem('nyBusStop')) : DEFAULT_NY_BUS_STOP;
let hobokenBusStop = localStorage.getItem('hobokenBusStop') ? 
    JSON.parse(localStorage.getItem('hobokenBusStop')) : DEFAULT_HOBOKEN_BUS_STOP;

const initialState = {
    busStopNy: nyBusStop,
    busStopHoboken: hobokenBusStop,
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
        default: 
            return state;
    }
}

export default rootReducer;