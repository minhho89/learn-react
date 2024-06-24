import React from 'react';
import './Modal.css';
import Button from "./Button";
import './Button.css'

const Modal = (props) => {
    if (!props.show) {
        return null;
    }

    return (
        <div className='modal-backdrop'>
            <div className='modal'>
                <div className="header">{props.title}</div>
                <div className="map">{props.coordinate.lat} {props.coordinate.long}</div>
                <div className="controls">
                    <Button text="CLOSE"/>
                </div>

            </div>
        </div>
    );
}

export default Modal;
