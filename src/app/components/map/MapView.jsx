'use client'

import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";

let iconUbication = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [40, 60],
  iconAnchor: [22, 94],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const MapView = () => {
  function LocationMarker() {
    const map = useMap();
    const markerRef = useRef(null);

    useEffect(() => {
      if (markerRef.current) {
        map.flyTo(markerRef.current.getLatLng(), map.getZoom());
      }
    }, [map]);

    return (
      <Marker
        position={[-33.487091, -70.644732]}
        icon={iconUbication}
        ref={markerRef}
      >
        <Popup>
          San Miguel 851, San Miguel. <br />
          <a
            target="blank"
            href="https://www.google.com/maps/place/Alcalde+Pedro+Alarc%C3%B3n+851,+8900084+San+Miguel,+Regi%C3%B3n+Metropolitana/@-33.4868932,-70.6478256,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c54aa0e353a3:0x4ff7c42aed54583e!8m2!3d-33.4868977!4d-70.6452507!16s%2Fg%2F11c248496r"
          >
            Ver en google Maps
          </a>
        </Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      className="mapa"
      center={[-33.487091, -70.644732]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapView;