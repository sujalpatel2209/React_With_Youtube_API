import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

    }

    render() {
        return (
            <div className='search-bar'>
                <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term){
        this.props.searchOnType(term);
        this.setState({
            term: term
        })
    }
}

export default SearchBar;