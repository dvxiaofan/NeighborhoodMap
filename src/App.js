import React, { Component } from 'react';
import Menu from './Menu.js';
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
          locaID: '1',
          title: 'one',
          address: '111',
          location: { lat: 30.613611, lng: 114.308872 },
          type: 'foot'
        },{
          locaID: '2',
          title: 'two',
          address: '222',
          location: { lat: 30.57819, lng: 114.298072 },
          type: 'game'
        },{
          locaID: '3',
          title: 'three',
          address: '333',
          location: { lat: 30.592081, lng: 114.294638 },
          type: 'voice'
        },{
          locaID: '4',
          title: 'four',
          address: '444',
          location: { lat: 30.602572, lng: 114.31335 },
          type: 'car'
        },{
          locaID: '5',
          title: 'five',
          address: '555',
          location: { lat: 30.594741, lng: 114.269919 },
          type: 'mountain'
        },{
          locaID: '6',
          title: 'six',
          address: '666',
          location: { lat: 30.577007, lng: 114.333434 },
          type: 'udacity'
        },{
          locaID: '7',
          title: 'seven',
          address: '777',
          location: { lat: 30.555279, lng: 114.28451 },
          type: 'foot'
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
    const {
      locations,
    } = this.state;
    return (
      <div className="App">
        <Menu
          locations={locations}
        />
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