import { connect } from 'react-redux'
import { updateNyBus, updateHobokenBus, fetchBusStops, fetchBusSchedules } from '../actions'
import BusSchedules from '../pages/home/bus-schedules.jsx'


const mapStateToProps = (state) => {
  return {
    busStopNy: state.busStopNy,
    busStopHoboken: state.busStopHoboken,
    busStopsNy: state.busStopsNy,
    busStopsHoboken: state.busStopsHoboken,
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
    }
  }
}

const BusSchedulesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BusSchedules)

export default BusSchedulesList