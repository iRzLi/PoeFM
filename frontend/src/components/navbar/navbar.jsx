import React from 'react';
import League from '../league/league_container';
import './navbar.css';

function Navbar(props) {
    return (
        <ul className="navbar">
            <li>Hello</li>
            <li><League /></li>
        </ul>
    )
}

export default Navbar;