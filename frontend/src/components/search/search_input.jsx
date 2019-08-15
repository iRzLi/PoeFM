import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './search_input.css';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
        }
        // this.searchInput = React.createRef();
        this.updateInputString = this.updateInputString.bind(this);
        this.closeSuggestions = this.closeSuggestions.bind(this);
        this.openSuggestions = this.openSuggestions.bind(this);
        this.completeInputString = this.completeInputString.bind(this);
    }

    updateInputString(e) {
        this.props.updateSearchString(e.target.value);
    }


    completeInputString(string) {
        return e => {
            e.stopPropagation();
            this.props.updateSearchString(string);
            this.setState({ active: false })
        }
    }

    closeSuggestions(e){
        this.setState({active:false})
    }

    openSuggestions(e){
        this.setState({ active: true })
    }

    // componentDidUpdate(){
    //     if (this.searchInput){
    //         debugger
    //     }
    // }

    render (){
        // let accessories = {name: [], type: []};
        // let Armour = { name: [], type: [] };
        // let cards = { name: [], type: [] };
        // let Currency = { name: [], type: [] };
        // let Flasks = { name: [], type: [] };
        // let gems = { name: [], type: [] };
        // let jewels = { name: [], type: [] };
        // let maps = { name: [], type: [] };
        // let weapons = { name: [], type: [] };
        // let leagueStones = { name: [], type: [] };
        // let prophecies = { name: [], type: [] };
        // let beasts = { name: [], type: [] };

        let {items} =  this.props;
        let results = {};
        let types = Object.keys(items);
        let counter = 0;

        // Looking through all items
        // Find what matches to the searchString through names and types
        // If a name exists check that else check its type
        if (this.props.searchString && this.state.active){
            for (let index = 0; index < types.length && counter < 100; index++) {
                let currentType = types[index];
                results[currentType] = { name: [], type: [] };
                for (let i = 0; i < items[currentType].length && counter < 100; i++) {
                    // console.log(items[currentType][i]);
                    // debugger
                    if (Boolean(items[currentType][i].name)){
                        if(items[currentType][i].name.toLowerCase().includes(this.props.searchString.toLowerCase())) {
                            results[currentType].name.push(items[currentType][i]);
                            counter++;
                        } else if (items[currentType][i].type.toLowerCase().includes(this.props.searchString.toLowerCase())) {
                            results[currentType].name.push(items[currentType][i]);
                            counter++;
                        }
                    }else {
                        if (items[currentType][i].type.toLowerCase().includes(this.props.searchString.toLowerCase())) {
                            results[currentType].type.push(items[currentType][i]);
                            counter++;
                        }
                    }
                    // debugger
                }
            }
        }
        // debugger

        let suggestionsList = [];
        let foundTypes = Object.keys(results);
        if (this.props.searchString) {
            for (let index = 0; index < foundTypes.length; index++) {
                let currentType = foundTypes[index];
                // debugger
                if (results[currentType].name.length || results[currentType].type.length){
                    suggestionsList.push(<li className="searchSuggestionsLiType" key={currentType}>{currentType}</li>)
                }
                for (let i = 0; i < results[currentType].name.length; i++) {
                    suggestionsList.push(<li onMouseDown={this.completeInputString(results[currentType].name[i].name)} className="searchSuggestionsLi" key={results[currentType].name[i].name + i}>{results[currentType].name[i].name}</li>)
                }
                for (let j = 0; j < results[currentType].type.length; j++) {
                    suggestionsList.push(<li onMouseDown={this.completeInputString(results[currentType].type[j].type)} className="searchSuggestionsLi" key={results[currentType].type[j].type + j}>{results[currentType].type[j].type}</li>)
                }
            }
        }
        let searchSuggestions = null;
        if (suggestionsList.length) {
            searchSuggestions = <ul className="searchSuggestions">{suggestionsList}</ul>;
        }
        return (
            <>
                {/* <div>Hello:{this.props.searchString}</div> */}
                <div className="searchContainer">
                    <input onFocus={this.openSuggestions} onBlur={this.closeSuggestions} className="searchInput" type="text" onChange={this.updateInputString} value={this.props.searchString} placeholder="Search Items..." />
                    {searchSuggestions}
                </div>
            </>
        )
    }


}

export default Search;