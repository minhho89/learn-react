import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import './NavItem.css';

const NavItem = (props) => {
    const navItems = {
        'ALL USERS': '/',
        'MY PLACES': `/${props.uid}/places`,
        'ADD PLACES': '/places/new',
        'AUTHENTICATE': '/authenticate'};
    const location = useLocation();
    return (
    <ul id={props.id} className={props.isSidebarOpen ? 'open' : ''}>
        {
            Object.entries(navItems).map(([item, link], index) => {
                return (
                    <li
                        key={index}
                        className={location.pathname === link ? 'navItem active' : 'navItem'}
                        onClick={() =>  props.onItemClicked(item)}>
                        <NavLink to={link}>{item}</NavLink>
                    </li>
                )
            })
        }
    </ul>
    );
}

export default NavItem;
