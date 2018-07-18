import React, { Component } from 'react';
import './App.css';
import { 
  GOOGLEMAP_KEY,
 } from './constants.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: '',
      markers: '',
      locations: [
        {
          id: '1',
          title: '11',
          address: '111',
          location: { lat: 30.613611, lng: 114.308872 },
          type: '1111'
        },{
          id: '2',
          title: '22',
          address: '222',
          location: { lat: 30.57819, lng: 114.298072 },
          type: '2222'
        },{
          id: '3',
          title: '33',
          address: '333',
          location: { lat: 30.592081, lng: 114.294638 },
          type: '3333'
        },{
          id: '4',
          title: '44',
          address: '444',
          location: { lat: 30.602572, lng: 114.31335 },
          type: '4444'
        },{
          id: '5',
          title: '55',
          address: '555',
          location: { lat: 30.594741, lng: 114.269919 },
          type: '5555'
        }
      ]
    };
  }

  componentDidMount() {
    window.initMap = this.initMap;
    
    loadGoogleMap(`https://maps.googleapis.com/maps/api/js?key=${GOOGLEMAP_KEY}&callback=initMap`);
  }

  initMap() {

    var mapview = document.getElementById("map");
    var map = new window.google.maps.Map(mapview, {
      zoom: 13,
      center: {
        lat: 30.554393,
        lng: 114.308543
      },
      
      mapTypeControl: true
    });
    
  }
  
  render() {
    return (
      <div className="App">
        <div className='NavMenu'>NavMenu</div>
        <div className='Map' id='map'></div>
      </div>
    );
  }
}

export default App;

//  加载google地图
function loadGoogleMap(src) {
  var script = window.document.createElement('script');
  var ref = window.document.getElementsByTagName('script')[0];
  script.src = src;
  script.async = true;
  script.onerror = () => {
    document.write('地图无法加载');
  };
  ref.parentNode.insertBefore(script, ref);
}