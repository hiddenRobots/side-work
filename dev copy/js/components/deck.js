import React, { Component } from 'react';

class Deck extends Component {
  createMarket() {
    return this.props.deck.map((card) => {
      return (
        <div key={card.title} className="market-card" style={{margin: '10px', width: '75px', border: '1px solid black'}}> {card.title} </div>
      );
    });
  }

  render() {
    return (
      <div className="market-container" style={{ marginBottom: '25px', margin: '10px', border: '1px solid black'}}>
        <div style={{margin: '10px', width: '75px', border: '1px solid black'}}>Deck</div>
        { this.createMarket() }
        <div style={{margin: '10px', width: '75px', border: '1px solid black'}}>Discar Pile</div>
      </div>
    );
  }
}

export default Deck;