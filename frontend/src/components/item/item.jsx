import React from 'react';

const Item = (props) => {
    // let items = null;
    // debugger

    return (
        <div>
            <div>{props.item.item.name + " " + props.item.item.typeLine }</div>
            <div>
                <img src={props.item.item.icon} alt={props.item.item.name+ " picture"}/>
            </div>
        </div>
    )
}

export default Item;