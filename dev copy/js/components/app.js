import React from 'react';
import PlayerTiles from '../containers/players';
import Map from '../containers/map';
import Deck from '../containers/deck';
import DiceBox from '../components/dice';

const App = () => (
  <div>
    <Map />
    <Deck />
    <DiceBox />
    <PlayerTiles />
  </div>
);


export default App;