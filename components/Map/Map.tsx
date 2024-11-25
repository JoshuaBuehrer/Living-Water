"use client";
import React from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript as useGoogleMaps,
  //@ts-ignore
} from "@react-google-maps/api";
import { mapOptions } from "./MapOptions";
import { useBaptisms } from "../Hooks/useBaptisms";

const center = { lat: 38.47, lng: -89.93 }; // Freeburg coordinates

const icon = {
  path: 4,
  scale: 5,
  fillOpacity: 0.45,
  strokeWeight: 4,
  strokeColor: "#0000ff",
  fillColor: "#0000ff",
};

export const Map: React.FC = () => {
  const baptisms = useBaptisms();

  const { isLoaded, loadError } = useGoogleMaps({
    googleMapsApiKey: "AIzaSyBMQeNeNZsjY4mHXExFMrInA-P8Od78goY",
  });

  if (!isLoaded || loadError) return <div>Please wait...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={center}
      zoom={12}
      options={mapOptions}
    >
      {baptisms.map((baptism) => (
        <Marker
          key={baptism.id}
          position={{ lat: baptism.latitude, lng: baptism.longitude }}
          title={`Baptism ID: ${baptism.id}`}
          icon={icon}
          animation={google.maps.Animation.DROP}
        />
      ))}
    </GoogleMap>
  );
};
