/*
 * action types
 */

export const UPDATE_NY_BUS = 'UPDATE_NY_BUS'
export const UPDATE_HOBOKEN_BUS = 'UPDATE_HOBOKEN_BUS'

/*
 * other constants
 */


/*
 * action creators
 */

export function updateNyBus(stopId) {
  return { type: UPDATE_NY_BUS, stopId }
}

export function updateHobokenBus(stopId) {
  return { type: UPDATE_HOBOKEN_BUS, stopId }
}