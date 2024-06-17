import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from "../components/PlaceList";

const UserPlaces = (props) => {
    const { uid } = useParams();
    return <PlaceList />
}

export default UserPlaces;
