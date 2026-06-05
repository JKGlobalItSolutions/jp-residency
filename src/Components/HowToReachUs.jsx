import { useMemo, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import propertyImage from "../assets/about/img.png";

const DESTINATION = "JP Residency, Idukka Pillaiyar Kovil 6th Street, Vengikkal, Tiruvannamalai, Tamil Nadu 606604";

const cityRoutes = [
  { city: "Chennai", distance: "195 km", time: "4 hr 15 min" },
  { city: "Bengaluru", distance: "205 km", time: "4 hr 30 min" },
  { city: "Vellore", distance: "85 km", time: "2 hr" },
  { city: "Puducherry", distance: "110 km", time: "2 hr 30 min" },
  { city: "Salem", distance: "175 km", time: "3 hr 45 min" },
  { city: "Coimbatore", distance: "340 km", time: "6 hr 45 min" },
  { city: "Madurai", distance: "325 km", time: "6 hr 15 min" },
];

const buildMapsUrl = (origin) => {
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination: DESTINATION,
    travelmode: "driving",
  });

  return `https://www.google.com/maps/dir/?${params.toString()}`;
};

const HowToReachUs = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [locationMessage, setLocationMessage] = useState("");

  const route = useMemo(
    () => cityRoutes.find((item) => item.city === selectedCity),
    [selectedCity]
  );

  const openDirections = () => {
    if (!selectedCity) {
      setLocationMessage("Please select your city first.");
      return;
    }

    setLocationMessage("");
    window.open(buildMapsUrl(`${selectedCity}, India`), "_blank", "noopener,noreferrer");
  };

  const openCurrentLocationRoute = () => {
    if (!navigator.geolocation) {
      setLocationMessage("Current location is not available in this browser.");
      return;
    }

    setLocationMessage("Requesting your current location...");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const origin = `${coords.latitude},${coords.longitude}`;
        setLocationMessage("");
        window.open(buildMapsUrl(origin), "_blank", "noopener,noreferrer");
      },
      () => {
        setLocationMessage("Allow location access to open your current route.");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  return (
    <section id="how-to-reach" className="how-reach-section section-premium">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <div className="section-subtitle">How to Reach JP Residency</div>
          <h2 className="section-title">HOW TO REACH US</h2>
          <p className="text-muted how-reach-subheading">
            Plan your journey to JP Residency from your city with one click.
          </p>
          <div className="premium-divider" />
        </div>

        <div className="how-reach-shell" data-aos="fade-up">
          <div className="how-reach-illustration how-reach-property-card">
            <img
              src={propertyImage}
              alt="JP Residency exterior night view in Tiruvannamalai"
              loading="lazy"
            />
            <div className="how-reach-image-overlay"></div>
            <div className="how-reach-property-badge">
              <i className="bi bi-geo-alt-fill"></i>
              JP Residency, Tiruvannamalai
            </div>
          </div>

          <div className="how-reach-card">
            <div className="how-reach-card-heading">
              <span>
                <i className="bi bi-signpost-split-fill"></i>
              </span>
              <div>
                <h3>Route Planner</h3>
                <p>Choose your starting city for a direct Google Maps route.</p>
              </div>
            </div>

            <div className="how-reach-controls">
              <label htmlFor="route-city">Select Your City</label>
              <select
                id="route-city"
                value={selectedCity}
                onChange={(event) => {
                  setSelectedCity(event.target.value);
                  setLocationMessage("");
                }}
              >
                <option value="">Select Your City</option>
                {cityRoutes.map((item) => (
                  <option key={item.city} value={item.city}>
                    {item.city}
                  </option>
                ))}
              </select>
            </div>

            {route && (
              <div className="how-reach-distance" aria-live="polite">
                <i className="bi bi-signpost-2-fill"></i>
                <div>
                  <strong>{route.distance}</strong>
                  <span>Estimated travel time: {route.time}</span>
                </div>
              </div>
            )}

            {locationMessage && (
              <p className="how-reach-message" aria-live="polite">
                {locationMessage}
              </p>
            )}

            <div className="how-reach-actions">
              <button type="button" className="how-reach-button" onClick={openDirections}>
                <i className="bi bi-map-fill"></i>
                Get Directions
              </button>
              <button
                type="button"
                className="how-reach-current"
                onClick={openCurrentLocationRoute}
              >
                <i className="bi bi-crosshair"></i>
                Open Current Location Route
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToReachUs;
