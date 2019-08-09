import React from 'react';
import League from '../league/league_container';
import Search from '../search/search_container';
import './navbar.css';

function Navbar(props) {
    return (
        <ul className="navbar">
            <Search />
            <League />
        </ul>
    )
}

export default Navbar;