import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Deck from '../components/deck';

function mapStateToProps(state) {
  return {
    deck: state.deck
  };
}

// Needs access to an action that allows it to deal new cards after a card is bought:
// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({actionName}, dispatch);
// }

export default connect(mapStateToProps)(Deck);