import {createActionAsync} from 'redux-act-async';
import {createAction} from 'redux-act';
import api from '../api';
export let getParkingAreas = createActionAsync('GET_PARKING_AREAS', api.parkingArea.getParkingAreas);
