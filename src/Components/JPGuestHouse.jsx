import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import travelsImg1 from "../assets/guest/img1.png";
import travelsImg2 from "../assets/guest/img2.png";
import travelsImg3 from "../assets/guest/img3.png";
import travelsImg4 from "../assets/guest/img4.png";
import travelsImg5 from "../assets/guest/img5.png";

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
  { icon: "bi-taxi-front", label: "Cooking Facility" },
  { icon: "bi-building", label: "2 Bed Room" },
  { icon: "bi-tree", label: "Biggest Hall For Fun" },
  { icon: "bi-train-lightrail-front", label: "Terrace With Hill " },
  { icon: "bi-airplane", label: "Meditation Area" },
  { icon: "bi-person-hearts", label: "Mountain View" },
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
    <section id="tours-travels" className="guest-house-section section-premium">
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
          <div className="guest-house-content" data-aos="fade-left">
            <div className="section-subtitle mb-2">JP RESIDENCY HOSPITALITY</div>
            <h2 className="section-title text-start guest-house-title mb-3">JP GUESTHOUSE</h2>
            <p className="guest-house-lead mb-4">
             JP Guest House offers a peaceful and comfortable stay in the heart of Tiruvannamalai. Enjoy clean rooms, scenic mountain views, cooking facilities, a spacious dining area, and ample car parking. Whether you're visiting for darshan, Girivalam, or a family trip, we ensure a relaxing and memorable experience. Experience warm hospitality and quality service that makes every stay feel like home.

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