import React, { PropTypes, Component, Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';


const styles = {
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#ffffff"
  }
}

class ParkingAreas extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(this.props.parkingAreas.data),
    }
  }

  componentWillMount() {
    this.props.actions.getParkingAreas().then();
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.parkingAreas.data)
    })
  };

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (<Text>{rowData.station}</Text>)}/>
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
)(ParkingAreas);
