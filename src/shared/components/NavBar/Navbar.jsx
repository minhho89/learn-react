import React, { useState } from 'react';

import './Navbar.css'
import NavItem from "../../NavItem";
import LeftSideBar from "../../LeftSideBar";
const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
       setIsSidebarOpen(prevState => !prevState);
    }

    return <nav className="navbar">
        <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="logo">
            <h1>YourPlaces</h1>
        </div>
        <LeftSideBar isOpen={isSidebarOpen}
        toggleIsOpen={toggleSidebar}
        />

        <NavItem  id="navbar-item"/>
    </nav>
}

export default Navbar;
