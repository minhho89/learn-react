import React from 'react';
import './Card.css';
import '../../../App.css';
const Card = (props) => {
    return <div className="card-container bg-white">
        <div className="card-contents">
                <img src="https://images.pexels.com/photos/13673730/pexels-photo-13673730.jpeg" alt="place"/>
            <div className="card-title">Rex Hotel</div>
            <div className="card-subtitle">141 Đ. Nguyễn Huệ, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh</div>
            <div className="card-description">The Rex Hotel in Ho Chi Minh City, Vietnam, is a historic five-star hotel renowned for its elegant architecture, luxurious amenities, and central location, making it a symbol of the city's rich cultural heritage.</div>
            <div className="card-control-panel">
                <button>VIEW ON MAP</button>
                <button>EDIT</button>
                <button>DELETE</button>

            </div>

        </div>


    </div>
}

export default Card;
