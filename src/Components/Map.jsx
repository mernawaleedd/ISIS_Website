import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customIconImg from '../assets/images/LocationMap.png';

const customIcon = new L.Icon({
  iconUrl: customIconImg,
  iconSize: [70, 70],
  iconAnchor: [35, 70],
  popupAnchor: [0, -60],
});

const MapComponent = () => {
  const position = [31.409331, 31.810636];
  const googleMapsUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className='h-[600px] w-full'
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
      />

      <Marker position={position} icon={customIcon}>
        <Popup>
          <div className="text-center">
            <p className=" text-[#0E2F40] text-lg">Your Location</p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-3 bg-[#f6f6f6] text-[#0E2F40] rounded-3xl hover:bg-[#a19e9e] transition"
            >
              Open in Google Maps
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
