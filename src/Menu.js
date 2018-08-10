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

//render function
  render() {
    var locationlist = this.state.locations.map((listItem, index) => {
      return (
        <Place
          key={index}
          openInfoWindow={this.props.openInfoWindow.bind(this)}
          data={listItem}
        />
      );
    }, this);

    return (
      <div className='search-field'>
        <input
          role='search'
          aria-labelledby='search'
          id='search-field'
          className='search-input'
          type='text'
          placeholder='search'
          value={this.state.query}
          onChange={this.searchLocations}
        />
        <ul className='location-list'>
          {this.state.suggestions && locationlist}
        </ul>
      </div>
    );
  }
}

class Place extends Component {

  render() {
    return ( <li 
      role = 'button'
      className = 'place'
      tabIndex = '0'
      onKeyPress = {
        this.props.openInfoWindow.bind(
          this,
          this.props.data.marker
        )
      }
      onClick = {
        this.props.openInfoWindow.bind(this, this.props.data.marker)
      } >
      {
        this.props.data.title
      } 
      </li>
    );
  }
}
export default Menu;
