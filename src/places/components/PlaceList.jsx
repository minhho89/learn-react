import React from 'react';
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {

    return <>
        {props.items.map(place => (
            <PlaceItem
                key={place.id}
                id = {place.id}
                image= {place.imageURL}
                title={place.title}
                address={place.address}
                description={place.description}
                creatorId={place.creatorId}
                coordinate={place.coordinate} />
                )
            )
        }
    </>

}

export default PlaceList;
