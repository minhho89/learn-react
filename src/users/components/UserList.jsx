import React from 'react';
import UserItem from "./UserItem";

const UserList = (props) => {
    return props.items.length === 0
        ? (<h2>No users found</h2>)
       : (<ul>
           {
               props.items.map(user => {
                   return (
                   <li>
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
       </ul>)
}

export default UserList;
