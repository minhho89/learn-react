import React, {useState} from 'react';
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/UIElements/Button";
import '../../shared/components/UIElements/Button.css'
import Modal from "../../shared/components/UIElements/Modal";

const PlaceItem = (props) => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            <Card
                image={props.image}
                title={props.title}
                subtitle={props.address}
                description={props.description}
                controls={[
                    <Button className="inverse" text="VIEW ON MAP" onClick={toggleModal}/>,
                    <Button text='EDIT' />,
                    <Button className="danger" text='DELETE' />]}
            ></Card>
            <Modal show={showModal}  title={props.title} coordinate={props.coordinate} />
        </>

    )
}

export default PlaceItem;
