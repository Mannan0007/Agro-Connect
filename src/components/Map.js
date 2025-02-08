import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]} // Map centers at this location
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      {/* Tile Layer (Base Map) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker for the location */}
      <Marker position={[latitude, longitude]}>
        <Popup>Farmer's Market Location 📍</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
