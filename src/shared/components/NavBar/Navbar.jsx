import React, { useState } from 'react';

import './Navbar.css'
import NavItem from "../../NavItem";
import LeftSideBar from "../../LeftSideBar";
const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('ALL USERS'); // New state

    const toggleSidebar = () => {
       setIsSidebarOpen(prevState => !prevState);
    }

    const handleItemClick = (item) => {
        setActiveItem(item);
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
                     activeItem={activeItem}
                     onItemClicked={handleItemClick}
        />

        <NavItem isSidebarOpen={isSidebarOpen} activeItem={activeItem} id="navbar-item" onItemClicked={handleItemClick}/>
    </nav>
}

export default Navbar;
