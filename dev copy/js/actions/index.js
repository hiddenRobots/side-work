export const roll = (die) => {
  return {
    type: 'ROLL_DIE',
    payload: // 'some function that rolls from 1-6 and those numbers are tied to the 6 possible outcomes' i.e., 1=1, 2=2, 3=3, 4=energy, 5=heart, 6=attack
  };
};

export const buy = (card) => {
  return {
    type: 'BUY_CARD',
    payload: // 'sets the state of that player as now having that card; also removes card from market'
  };
};

// etc..
