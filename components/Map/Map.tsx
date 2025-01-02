"use client";
import React from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript as useGoogleMaps,
  //@ts-ignore
} from "@react-google-maps/api";
import { mapOptions } from "./MapOptions";
import { Baptism } from "../API/Models/Baptism";
import { BaptismMarker } from "./BaptismMarker";

const center = { lat: 38.427159, lng: -89.910406 };

type MapProps = { baptisms: Baptism[] };
export const Map: React.FC<MapProps> = ({ baptisms }) => {
  const { isLoaded, loadError } = useGoogleMaps({
    googleMapsApiKey: "AIzaSyBMQeNeNZsjY4mHXExFMrInA-P8Od78goY",
  });

  if (!isLoaded || loadError) return <Spacer />;

  return (
    <>
      <div
        autoFocus={true}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "101.5vh" }}
          center={center}
          zoom={11}
          options={mapOptions}
        >
          {baptisms.map((baptism) => (
            <BaptismMarker key={baptism.id} baptism={baptism} />
          ))}
        </GoogleMap>
      </div>
      <Spacer />
    </>
  );
};

const Spacer = () => (
  <div
    style={{
      margin: 0,
      width: "100%",
      height: "90vh",
    }}
  />
);
