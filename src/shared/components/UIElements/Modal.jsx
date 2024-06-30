import React, { useEffect, useRef } from 'react';
import './Modal.css';
import Button from "./Button";
import './Button.css'

import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import { Map, View , Feature} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import ReactDOM from "react-dom";

const Modal = (props) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        if (props.show) {
            const coordinates = fromLonLat([props.coordinate.long, props.coordinate.lat]);

            // Create a feature for the pin
            const pinFeature = new Feature({
                geometry: new Point(coordinates),
            });

            // Create a vector source and add the feature to it
            const vectorSource = new VectorSource({
                features: [pinFeature],
            });

            // Create a vector layer with the vector source
            const vectorLayer = new VectorLayer({
                source: vectorSource,
                style: new Style({
                    image: new Icon({
                        anchor: [0.5, 1],
                        src: 'https://openlayers.org/en/latest/examples/data/icon.png',
                    }),
                }),
            });

            const map = new Map(
                {
                    target: mapContainer.current,
                    layers: [
                        new TileLayer({
                            source: new OSM()
                        }),
                        vectorLayer
                    ],
                    view: new View({
                        center: coordinates,
                        zoom: 18
                    })
                }
            );
        }
    },[props.show, props.coordinate]);

    if (!props.show) {
        return null;
    }

    return ReactDOM.createPortal(
            <div className='modal-backdrop'>
                <div className='modal'>
                    <div className="header">{props.title}</div>
                    <div ref={mapContainer} className="map"></div>
                    <div className="controls">
                        <Button text="CLOSE" onClick={props.onClose}/>
                    </div>

                </div>
            </div>
        , document.getElementById('modal-root'));
}

export default Modal;
