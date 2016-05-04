import { createReducer } from 'redux-act';
import * as calls from '../actions';
import objectAssign from 'object-assign';


const initialState = {
  data: [],
  isFetching: true
};

export default createReducer({
  [calls.getParkingAreas.request]: (state, payload) => {
    return objectAssign({}, state, {
      isFetching: true
    });
  },
  [calls.getParkingAreas.ok]: (state, payload) => {
    return objectAssign({}, state, {
      data: payload.allocations,
      isFetching: false
    });
  },
  [calls.getParkingAreas.error]: (state, payload) => {
    return objectAssign({}, state, {
      isFetching: false
    });
  }
}, initialState);
