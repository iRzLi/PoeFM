import React from 'react';
import './search_button.css';

function SearchButton(props) {
    let { searchString, league, items, requestItemKeys } = props;
    function search(searchString, league, items, requestItemKeys){
        return e => {
            e.preventDefault();
            const itemObj = { item: {}, league: league };
            if(searchString){
                let types = Object.keys(items);
                for (let index = 0; index < types.length; index++) {
                    let currentType = types[index];
                    for (let i = 0; i < items[currentType].length; i++) {
                        if (Boolean(items[currentType][i].name)) {
                            if (items[currentType][i].name.toLowerCase()===searchString.toLowerCase()) {
                                itemObj.item = items[currentType][i];
                            }
                        } else {
                            if (items[currentType][i].type.toLowerCase() === searchString.toLowerCase()) {
                                itemObj.item = items[currentType][i];
                            }
                        }
                    }
                }
            }
            // debugger
            requestItemKeys(itemObj);
        }
    }


    return (
        <input onClick={search(searchString, league, items, requestItemKeys)} className="searchButton" type="button" value="Search"/>
    )
}

export default SearchButton;