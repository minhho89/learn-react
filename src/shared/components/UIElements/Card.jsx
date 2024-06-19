import React from 'react';
import './Card.css';
import '../../../App.css';
const Card = (props) => {
    return <div className="card-container bg-white">
        <div className="card-contents">
                <img src={props.image} alt="place"/>
            <div className="card-title">{props.title}</div>
            <div className="card-subtitle">{props.subtitle}</div>
            <div className="card-description">{props.description}</div>
            <div className="card-control-panel">
                {props.controls.map(control =>
                    <button>{control}</button>
                )}
            </div>

        </div>


    </div>
}

export default Card;
