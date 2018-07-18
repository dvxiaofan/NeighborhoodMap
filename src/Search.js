import React, { Component } from 'react';



class Search extends Component {

	componentDidMount() {
		if (this.input) {
			this.input.focus();
		}
	}

	render() {
		const {
			children,
		} = this.props;
		return (
			<form>
				<input
					type='text'
				/>
				<button type='submit'>
					{children}
				</button>
			</form>
		)
	}
}


export default Search;