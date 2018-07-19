import React, { Component } from 'react';



class Search extends Component {

	constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    }
  }

	componentDidMount() {
		if (this.input) {
			this.input.focus();
		}
	}

	render() {
		const {
			value,
			onChange,
			children,
			// locations,
		} = this.props;
		
		return (
			<form>
				<input
					type='text'
					value={value}
					onChange={onChange}
				/>
				<button type='submit'>
					{children}
				</button>

			</form>
		)
	}
}


export default Search;