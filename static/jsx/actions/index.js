import $ from 'jquery';

/*
 * action types
 */

export const UPDATE_NY_BUS = 'UPDATE_NY_BUS';
export const UPDATE_HOBOKEN_BUS = 'UPDATE_HOBOKEN_BUS';
export const FETCH_BUS_SCHEDULES = 'FETCH_BUS_SCHEDULES';
export const RECEIVE_BUS_SCHEDULES = 'RECEIVE_BUS_SCHEDULES';
export const FETCH_BUS_STOPS = 'FETCH_BUS_STOPS';
export const RECEIVE_BUS_STOPS = 'RECEIVE_BUS_STOPS';
export const SET_IS_GEOLOCATING = 'SET_IS_GEOLOCATING';
/*
 * other constants
 */


/*
 * action creators
 */

export function updateNyBus(stopId) {
  localStorage.setItem('nyBusStop', JSON.stringify(stopId));
  return { type: UPDATE_NY_BUS, stopId }
}

export function updateHobokenBus(stopId) {
  localStorage.setItem('hobokenBusStop', JSON.stringify(stopId));
  return { type: UPDATE_HOBOKEN_BUS, stopId }
}

export function receiveBusSchedules(data) {
  return { type: RECEIVE_BUS_SCHEDULES,
    data }
}

export function fetchBusSchedules(busStopNy, busStopHoboken) {
  return function(dispatch) {
    return $.getJSON('/api/v1/bus_schedules', {
        ny_bus_stop: busStopNy,
        hoboken_bus_stop: busStopHoboken
      })
      .then(data => {
        dispatch(receiveBusSchedules(data));
      });
  }
}

export function receiveBusStops(data) {
  return { type: RECEIVE_BUS_STOPS,
    data
  }
}

export function fetchBusStops() {
  return function(dispatch) {
    return $.getJSON('/api/v1/bus_stops')
      .then(data => {
        dispatch(receiveBusStops(data));
      });
  }
}

export function setIsGeolocating(data) {
  return {
    type: SET_IS_GEOLOCATING,
    data
  }
}