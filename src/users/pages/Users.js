import React from 'react';
import UserList from "../components/UserList";
import './Users.css';

const dummyUser1 = {id: '1', name: 'Minh Ho', image: 'https://avatar.iran.liara.run/public/22', placeCount: 3};
const dummyUser2 = {
    id: '2', name: 'An Ho', image: 'https://avatar.iran.liara.run/public/15', placeCount: 5
}
const DUMMY_USERS = [
    dummyUser1, dummyUser2
];

const Users = () => {
    return < UserList items={DUMMY_USERS}/>
}

export default Users;
