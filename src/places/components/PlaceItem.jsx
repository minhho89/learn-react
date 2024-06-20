import React from 'react';
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/UIElements/Button";
import '../../shared/components/UIElements/Button.css'

const PlaceItem = (props) => {
    return <Card
        image={props.image}
        title={props.title}
        subtitle={props.address}
        description={props.description}
        controls={[
            <Button className="inverse" text="VIEW ON MAP"/>,
            <Button text='EDIT' />,
            <Button className="danger" text='DELETE' />]}
    ></Card>
}

export default PlaceItem;
