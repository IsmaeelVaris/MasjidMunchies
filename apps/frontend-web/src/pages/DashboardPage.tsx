/// <reference types="google.maps" />
import React, { useState, useEffect, useRef } from "react";
import { landingPageClasses as c } from "../styles/classes";

const DashboardPage: React.FC = () => {
  const [locationInput, setLocationInput] = useState("");
  const [coords, setCoords] = useState<google.maps.LatLngLiteral | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey) return;

    const initMap = () => {
      if (!mapRef.current) {
        const mapElement = document.getElementById("map") as HTMLElement;
        mapRef.current = new google.maps.Map(mapElement, {
          center: { lat: 42.2808, lng: -83.7430 },
          zoom: 13,
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

  const handleUseLocation = () => {
    if (!apiKey) {
      alert("Google Maps API key not set.");
      return;
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCoords(userLocation);
          mapRef.current?.setCenter(userLocation);

          new google.maps.Marker({
            position: userLocation,
            map: mapRef.current!,
            title: "You are here",
          });

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
    <div className="font-sans bg-bg-dark text-white min-h-screen pt-24">
      {/* Welcome Banner */}
      <section className="bg-gradient-to-r from-[#145230] via-[#17658C] to-[#1B4D3E] py-12 rounded-b-3xl shadow-lg text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Welcome back! 👋
        </h1>
        <p className="mt-3 text-lg text-white/90 max-w-2xl mx-auto">
          Explore halal dining, mosques, events, and community updates tailored for you.
        </p>
      </section>

      {/* Search & Map Section */}
      <section className="py-28 px-4 flex flex-col items-center">
        <div className="w-full max-w-4xl bg-[rgba(34,34,34,0.85)] backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-white">
            Find Halal Restaurants Near You
          </h2>
          <p className="mb-8 text-xl md:text-2xl text-white/80 text-center">
            Enter your location or use GPS to explore halal dining options around you.
          </p>

          <div className="w-full max-w-2xl flex flex-col gap-4 mt-6">
            <input
              type="text"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              placeholder="🍽️ Enter location..."
              className="w-full p-4 rounded-2xl bg-[rgba(11,12,16,0.85)] text-text-white shadow-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="rounded-xl font-semibold px-8 py-3 bg-[#17603B] text-text-white hover:bg-[#1F5D43] transition-all w-full">
              Search
            </button>

            <div className="flex items-center gap-2 my-2 text-gray-500 w-full">
              <div className="flex-grow h-px bg-gray-700"></div>
              <span className="text-sm font-medium text-white/60">OR</span>
              <div className="flex-grow h-px bg-gray-700"></div>
            </div>

            <button
              onClick={handleUseLocation}
              className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl shadow-md bg-[#1B4D3E] text-white font-semibold hover:bg-[#145230] transition"
            >
              📍 Use My Location
            </button>
          </div>

          {/* Map Display */}
          <div
            id="map"
            className="w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden mt-8 bg-[rgba(11,12,16,0.85)] shadow-xl flex items-center justify-center text-white/70"
          >
            {!apiKey && (
              <div className="text-center">
                🗺️ Google Maps will appear here once you set <br />
                <code>REACT_APP_GOOGLE_MAPS_API_KEY</code>
              </div>
            )}
            {apiKey && !coords && (
              <div className="text-center">🗺️ Map will appear here after you search or use location</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
