import React, {
  PropTypes,
  Component,
  Text,
  View,
  ActivityIndicatorIOS,
  TouchableHighlight
 } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux'


const styles = {
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f06292"
  },
  text: {
    alignItems: "center",
    fontWeight: "bold",
    color: "#ffffff"
  },
  name: {
    alignItems: "center",
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 20
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
}

class ParkingAreaDetail extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  constructor(props) {
    super(props);
  };

  componentWillMount() {
    // this.props.actions.getParkingAreas().then();
  };

  componentWillReceiveProps(nextProps) {
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.props.data.site.siteName}</Text>
        <Text style={styles.text}>Last Update: {this.props.data.allocation.timestamp}</Text>
        <Text style={styles.text}>Parking places available: {this.props.data.allocation.text}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    parkingAreas: state.parkingAreas,
    routes: state.routes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

// export default connect(({routes}) => ({routes}))(ParkingAreas);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParkingAreaDetail);
