import React from 'react';
import './buffer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Buffer = (props) => {
    let color = {color:  props.color };
    return (
        <div className="buffer" style={color}> <FontAwesomeIcon icon={faCircleNotch} /></div>
    )
}

export default Buffer;