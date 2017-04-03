export default function(state = null, action) {
  switch (action.type) {
  case 'MOVE_IN':
    return action.payload;
  case 'MOVE_OUT':
    return action.payload;
  default:
    return state;
  }
}