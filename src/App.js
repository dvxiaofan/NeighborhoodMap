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
      marker: '',
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
    this.openInfoWindow = this.openInfoWindow.bind(this);
    this.closeInfoWindow = this.closeInfoWindow.bind(this);
  }

  componentDidMount() {
    window.initMap = this.initMap;
    
    loadGoogleMap(`https://maps.googleapis.com/maps/api/js?key=${GOOGLEMAP_KEY}&callback=initMap`);
  };

  initMap() {
    var mapview = document.getElementById('map');
    var infoWindow = new window.google.maps.InfoWindow();
    var bounds = new window.google.maps.LatLngBounds();
    var map = new window.google.maps.Map(mapview, {
      zoom: 13,
      center: {
        lat: 30.592376,
        lng: 114.30511
      },
      mapTypeControl: true
    });

    window.google.maps.event.addListener(infoWindow, 'closeclick', () => {
      this.closeInfoWindow();
    });

    this.setState({
      map: map,
      infowindow: infoWindow,
      bounds: bounds,
    });

    window.google.maps.event.addDomListener(window, "resize", () => {
      var center = map.getCenter();
      window.google.maps.event.trigger(map, "resize");
      this.state.map.setCenter(center);
    });

    window.google.maps.event.addListener(map, "click", () => {
      this.closeInfoWindow();
    });

    var locations = [];
    this.state.locations.map( loca => {
      var longName = `${loca.title} - ${loca.type}`;
      var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(
          loca.location.lat,
          loca.location.lng,
        ),
        animation: window.google.maps.Animation.DROP,
        map: map,
        address: loca.address,
      });

      loca.longname = longName;
      loca.marker = marker;
      loca.display = true;
      locations.push(loca);

      marker.addListener('click', () => {
        this.openInfoWindow(marker);        
      });

      return null;
      
    });

    this.setState({
      locations: locations
    })

    this.changeMapZoom();
  };

  // 根据窗口大小改变地图缩放比例
  changeMapZoom = () => {
    const {
      map,
      bounds 
    } = this.state;
    if (window.innerWidth >= 1200) {
      map.setZoom(14);
    } else if (window.innerWidth >= 699) {
      map.setZoom(13);
    } else {
      map.fitBounds(bounds);
    }
    map.panBy(0, 0);
  }

  // 打开信息窗口
  openInfoWindow = (marker) => {
    this.closeInfoWindow();
    this.state.infowindow.open(this.state.map, marker);
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    this.setState({
      marker: marker
    });
    this.state.infowindow.setContent('加载数据。。。');
    this.state.map.setCenter(marker.getPosition());
    this.state.map.panBy(0, -200);
    this.getMarkerInfo(marker);
  }

  // 关闭信息窗口
  closeInfoWindow = () => {
    if (this.state.marker) {
      this.state.marker.setAnimation(null);
    }
    this.setState({
      prevmarker: ''
    });
    this.state.infowindow.close();
  }

  // 获取标记点信息
  getMarkerInfo = (marker) => {
    this.state.infowindow.setContent(`hello -- ${marker}`);
  } 
  
  render() {
    const {
      locations,
    } = this.state;
    return (
      <div className="App">
        <Menu
          locations={locations}
          openInfoWindow={this.openInfoWindow}
          closeInfoWindow={this.closeInfoWindow}
        />
        <div className='map' id='map'></div>
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