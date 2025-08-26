/// <reference types="google.maps" />

import React, { useState, useEffect, useRef } from "react";
import { dashboardClasses as c, globalClasses } from "../styles/classes";

const DashboardPage: React.FC = () => {
  const [locationInput, setLocationInput] = useState("");
  const [coords, setCoords] = useState<google.maps.LatLngLiteral | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey) return;

    const initMap = () => {
      if (!mapRef.current) {
        const mapElement = document.getElementById("map") as HTMLElement;
        mapRef.current = new google.maps.Map(mapElement, {
          center: { lat: 42.2808, lng: -83.7430 },
          zoom: 13,
          mapTypeControl: false,
          streetViewControl: false,
        });
      }
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [apiKey]);

  const showInfoWindow = (position: google.maps.LatLngLiteral, content: string) => {
    if (!mapRef.current) return;

    if (infoWindowRef.current) infoWindowRef.current.close();

    infoWindowRef.current = new google.maps.InfoWindow({
      content: `<div style="
        background-color: #F8F8F2; 
        color: #1C1D21; 
        padding: 10px 14px; 
        border-radius: 12px; 
        border: 1px solid rgba(0,0,0,0.08); 
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      ">${content}</div>`,
      position,
    });

    infoWindowRef.current.open({
      anchor: new google.maps.Marker({ position, map: mapRef.current }),
      map: mapRef.current,
    });
  };

  const handleUseLocation = () => {
    if (!apiKey) return alert("Google Maps API key not set.");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCoords(userLocation);
          mapRef.current?.setCenter(userLocation);

          const marker = new google.maps.Marker({
            position: userLocation,
            map: mapRef.current!,
            title: "You are here",
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: "#145230", // green-dark
              fillOpacity: 1,
              strokeWeight: 0,
              scale: 8,
            },
          });

          showInfoWindow(userLocation, "📍 You are here");

          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ location: userLocation }, (results, status) => {
            if (status === "OK" && results && results[0]) {
              setLocationInput(results[0].formatted_address);
            } else {
              setLocationInput(
                `${userLocation.lat.toFixed(3)}, ${userLocation.lng.toFixed(3)}`
              );
            }
          });
        },
        () => alert("Geolocation failed or permission denied.")
      );
    } else {
      alert("Geolocation not supported.");
    }
  };

  return (
    <div className={c.container}>
      {/* Welcome Banner */}
      <section className={c.welcomeBanner}>
        <h1 className={c.welcomeTitle}>Welcome back! 👋</h1>
        <p className={c.welcomeDesc}>
          Explore halal dining, mosques, events, and community updates tailored for you.
        </p>
      </section>

      {/* Search & Map Section */}
      <section className={c.searchSection}>
        <div className={c.searchContainer}>
          <h2 className={c.searchTitle}>Find Halal Restaurants Near You</h2>
          <p className={c.searchDesc}>
            Enter your location or use GPS to explore halal dining options around you.
          </p>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              placeholder="🍽️ Enter location..."
              className="w-full p-4 rounded-xl bg-ivory text-bg-dark placeholder-bg-dark border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-dark transition"
            />
            <button
              className={`${globalClasses.btnPrimary} w-full bg-green hover:bg-green-dark`}
            >
              Search
            </button>

            <div className={c.orDivider}>
              <div className={c.orLine}></div>
              <span className={c.orText}>OR</span>
              <div className={c.orLine}></div>
            </div>

            <button
              onClick={handleUseLocation}
              className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-blue text-text-white font-semibold hover:bg-blue-light transition shadow-md"
            >
              📍 Use My Location
            </button>
          </div>
        </div>

        {/* Map Display */}
        <div id="map" className={c.mapContainer}>
          {!apiKey && (
            <div className="w-full h-full flex items-center justify-center text-text-secondary">
              🗺️ Google Maps will appear here once you set
              <br />
              <code>REACT_APP_GOOGLE_MAPS_API_KEY</code>
            </div>
          )}
          {apiKey && !coords && (
            <div className="w-full h-full flex items-center justify-center text-text-secondary">
              🗺️ Map will appear here after you search or use location
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
