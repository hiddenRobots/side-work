import cards from '../deck/cards';

export default function(state = cards, action) {
  switch (action.type) {
  case 'CARD_BOUGHT':
    return action.payload;
  case 'DEAL-CARD':
    return action.payload;
  default:
    return state;
  }
}