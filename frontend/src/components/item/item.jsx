import React from 'react';
import './item.css';

const Item = (props) => {
    // let items = null;
    // debugger
    // props.item.item.extended.hashes match up with the order of which explicit mods appear
    // use it to decode the min-max

    // props.item.item.category to get what type of item it is
    // make a new component to return items stats and their names
    // make another component to return the seller info

    return (
        <div className="itemContainer">
            <div className="itemShowCase">
                <img src={props.item.item.icon} alt={props.item.item.name+ " picture"}/>
            </div>
            <div>{props.item.item.name + " " + props.item.item.typeLine}</div>
        </div>
    )
}

export default Item;