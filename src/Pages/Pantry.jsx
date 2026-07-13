import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import pantryImg1 from "../assets/pan/img1.png";

const bookingUrl =
  "https://bookingengine.stayflexi.com/?hotel_id=39026";

const pantryImages = [
  { src: pantryImg1, alt: "Pantry image" },
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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === pantryImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [pantryImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === pantryImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? pantryImages.length - 1 : prev - 1));

  return (
    <section id="pantry" className="guest-house-section section-premium">
      <div className="container-xl">
        <div className="guest-house-shell">
          {/* LEFT SIDE - Content (45%) */}
          <div className="guest-house-content" data-aos="fade-right">
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

          {/* RIGHT SIDE - Image Slider (55%) */}
          <div className="guest-house-gallery" data-aos="fade-left">
            <div className="position-relative guest-slider-wrapper">
              {pantryImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`guest-slider-image ${i === currentSlide ? "active" : ""}`}
                />
              ))}

              {/* Previous */}
              <button
                onClick={prevSlide}
                className="guest-slider-arrow guest-prev"
              >
                ‹
              </button>

              {/* Next */}
              <button
                onClick={nextSlide}
                className="guest-slider-arrow guest-next"
              >
                ›
              </button>

              {/* Dots */}
              <div className="guest-slider-dots">
                {pantryImages.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`guest-dot ${i === currentSlide ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pantry;