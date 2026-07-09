import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";

const Amenities = () => {
  useEffect(() => {
    // Scroll reveal for amenities cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".amenity-card-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const facilities = [
    { name: "Free WiFi", icon: "bi-wifi", desc: "High-speed dedicated Wi-Fi in each room." },
    { name: "Free Parking", icon: "bi-car-front", desc: "Complimentary on-site parking for all hotel guests." },
    { name: "Air Conditioned", icon: "bi-snow2", desc: "Comfortable air-conditioned rooms for a relaxing stay." },
    { name: "Family Rooms", icon: "bi-people", desc: "Spacious rooms designed for family comfort." },
    { name: "Room Service", icon: "bi-bell", desc: "Prompt and courteous in-room dining and service." },
    { name: "Non-Smoking Rooms", icon: "bi-cloud-slash", desc: "Designated non-smoking rooms for a fresh environment." },
    { name: "Facilities for Disabled Guests", icon: "bi-universal-access-circle", desc: "Accessible facilities ensuring comfort for all guests." },
    { name: "Tea/Coffee Maker", icon: "bi-cup-hot", desc: "In-room tea and coffee making facilities for your convenience." },
    { name: "24/7 Reception", icon: "bi-clock-history", desc: "Round-the-clock front desk assistance for your needs." },
    { name: "CCTV Security", icon: "bi-shield-lock", desc: "24/7 monitored security for complete peace of mind." },
    { name: "Housekeeping", icon: "bi-brush", desc: "Daily professional housekeeping service." },
    { name: "Hot Water", icon: "bi-droplet-half", desc: "24/7 hot water supply for your comfort." },
    { name: "Power Backup", icon: "bi-lightning-charge", desc: "Uninterrupted power supply with backup generator." },
    { name: "First Aid Facility", icon: "bi-bandaid", desc: "Emergency first aid support available for guests." },
    { name: "Wheelchair Accessibility", icon: "bi-person-wheelchair", desc: "Wheelchair-friendly access for elderly and differently-abled guests." },
    { name: "Structured Parking", icon: "bi-p-square", desc: "Safe and organized parking facility within the premises." },
    { name: "24x7 Hospital Facility Nearby", icon: "bi-hospital", desc: "Round-the-clock medical assistance and hospital access available nearby." },
    { name: "Pantry", icon: "bi-house-gear", desc: "Well-equipped pantry with essential facilities for preparing tea, coffee, and light refreshments during your stay." },
  ];

  return (
    <section id="amenities" className="section-premium-alt" style={{ background: "#FBEFD3" }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <div className="section-subtitle">Hotel Facilities</div>
          <h2 className="section-title">Amenities At JP Residency</h2>
          <p className="text-muted" style={{ maxWidth: "650px", margin: "0 auto", fontSize: "0.95rem" }}>
            We offer premium amenities designed to make your stay unforgettable and comfortable
          </p>
          <div className="premium-divider" />
        </div>

        <div className="row g-3 align-items-stretch">
          {facilities.map((facility, index) => {
            return (
              <div
                key={index}
                className="col-6 col-md-3 col-lg-2 amenity-card-reveal d-flex"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.6s ease ${index * 0.08}s`,
                }}
              >
                <div className="amenity-mini-card w-100">
                  <div className="amenity-mini-icon" aria-hidden="true">
                    <i className={`bi ${facility.icon}`}></i>
                  </div>
                  <span className="amenity-mini-name">{facility.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
