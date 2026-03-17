"use client";

import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { ChainRestaurant, MenuItem } from "@/types/database";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const orangeIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export type NearbyPlace = {
  id: number;
  name: string;
  lat: number;
  lon: number;
  distance: number;
  chainRestaurant?: ChainRestaurant;
  menuItems?: MenuItem[];
};

type MapComponentProps = {
  userLat: number;
  userLng: number;
  nearbyPlaces: NearbyPlace[];
  onPlaceSelect?: (place: NearbyPlace) => void;
};

export default function MapComponent({
  userLat,
  userLng,
  nearbyPlaces,
  onPlaceSelect,
}: MapComponentProps) {
  return (
    <MapContainer
      center={[userLat, userLng]}
      zoom={15}
      style={{ height: "300px", width: "100%" }}
      className="rounded-2xl z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* User location */}
      <CircleMarker
        center={[userLat, userLng]}
        radius={10}
        pathOptions={{
          color: "#3b82f6",
          fillColor: "#3b82f6",
          fillOpacity: 0.7,
        }}
      >
        <Popup>現在地</Popup>
      </CircleMarker>

      {/* Nearby chain restaurants */}
      {nearbyPlaces.map((place) => (
        <Marker
          key={place.id}
          position={[place.lat, place.lon]}
          icon={orangeIcon}
          eventHandlers={{
            click: () => onPlaceSelect?.(place),
          }}
        >
          <Popup>
            <div className="text-center">
              <p className="font-bold text-sm">
                {place.chainRestaurant?.emoji ?? ""} {place.name}
              </p>
              <p className="text-xs text-gray-500">{place.distance}m</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
