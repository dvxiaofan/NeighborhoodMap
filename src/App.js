import React, { Component } from 'react';
import './App.css';
import { 
	MAP_KEY,
 } from './constants.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <div className='NavMenu'>NavMenu</div>
        <div className='Map'></div>
      </div>
    );
  }
}

export default App;


/* const markers = [
	{ longitude: 114.308872, latitude: 30.613611 },
	{ longitude: 114.298072, latitude: 30.57819 },
	{ longitude: 114.294638, latitude: 30.592081 },
	{ longitude: 114.31335, latitude: 30.602572 },
	{ longitude: 114.269919, latitude: 30.594741 }
];
 */