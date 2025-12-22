"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// Fix for default marker icon missing in Leaflet + Next.js
const icon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function MapComponent() {
    const position: [number, number] = [21.6264, 73.0152]; // Ankleshwar

    return (
        <div className="h-full w-full rounded-2xl overflow-hidden shadow-inner border border-gray-200">
            <MapContainer center={position} zoom={6} scrollWheelZoom={false} className="h-full w-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={icon}>
                    <Popup>
                        Adarsh Road Carrier (ARC) <br /> Ankleshwar Hub
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
