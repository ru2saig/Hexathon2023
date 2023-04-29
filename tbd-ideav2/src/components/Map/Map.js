import 'leaflet/dist/leaflet.css';
import style from '../../styles/Home.module.css'
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import React from 'react'

const Map = () => {
    return (
        <MapContainer className={style.map} center={[17.4434,78.3754]} zoom={16} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>
    )
}

export default Map