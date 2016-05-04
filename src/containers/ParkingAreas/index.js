import React, {
  PropTypes,
  Component,
  Text,
  View,
  ListView,
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
    backgroundColor: "#7c4dff"
  },
  list: {
    flex: 1
  },
  row: {
    margin: 10,
    color: "#ffffff",
    fontWeight: "bold"
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.parkingAreas.data)
    })
  };

  handleRowPress(rowData) {
    Actions.areaDetail({data: rowData, title: rowData.site.stationName});
  };

  render() {
    const { isFetching } = this.props.parkingAreas;

    const listing = isFetching ? (<ActivityIndicatorIOS
      animating={isFetching}
      color="#ffffff"
      size="large"
      style={styles.indicator}
      />) : (
        <ListView
          automaticallyAdjustContentInsets={true}
          style={styles.list}
          dataSource={this.state.dataSource}
          pageSize={40}
          renderRow={(rowData) => (
            <TouchableHighlight onPress={this.handleRowPress.bind(this, rowData)}>
              <Text style={styles.row}>{rowData.site.stationName}</Text>
            </TouchableHighlight>
          )}/>
      );

    return (
      <View style={styles.container}>
        {listing}
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
)(ParkingAreas);
