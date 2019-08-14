import React from 'react';
import ItemContainer from './item_container';

const ItemListing = (props) => {
    let items = null;
    items = props.item_listings.map((item, i) => {
        // debugger
        return <ItemContainer key={i} item={item} />
    });
    return (
        <div>{items}</div>
    )
}

export default ItemListing;