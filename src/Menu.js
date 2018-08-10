import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: '',
      query: '',
      suggestions: true
    };

    this.searchLocations = this.searchLocations.bind(this);
  }

//Search the location
  searchLocations(event) {
    this.props.closeInfoWindow();
    const { value } = event.target;
    var locations = [];
    this.props.locations.forEach(location => {
      if (location.title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        location.marker.setVisible(true);
        locations.push(location);
      } else {
        location.marker.setVisible(false);
      }
    });

    this.setState({
      locations: locations,
      query: value
    });
  }

  componentWillMount() {
    this.setState({
      locations: this.props.locations
    });
  }

  render() {
    var locationlist = this.state.locations.map((listItem, index) => {
      return (
        <List
          key={index}
          openInfoWindow={this.props.openInfoWindow.bind(this)}
          data={listItem}
        />
      );
    }, this);

    return (
      <div className='menu'>
				<div
					className='menu-title'

				>街区地图</div>
        <input
          type='text'
          className='menu-input'
          placeholder='search'
          role='search'
					aria-label='搜索框'
          value={this.state.query}
          onChange={this.searchLocations}
        />
        <div className='items'>
          {this.state.suggestions && locationlist}
        </div>
      </div>
    );
  }
}

class List extends Component {

  render() {
    return ( <div 
      className = 'items-list'
      role = 'listItem'
      tabIndex = '0'
      onKeyPress = { this.props.openInfoWindow.bind( this, this.props.data.marker) }
      onClick = { this.props.openInfoWindow.bind(this, this.props.data.marker) }>
      { this.props.data.title } 
      </div>
    );
  }
}

export default Menu;
