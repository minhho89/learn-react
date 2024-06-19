import React from 'react';
import Card from "../../shared/components/UIElements/Card";

const PlaceItem = (props) => {
    return <Card
        image={props.image}
        title={props.title}
        subtitle={props.address}
        description={props.description}
        controls={['VIEW ON MAP', 'EDIT', 'DELETE']}
    ></Card>
}

export default PlaceItem;
