import React, { Component } from 'react';

class PlayerTiles extends Component {
  createTiles() {
    return this.props.players.map((player) => {
      return (
        <div key={player.id} className="player-tile" style={{margin: '25px', width: '200px', border: '1px solid black'}}> 
          {player.name} 
        </div>
      );
    });
  }

  render() {
    return (
      <div className="players-box" style={{marginTop: '25px', border: '1px solid black'}}>
        { this.createTiles() }
      </div>
    );
  }
}

export default PlayerTiles;