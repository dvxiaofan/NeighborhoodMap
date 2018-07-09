import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Map from './Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <Map />
      </div>
    );
  }
}

export default App;
