import { combineReducers } from 'redux';
import routes from './routes';
import parkingAreas from './ParkingAreas';

export default combineReducers({
  routes,
  parkingAreas
});
