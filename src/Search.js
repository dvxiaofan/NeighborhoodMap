import React, { Component } from 'react';


const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Search extends Component {

	constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
		}
		
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onListClick = this.onListClick.bind(this);
		this.onFilterClick = this.onFilterClick.bind(this);
  }

	componentDidMount() {
		if (this.input) {
			this.input.focus();
		}
	}

	onSearchChange(event) {
		this.setState({ searchTerm: event.target.value });
	}

	onListClick(event) {
		console.log(event.target.innerHTML);
	}

	onFilterClick() {
		console.log('Filter');
	}

	render() {		
		const {
			children,
			locations,
		} = this.props;

		const { searchTerm } = this.state;
		
		return (
			<div>
				<form className='form'>
					<input
						type='text'
						className='form-input'
						value={searchTerm}
						onChange={this.onSearchChange}
					/>
					<button 
						type='button'
						className='form-button'
						onClick={this.onFilterClick}
					>
						{children}
					</button>
				</form>
				{locations.filter(isSearched(this.state.searchTerm)).map(loca =>(
					<div 
						key={loca.locaID}
						className='form-list'
						onClick={this.onListClick}
					>
						{loca.title}
					</div>
				))}
			</div>
		)
	}
}


export default Search;