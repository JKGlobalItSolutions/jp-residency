import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import travelsImg1 from "../assets/tour/img1.png";
import travelsImg2 from "../assets/tour/img2.png";
import travelsImg3 from "../assets/tour/img3.png";
import travelsImg4 from "../assets/tour/img4.png";
import travelsImg5 from "../assets/tour/img5.png";
import travelsImg6 from "../assets/tour/img6.png";

const bookingUrl =
  "https://bookingengine.stayflexi.com/?hotel_id=39026";

const travelsImages = [
  { src: travelsImg1, alt: "Tours & Travels image 1" },
  { src: travelsImg2, alt: "Tours & Travels image 2" },
  { src: travelsImg3, alt: "Tours & Travels image 3" },
  { src: travelsImg4, alt: "Tours & Travels image 4" },
  { src: travelsImg5, alt: "Tours & Travels image 5" },
  { src: travelsImg6, alt: "Tours & Travels image 6" },
];

const amenities = [
  { icon: "bi-bank", label: "Temple Visits" },
  { icon: "bi-footprints", label: "Girivalam" },
  { icon: "bi-airplane", label: "Airport Transfer" },
  { icon: "bi-train-front", label: "Railway Station Pickup" },
  { icon: "bi-car-front", label: "Local Sightseeing" },
  { icon: "bi-people", label: "Family Trips" },
];

const ToursTravels = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === travelsImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [travelsImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === travelsImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? travelsImages.length - 1 : prev - 1));

  return (
    <section id="tours-travels" className="guest-house-section section-premium" style={{ background: "#fff" }}>
      <div className="container-xl">
        <div className="guest-house-shell guest-house-shell-reverse">
          {/* LEFT SIDE - Image Slider (55%) */}
          <div className="guest-house-gallery" data-aos="fade-right">
            <div className="position-relative guest-slider-wrapper">
              {travelsImages.map((img, i) => (
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
                {travelsImages.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`guest-dot ${i === currentSlide ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Content (45%) */}
          <div className="guest-house-content" data-aos="fade-left" >
            <div className="section-subtitle mb-2" style={{ color: "#000000" }}>JP RESIDENCY HOSPITALITY</div>
            <h2 className="section-title text-start guest-house-title mb-3" style={{ color: "#000000" }}>Tours & Travels</h2>
            <p className="guest-house-lead mb-4" style={{ color: "#000000" }}>
              Explore Tiruvannamalai comfortably with our reliable Tours & Travels service. We provide safe transportation for temple visits, Girivalam, sightseeing, airport transfers, railway station pickups, and customized family trips.
            </p>

            {/* Amenities - 2 column grid */}
            <div className="guest-house-features" style={{ color: "#000000" }}>
              {amenities.map((amenity) => (
                <div className="guest-house-feature" key={amenity.label}>
                  <i className={`bi ${amenity.icon}`} style={{ fontSize: "26px" }}></i>
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