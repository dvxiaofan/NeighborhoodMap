import React, { Component } from 'react';
import { Map, Marker } from 'react-amap';
import './App.css';


const markers = [
	{ longitude: 114.308872, latitude: 30.613611 },
	{ longitude: 114.298072, latitude: 30.57819 },
	{ longitude: 114.294638, latitude: 30.592081 },
	{ longitude: 114.31335, latitude: 30.602572 },
	{ longitude: 114.269919, latitude: 30.594741 }
];

class GMap extends Component {
	constructor() {
		super();

		this.state = {
			mapCenter: { longitude: 114.288959, latitude: 30.615088 },
		}
	}

	render() {
		return (
			<div className='Map'>
				<Map amapkey='fb16aeca0f532bba128fea350d352d09' center={this.state.mapCenter} zoom='12'>
						{markers.map(mar => (
							<Marker position={mar} />
						))}
				</Map>
			</div>
		)
	}
}

export default GMap;