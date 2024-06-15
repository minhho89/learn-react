import React from 'react';

import './LeftSideBar.css';
import NavItem from "./NavItem";
const LeftSideBar = (props) => {
    return (
        <aside className={props.isOpen ? 'open' : ''} >
            <NavItem />
        </aside>
    );
}

export default LeftSideBar;
