import React from 'react';
import {NavLink} from "react-router-dom";
import './NavItem.css';

const NavItem = (props) => {
    const navItems = {
        'ALL USERS': '/',
        'MY PLACES': '/places',
        'ADD PLACES': '/places/new',
        'AUTHENTICATE': '/authenticate'};

    return (
    <ul id={props.id} className={props.isSidebarOpen ? 'open' : ''}>
        {
            Object.entries(navItems).map(([item, link], index) => (
                <li
                    key={index}
                    className={`navItem ${props.activeItem === item ? 'active' : ''} `}
                    onClick={() =>  props.onItemClicked(item)}>
                    <NavLink to={link} exact>{item}</NavLink>
                </li>
            ))
        }
    </ul>
    );
}

export default NavItem;
