import React from 'react';
import './search_items.css';

const SearchItems = (props) => {
    // console.log(props.itemKeys);
    // debugger
    if (Object.keys(props.itemKeys).length){

        // make requests here with item keys
        // debugger

        let shown = Math.min(props.offset * 10, props.itemKeys.result.length )
        let max = props.itemKeys.total;
        if (props.itemKeys.inexact){
            max+= " + "
        }
        props.ApplytItemKeys(props.itemKeys, props.offset);

        return (
            <div className="showingText">Showing {shown} of {props.itemKeys.result.length} from {max}</div>
        )
    }else {
        // when there are no keys currently available
        return (
            <></>
        )
    }
}

export default SearchItems;