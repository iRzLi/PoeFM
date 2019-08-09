import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './search.css';

class Search extends React.Component {
    constructor(props){
        super(props);

        this.updateInputString = this.updateInputString.bind(this);
    }

    updateInputString(e) {
        this.props.updateSearchString(e.target.value);
    }

    render (){
        return (
            <>
                {/* <div>Hello:{this.props.searchString}</div> */}
                <div className="searchContainer">
                    <input className="searchInput" type="text" onChange={this.updateInputString} value={this.props.searchString} placeholder="Search Items..." />
                </div>
            </>
        )
    }


}

export default Search;