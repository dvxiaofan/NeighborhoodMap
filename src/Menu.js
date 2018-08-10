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

  searchLocations(e) {
		this.props.closeInfoWindow();
		
    const { value } = e.target;
		var locations = [];
		// 过滤显示标记点
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
    var locaList = this.state.locations.map((listItem, index) => {
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
				<div className='menu-title'>街区地图</div>
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
          {this.state.suggestions && locaList}
        </div>
      </div>
    );
  }
}

function List(props) {
	return ( <div 
		className = 'items-list'
		role = 'listItem'
		tabIndex = '0'
		onKeyPress = { props.openInfoWindow.bind( this, props.data.marker) }
		onClick = { props.openInfoWindow.bind(this, props.data.marker) }>
		{ props.data.title } 
		</div>
	);
}

export default Menu;
