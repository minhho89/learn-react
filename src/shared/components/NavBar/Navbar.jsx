import React, { useState } from 'react';

import './Navbar.css'
import NavItem from "../../../users/components/NavItem";
import LeftSideBar from "../../../users/components/LeftSideBar";
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
        <LeftSideBar isOpen={isSidebarOpen}/>

        <NavItem  id="navbar-item"/>
    </nav>
}

export default Navbar;
