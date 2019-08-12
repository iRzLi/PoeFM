import React from 'react';
import League from '../league/league_container';
import SearchInput from '../search/search_input_container';
import SearchButton from '../search/search_button_container';
import './navbar.css';

function Navbar(props) {

    return (
        <ul className="navbar">
            <li className="navRowOne">
                <SearchInput />
                <League />
            </li>
            <li className="navRowTwo">
                <SearchButton />
            </li>
        </ul>
    )
}

export default Navbar;