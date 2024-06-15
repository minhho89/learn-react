import React from 'react';

import './Navbar.css'
import {Link} from "react-router-dom";
const Navbar = (props) => {
    const navItems = {
        'ALL USERS': '/',
        'MY PLACES': `${props.id}/places`,
        'ADD PLACES': '/places/new',
        'AUTHENTICATE': '/authenticate'};

    return <nav className="navbar">
        <div className="logo">
            <h1>YourPlaces</h1>
        </div>
        <ul>
            {
                Object.entries(navItems).map(([item, link], index) => (
                    <li key={index} className="navItem">
                        <Link to={link}>{item}</Link>
                    </li>
                ))
            }
        </ul>
    </nav>
}

export default Navbar;
