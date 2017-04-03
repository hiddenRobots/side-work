import Map from '../components/map';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    city: state.city
  };
}

export default connect(mapStateToProps)(Map);