import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk'

import ParkingAreas from '../containers/ParkingAreas';
import ParkingAreaDetail from '../containers/ParkingAreaDetail';

const RouterWithRedux = connect()(Router);
import reducers from '../reducers';

const middleware = [thunk];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="areas" component={ParkingAreas} title="Parking areas" initial={true} />
            <Scene key="areaDetail" component={ParkingAreaDetail} title="Detail" />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
