import "bootstrap-icons/font/bootstrap-icons.css";
import travelsImg1 from "../assets/travels/img1.png";
import travelsImg2 from "../assets/travels/img2.png";
import travelsImg3 from "../assets/travels/img3.png";
import travelsImg4 from "../assets/travels/img4.png";
import travelsImg5 from "../assets/travels/img5.png";

const bookingUrl =
  "https://bookingengine.stayflexi.com/?hotel_id=39026";

const travelsImages = [
  { src: travelsImg1, alt: "Tours & Travels image 1" },
  { src: travelsImg2, alt: "Tours & Travels image 2" },
  { src: travelsImg3, alt: "Tours & Travels image 3" },
  { src: travelsImg4, alt: "Tours & Travels image 4" },
  { src: travelsImg5, alt: "Tours & Travels image 5" },
];

const amenities = [
  { icon: "bi-taxi", label: "Taxi Booking" },
  { icon: "bi-building", label: "Temple Tour" },
  { icon: "bi-mountain", label: "Girivalam" },
  { icon: "bi-train-front", label: "Railway Pickup" },
  { icon: "bi-airplane", label: "Airport Transfer" },
  { icon: "bi-people", label: "Family Packages" },
];

const ToursTravels = () => {
  return (
    <section id="tours-travels" className="guest-house-section section-premium">
      <div className="container-xl">
        <div className="guest-house-shell">
          {/* LEFT SIDE - Image Gallery (50%) */}
          <div className="guest-house-gallery" data-aos="fade-right">
            <div className="d-grid gap-3" style={{ height: "100%" }}>
              {/* Large featured image - 60% height */}
              <div 
                className="guest-house-image-card"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  height: "60%",
                }}
              >
                <img 
                  src={travelsImages[0].src} 
                  alt={travelsImages[0].alt} 
                  loading="lazy" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              
              {/* Two images row 1 */}
              <div className="d-flex gap-3" style={{ height: "20%" }}>
                <div 
                  className="guest-house-image-card flex-grow-1"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <img 
                    src={travelsImages[1].src} 
                    alt={travelsImages[1].alt} 
                    loading="lazy" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div 
                  className="guest-house-image-card flex-grow-1"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <img 
                    src={travelsImages[2].src} 
                    alt={travelsImages[2].alt} 
                    loading="lazy" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
              
              {/* Two images row 2 */}
              <div className="d-flex gap-3" style={{ height: "20%" }}>
                <div 
                  className="guest-house-image-card flex-grow-1"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <img 
                    src={travelsImages[3].src} 
                    alt={travelsImages[3].alt} 
                    loading="lazy" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <div 
                  className="guest-house-image-card flex-grow-1"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <img 
                    src={travelsImages[4].src} 
                    alt={travelsImages[4].alt} 
                    loading="lazy" 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Content (50%) */}
          <div className="guest-house-content" data-aos="fade-left">
            <div className="section-subtitle mb-2">JP RESIDENCY HOSPITALITY</div>
            <h2 className="section-title text-start guest-house-title mb-3">Tours & Travels</h2>
            <p className="guest-house-lead mb-4">
              Reliable transportation for temple visits, sightseeing, airport and railway transfers, and family trips. We offer safe, comfortable, and on-time travel services for all your journeys around Tiruvannamalai.
            </p>

            {/* Amenities - 2 column grid */}
            <div className="guest-house-features">
              {amenities.map((amenity) => (
                <div className="guest-house-feature" key={amenity.label}>
                  <i className={`bi ${amenity.icon}`}></i>
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>

            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="guest-house-cta btn-shine">
              <i className="bi bi-whatsapp"></i>
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursTravels;