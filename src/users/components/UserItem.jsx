import React from 'react';

const UserItem = (props) => {
    return <>
        <div><img src={props.image} alt={props.id}/></div>
        <div><h2>{props.name}</h2></div>
        <div><h2>{props.placeCount}</h2></div>
    </>
}

export default UserItem;
