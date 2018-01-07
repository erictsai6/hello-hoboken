import { connect } from 'react-redux'
import { updateNyBus,
  updateHobokenBus,
  fetchBusStops,
  fetchBusSchedules,
  setIsGeolocating } from '../../../actions'

import BusSchedules from './bus-schedules.jsx'

const mapStateToProps = (state) => {
  return {
    isGeolocating: state.isGeolocating,
    busStopNy: state.busStopNy,
    busStopHoboken: state.busStopHoboken,
    busStopsNy: state.busStopsNy,
    busStopsHoboken: state.busStopsHoboken,
    lastUpdatedNy: state.lastUpdatedNy,
    lastUpdatedHoboken: state.lastUpdatedHoboken,
    busSchedulesNy: state.busSchedulesNy,
    busSchedulesHoboken: state.busSchedulesHoboken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNyBus: (stopId) => {
      dispatch(updateNyBus(stopId));
    },
    updateHobokenBus: (stopId) => {
      dispatch(updateHobokenBus(stopId));
    },
    fetchBusStops: () => {
      dispatch(fetchBusStops());
    },
    fetchBusSchedules: (busStopNy, busStopHoboken) => {
      dispatch(fetchBusSchedules(busStopNy, busStopHoboken));
    },
    setIsGeolocating: (flag) => {
      dispatch(setIsGeolocating(flag));
    }
  }
}

const BusSchedulesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BusSchedules)

export default BusSchedulesList