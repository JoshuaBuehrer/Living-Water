"use client";

import React, { useEffect, useRef } from "react";
import { MapStyles } from "./MapStyles";

declare global {
  interface Window {
    google: any;
  }
}

const mapOptions = {
  zoom: 12,
  center: { lat: 38.47, lng: -89.93 },
  mapTypeControl: false,
  streetViewControl: false,
  styles: MapStyles
};

export const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);


  const initializeMap = () => {
    if (window.google && mapRef.current) {

      const map = new window.google.maps.Map(mapRef.current, mapOptions);


      const locations = [
        { lat: 38.6, lng: -89.5 },
        { lat: 38.45, lng: -89.6 },
        { lat: 38.1, lng: -89.92 },
        { lat: 38.3, lng: -89.93 },
        { lat: 38.47, lng: -89.8 },
      ];


      locations.forEach((location) => {
        new window.google.maps.Marker({
          position: location,
          map: map,
          icon: {
            path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 5,
            fillColor: "#ff0000",
            fillOpacity: 0.8,
            strokeWeight: 1,
          },
        });
      });
    }
  };

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBMQeNeNZsjY4mHXExFMrInA-P8Od78goY`;
      script.async = true;
      script.onload = initializeMap;
      document.body.appendChild(script);
    };

    // Load the Google Maps script if it hasn't been loaded already
    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      initializeMap();
    }
  }, []);

  return <div ref={mapRef}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      overflow: "hidden",
    }} />;
};
