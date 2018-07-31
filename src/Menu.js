import React, { Component } from 'react';
import Search from './Search.js';

class Menu extends Component {

	componentDidMount() {
		if (this.input) {
			this.input.focus();
		}
	}

	render() {
		const {
			locations,
			openInfoWindow,
			closeInfoWindow,
			getMarkerInfo,
		} = this.props;
		
		return (
			<div className='menu'>
				<div className='menu-title'>
					<span>WH Locations</span>
				</div>
				<Search
					locations={locations}
					openInfoWindow={openInfoWindow}
					closeInfoWindow={closeInfoWindow}
					getMarkerInfo={getMarkerInfo}
				>
					Filter
				</Search>
			</div>
		);
	}
}

export default Menu;