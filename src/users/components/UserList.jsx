import React from 'react';
import UserItem from "./UserItem";
import './UserList.css';

const UserList = (props) => {
    return props.items.length === 0
        ? (
            <div className="center">
                <h2>No users found</h2>
            </div>
            )
       : (<div className="center">
                <ul>
                    {
                        props.items.map(user => {
                                return (
                                    <li key={user.id}>
                                        <UserItem
                                            key={user.id}
                                            id={user.id}
                                            image={user.image}
                                            name={user.name}
                                            placeCount={user.placeCount}
                                        />
                                    </li>
                                );
                            }
                        )
                    }
                </ul>
        </div>
           )
}

export default UserList;
