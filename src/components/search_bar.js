import React, { Component } from 'react';

//****functional component****
// const SearchBar = () => { 
//     return <input />;
// };

class SearchBar extends Component {
    constructor(props) {
        super(props);
    
    this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    //***similar as in line 10 */ 
    //when ever we give some input in text field
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;

//ReactDOM.render(<SearchBar />, document.querySelector)