import "bootstrap-icons/font/bootstrap-icons.css";
import pantryImg1 from "../assets/guest/img1.png";
import pantryImg2 from "../assets/guest/img2.png";
import pantryImg3 from "../assets/guest/img3.png";
import pantryImg4 from "../assets/guest/img4.png";
import pantryImg5 from "../assets/guest/img5.png";

const bookingUrl =
  "https://bookingengine.stayflexi.com/?hotel_id=39026";

const pantryImages = [
  { src: pantryImg1, alt: "Pantry image 1" },
  { src: pantryImg2, alt: "Pantry image 2" },
  { src: pantryImg3, alt: "Pantry image 3" },
  { src: pantryImg4, alt: "Pantry image 4" },
  { src: pantryImg5, alt: "Pantry image 5" },
];

const amenities = [
  { icon: "bi-egg-fried", label: "Hygienic Kitchen" },
  { icon: "bi-cup-hot", label: "Tea & Coffee" },
  { icon: "bi-egg", label: "Fresh Breakfast, Lunch & Dinner" },
  { icon: "bi-cup-straw", label: "Snacks & Beverages" },
  { icon: "bi-truck", label: "Room Service Available" },
  { icon: "bi-droplet", label: "Mineral Water" },
];

const Pantry = () => {
  return (
    <section id="pantry" className="guest-house-section section-premium">
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
                  src={pantryImages[0].src} 
                  alt={pantryImages[0].alt} 
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
                    src={pantryImages[1].src} 
                    alt={pantryImages[1].alt} 
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
                    src={pantryImages[2].src} 
                    alt={pantryImages[2].alt} 
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
                    src={pantryImages[3].src} 
                    alt={pantryImages[3].alt} 
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
                    src={pantryImages[4].src} 
                    alt={pantryImages[4].alt} 
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
            <h2 className="section-title text-start guest-house-title mb-3">Pantry</h2>
            <p className="guest-house-lead mb-4">
              Enjoy fresh, hygienic, and delicious home-style food during your stay. Our pantry serves breakfast, lunch, dinner, snacks, tea, coffee, and beverages prepared with quality ingredients to make every guest feel at home.
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

export default Pantry;