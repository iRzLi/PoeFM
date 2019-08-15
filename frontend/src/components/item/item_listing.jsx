import React from 'react';
import ItemContainer from './item_container';
import './item_listing.css'

const ItemListing = (props) => {
    let items = null;
    items = props.item_listings.map((item, i) => {
        // debugger
        return <ItemContainer key={i} item={item} />
    });
    return (
        <div className="itemsListingContainer">
            <div className="itemsListing">
                {items}
            </div>
        </div>
    )
}

export default ItemListing;