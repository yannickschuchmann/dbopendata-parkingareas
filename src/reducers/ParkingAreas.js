import { createReducer } from 'redux-act';
import * as calls from '../actions';
import objectAssign from 'object-assign';


const initialState = {
  data: []
};

export default createReducer({
  [calls.getParkingAreas.request]: (state, payload) => {
    console.log('getParkingAreas.request ', payload);
    return state;
  },
  [calls.getParkingAreas.ok]: (state, payload) => {
    return objectAssign({}, state, {
      data: payload.results
    });
  },
  [calls.getParkingAreas.error]: (state, payload) => {
    console.log('getParkingAreas.error ', payload);
    return state;
  }
}, initialState);
