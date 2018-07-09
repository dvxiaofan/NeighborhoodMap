import React, { Component } from 'react';
import NavMenu from './NavMenu';
import GMap from './Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <GMap />
      </div>
    );
  }
}

export default App;
