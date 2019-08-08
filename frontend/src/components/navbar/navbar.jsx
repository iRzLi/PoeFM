import React from 'react';
import League from '../league/league_container';
import './navbar.css';

function Navbar(props) {
    return (
        <ul className="navbar">
            <li className="title"><div >PoeFM</div></li>
            <li>Hello</li>
            <li><League /></li>
        </ul>
    )
}

export default Navbar;