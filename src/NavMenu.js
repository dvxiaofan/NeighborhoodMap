import React, { Component } from 'react';
import Search from './Search.js';



class NavMenu extends Component {

	componentDidMount() {
		if (this.input) {
			this.input.focus();
		}
	}

	render() {
		return (
			<div className='NavMenu'>
				<span>WH Locations</span>
				<Search>
					Filter
				</Search>
			</div>
		);
	}
}

export default NavMenu;