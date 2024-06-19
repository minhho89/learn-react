import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from "../components/PlaceList";

const UserPlaces = (props) => {
    const { uid } = useParams();
    const placeList = [
        {
            id: 1,
            imageURL: "https://images.pexels.com/photos/13673730/pexels-photo-13673730.jpeg",
            title: "Rex Hotel",
            address: "141 Đ. Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh",
            description: "The Rex Hotel in Ho Chi Minh City, Vietnam, is a historic five-star hotel renowned for its elegant architecture, luxurious amenities, and central location, making it a symbol of the city's rich cultural heritage.",
            creatorId: 1,
            coordinate: {
                lat: 10.7755202,
                long: 106.6984223
            }
        },
        {
            id: 2,
            imageURL: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
            title: "Eiffel Tower",
            address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
            description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.",
            creatorId: 1,
            coordinate: {
                lat: 48.858093,
                long: 2.294694
            }
        },
        {
            id: 3,
            imageURL: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
            title: "Colosseum",
            address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
            description: "The Colosseum, is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff, and brick-faced concrete, it was the largest amphitheatre ever built at the time and held 50,000 spectators.",
            creatorId: 1,
            coordinate: {
                lat: 41.8902102,
                long: 12.4922309
            }
        }
    ]
    return <PlaceList items={placeList} />
}

export default UserPlaces;
