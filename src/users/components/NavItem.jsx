import React from 'react';
import {Link} from "react-router-dom";
import './NavItem.css';

const NavItem = () => {
    const navItems = {
        'ALL USERS': '/',
        'MY PLACES': '/places',
        'ADD PLACES': '/places/new',
        'AUTHENTICATE': '/authenticate'};

    return (
    <ul>
        {
            Object.entries(navItems).map(([item, link], index) => (
                <li key={index} className="navItem">
                    <Link to={link}>{item}</Link>
                </li>
            ))
        }
    </ul>
    );
}

export default NavItem;
