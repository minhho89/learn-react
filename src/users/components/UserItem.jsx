import React from 'react';
import UserCard from "../../shared/components/UserCard";

const UserItem = (props) => {
    return (
        <UserCard
            key={props.id}
            id={props.id}
            image={props.image}
            name={props.name}
            placeCount={props.placeCount}
            />
    );
}

export default UserItem;
