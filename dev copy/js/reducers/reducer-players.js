let dummyPlayers = [
  {
    id: 1,
    name: 'zach'
  },
  {
    id: 2,
    name: 'derek'
  },
  {
    id: 3,
    name: 'westin'
  },
  {
    id: 4,
    name: 'jaime'
  },
];

let idCounter = 5;

export default function(state = dummyPlayers, action) {
  switch (action.type) {
  case 'ADD_PLAYER':
    let data = action.payload;
    let copy = dummyPlayers.slice();
    copy.push({ id: ++idCounter, name: data.payload });
    dummyPlayers = copy;
    return copy;
  }
  return state;
}