import React, { Component } from 'react';

class Map extends Component {

  render() {
    if (!this.props.hill) {
      return (<div style={{border: '1px solid black', textAlign: 'center', height: '100px'}}> MAP: City is empty </div>);
    }
    return (
        <div>MAP: {this.props.city}</div>
    );
  }
}

export default Map;