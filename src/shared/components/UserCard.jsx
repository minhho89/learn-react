import React from 'react';
import Avatar from "./Avatar";
import "./UserCard.css";

const UserCard = (props) => {
    return <div className="card-container">
        <Avatar image={props.image} alt={props.id} />
        <div className="card-info">
            <div className="card-info--title">{props.name}</div>
            <div className="card-info--details">{props.placeCount} Places</div>
        </div>
    </div>
}

export default UserCard;
