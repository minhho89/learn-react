import React from 'react';
import UserList from "../components/UserList";

const dummyUser1 = {id: '1', name: 'minhho', image: 'https://plus.unsplash.com/premium_photo-1667480556783-119d25e19d6e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', placeCount: 3};
const dummyUser2 = {
    id: '2', name: 'minhho2', image: 'https://plus.unsplash.com/premium_photo-1667480556783-119d25e19d6e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', placeCount: 5
}
const DUMMY_USERS = [
    dummyUser1, dummyUser2
];

const Users = () => {
    return < UserList items={DUMMY_USERS}/>
}

export default Users;
