import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    return <div className="avatar-img">
        <img src={props.image} alt={props.id}/>
    </div>
}

export default Avatar;
