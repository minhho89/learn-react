import React from 'react';
import Avatar from "./Avatar";
import { Link } from 'react-router-dom';
import "./UserCard.css";

const UserCard = (props) => {
    return (<Link to={`/${props.id}/places`} className="link">
        <div className="card-container">
            <Avatar image={props.image} alt={props.id} />
            <div className="card-info">
                <div className="card-info--title">{props.name}</div>
                <div className="card-info--details">{props.placeCount} Places</div>
            </div>
        </div>
    </Link>);

}

export default UserCard;
