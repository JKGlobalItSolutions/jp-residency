import React, { useState, useEffect, useRef } from "react";
import homeImg1 from "../assets/homepage/img.png";
import homeImg2 from "../assets/homepage/img2.png";
import homeImg3 from "../assets/homepage/img3.png";
import homeImg4 from "../assets/homepage/img4.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  const desktopSlides = [homeImg1, homeImg2, homeImg3, homeImg4];
  const mobileSlides = [homeImg1, homeImg2, homeImg3, homeImg4];
  const slides = isMobile ? mobileSlides : desktopSlides;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  const openBooking = () => {
    window.open("https://bookingengine.stayflexi.com/?hotel_id=39026", "_blank", "noopener,noreferrer");
  };

  const scrollToGallery = () => {
    const section = document.getElementById("gallery");
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-premium">
      {/* Background Image Slider */}
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`JP Residency ${i + 1}`}
          className="position-absolute w-100 h-100"
          style={{
            objectFit: "cover",
            opacity: i === currentSlide ? 1 : 0,
            transition: "opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            zIndex: 0,
          }}
        />
      ))}

      {/* Premium Overlay Layers */}
      <div className="hero-overlay" />
      <div className="hero-overlay-extra" />

      {/* Content */}
      <div
        className="position-absolute d-flex flex-column justify-content-center align-items-center text-center px-3"
        style={{ inset: 0, zIndex: 3, paddingTop: "80px" }}
      >
        {/* Badge */}
        <div className="hero-badge">
          <i className="bi bi-star-fill"></i>
          Book Direct & Save More
          <i className="bi bi-star-fill"></i>
        </div>

        {/* Subtitle */}
        <div className="hero-subtitle-extra">Just Enjoy & Relax</div>

        {/* Title */}
        <h1 className="hero-title">
          Welcome to
          <span>JP Residency</span>
        </h1>

        {/* Description */}
        <p className="hero-subtitle">
          Experience unparalleled comfort and luxury in the heart of Tiruvannamalai. 
          Your perfect stay awaits near the sacred Arunachaleswarar Temple.
        </p>

        {/* Buttons */}
        <div className="hero-btn-group">
          <button className="btn-premium btn-shine" onClick={openBooking}>
            <i className="bi bi-calendar-check me-2"></i>
            Book Now
          </button>
          <button className="btn-premium-outline" onClick={scrollToGallery}>
            <i className="bi bi-images me-2"></i>
            View Gallery
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div
        className="position-absolute d-flex gap-2"
        style={{ bottom: "40px", left: "50%", transform: "translateX(-50%)", zIndex: 4 }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            style={{
              width: i === currentSlide ? "24px" : "10px",
              height: "10px",
              borderRadius: "5px",
              border: "none",
              background: i === currentSlide ? "#A37D4C" : "rgba(255,255,255,0.4)",
              transition: "all 0.4s ease",
              cursor: "pointer",
              padding: 0,
            }}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;
