import React, { Component } from 'react';


const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Search extends Component {

	constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
		}
		
		this.onSearchChange = this.onSearchChange.bind(this);
  }

	componentDidMount() {
		if (this.input) {
			this.input.focus();
		}
	}

	onSearchChange(event) {
		this.setState({ searchTerm: event.target.value });
	}

	render() {		
		const {
			children,
			locations,
		} = this.props;
		
		return (
			<div>
				<form>
					<input
						type='text'
						onChange={this.onSearchChange}
					/>
					<button type='submit'>
						{children}
					</button>
				</form>
				{locations.filter(isSearched(this.state.searchTerm)).map(loca =>(
					<div key={loca.locaID}>
						<span>{loca.title}</span>
					</div>
				))}
			</div>
		)
	}
}


export default Search;