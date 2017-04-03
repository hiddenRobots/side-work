import { combineReducers } from 'redux';
import PlayersReducer from './reducer-players';
import CityReducer from './reducer-city';
import DeckReducer from './reducer-deck';

//is missing DiceReducer - file must also be created to keep track of dice behavior
const allReducers = combineReducers({
  players: PlayersReducer,
  city: CityReducer,
  deck: DeckReducer,
});

export default allReducers;