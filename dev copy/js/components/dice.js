import React, { Component } from 'react';

class DiceBox extends Component {

  render() {
    return (
      <div className="dice-box" style={{border: '1px solid black'}}>
        <div key="1" className="die" style={{height: '10px', width: '10px', border: '1px solid black', margin: '5px'}}>
        </div>
        <div key="2" className="die" style={{height: '10px', width: '10px', border: '1px solid black', margin: '5px'}}>
        </div>
        <div key="3" className="die" style={{height: '10px', width: '10px', border: '1px solid black', margin: '5px'}}>
        </div>
        <div key="4" className="die" style={{height: '10px', width: '10px', border: '1px solid black', margin: '5px'}}>
        </div>
        <div key="5" className="die" style={{height: '10px', width: '10px', border: '1px solid black', margin: '5px'}}>
        </div>
        <div key="6" className="die" style={{height: '10px', width: '10px', border: '1px solid black', margin: '5px'}}>
        </div>
        <div key="7" className="die" style={{height: '10px', width: '10px', border: '1px solid black', margin: '5px'}}>
        </div>
        <div key="8" className="die" style={{height: '10px', width: '10px', border: '1px solid black', margin: '5px'}}>
        </div>
      </div>
    );
  }
}

export default DiceBox;