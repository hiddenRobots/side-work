import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PlayerTiles from '../components/players';

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps)(PlayerTiles);