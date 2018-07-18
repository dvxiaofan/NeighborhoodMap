import React, { Component } from 'react';
import NavMenu from './NavMenu.js';
import './App.css';
import { 
  GOOGLEMAP_KEY,
 } from './constants.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],
      map: {},
      infowindow: '',
      bounds: '',
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
        },{
          id: '6',
          title: '66',
          address: '666',
          location: { lat: 30.577007, lng: 114.333434 },
          type: '6666'
        },{
          id: '7',
          title: '77',
          address: '777',
          location: { lat: 30.555279, lng: 114.28451 },
          type: '7777'
        }
      ]
    };

    this.initMap = this.initMap.bind(this);
  }

  componentDidMount() {
    window.initMap = this.initMap;
    
    loadGoogleMap(`https://maps.googleapis.com/maps/api/js?key=${GOOGLEMAP_KEY}&callback=initMap`);
  };

  initMap() {

    var mapview = document.getElementById('map');
    var infowindow = new window.google.maps.InfoWindow();
    var bounds = new window.google.maps.LatLngBounds();
    var map = new window.google.maps.Map(mapview, {
      zoom: 13,
      center: {
        lat: 30.592376,
        lng: 114.30511
      },
      mapTypeControl: false
    });

    this.state.locations.map( loca => {
      loca = new window.google.maps.Marker({
        position: loca.location,
        map: map,
        id: loca.id,
        title: loca.title,
        address: loca.address,
        type: loca.type
      });
      bounds.extend(loca.position);
      loca.addListener('click', () => {
        this.toggleBounce(loca);
        this.createInfowindow(loca);
        map.setCenter(loca.position);
        map.panBy(-100, -200);
      });

      this.state.markers.push(loca);
      return null;
      
    });

    this.setState({
      map: map,
      infowindow: infowindow,
      bounds: bounds,
    });
    
  };
  
  render() {
    return (
      <div className="App">
        <NavMenu/>
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