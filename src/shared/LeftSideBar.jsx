import React from 'react';

import './LeftSideBar.css';
import NavItem from "./NavItem";

const LeftSideBar = (props) => {

    const closePanel = () => {
        props.toggleIsOpen();
    };

    return (<div

            className={`container ${props.isOpen ? 'open' : ''}`}>
            <div
                onClick={closePanel}
                className="base_layer"></div>
            <aside>
                <NavItem id="sidebar-item" uid="1"
                    onItemClicked={props.onItemClicked}
                />
            </aside>

        </div>

    );
}

export default LeftSideBar;
