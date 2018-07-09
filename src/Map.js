import React, { Component } from 'react';
import { Map, Marker } from 'react-amap';
import './App.css';


class GMap extends Component {
	constructor() {
		super();

		this.state = {
			mapCenter: { longitude: 114.288959, latitude: 30.615088 },
			marker: { longitude: 114.308872, latitude: 30.613611}
		}

	}

	render() {
		return (
			<div className='Map'>
				<Map amapkey='fb16aeca0f532bba128fea350d352d09' center={this.mapCenter} zoom='12'>
					<Marker position={this.state.marker}/>

				</Map>
			</div>
		)
	}
}

export default GMap;