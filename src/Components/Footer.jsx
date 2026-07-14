import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import LogoImage from "../assets/gallery/JP Logo.png";
import { galleryImages } from "../Pages/Gallery";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [lightboxImg, setLightboxImg] = useState(null);

  const footerGalleryImages = galleryImages.map((item) => item.src).slice(0, 4);
  const bookingUrl =
    "https://bookingengine.stayflexi.com/?hotel_id=39026";

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "About Us", id: "about" },
    { name: "Rooms", id: "room" },
    { name: "JP Guest House", id: "guest-house" },
    { name: "Amenities", id: "amenities" },
    { name: "Gallery", id: "gallery" },
    { name: "Pournami Calendar", id: "calendar" },
    { name: "How to Reach Us", id: "how-to-reach" },
    { name: "Contact Us", id: "contact" },
  ];

  const facilities = [
    "Free Wi-Fi",
    "Free Parking",
    "Meditation Area",
    "Party Hall",
    "Guest House",
    "Family Rooms",
    "Room Service",
  ];

  return (
    <>
      <footer
        style={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          paddingTop: "50px",
          paddingBottom: "0",
        }}
      >
        <div className="container">
          <div
            className="row justify-content-between align-items-start text-center text-lg-start"
            style={{ rowGap: "35px" }}
          >
            {/* COLUMN 1 - JP Residency */}
            <div className="col-lg-3 d-flex flex-column align-items-center align-items-lg-start">
              <img
                src={LogoImage}
                alt="JP Residency Logo"
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #A37D4C",
                  boxShadow: "0 4px 15px rgba(163,125,76,0.3)",
                  marginBottom: "12px",
                }}
              />
              <span
                style={{
                  color: "#A37D4C",
                  fontSize: "20px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                JP RESIDENCY
              </span>
              <p
                style={{
                  color: "#ccc",
                  fontSize: "13px",
                  lineHeight: "1.7",
                  maxWidth: "280px",
                  // textAlign: "center",
                  margin: "0 auto",
                  padding: "0 px",
                }}
              >
                JP Residency offers a peaceful and spiritually enriching stay in Tiruvannamalai with Pancha Mukha Darisanam View, Meditation Area, comfortable rooms, and modern amenities for pilgrims, families, and travelers.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="jp-book-now-btn btn-shine mt-3"
              >
                Book Now
              </a>
            </div>

            {/* COLUMN 2 - Quick Links */}
            <div className="col-lg-2 d-flex flex-column align-items-center align-items-lg-start">
              <h6
                style={{
                  color: "#A37D4C",
                  fontWeight: "700",
                  marginBottom: "15px",
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Quick Links
              </h6>
              {quickLinks.map((item, index) => (
                <button
                  key={index}
                  className="btn btn-link p-0 text-decoration-none"
                  style={{
                    color: "#ccc",
                    textAlign: "left",
                    fontSize: "13px",
                    marginBottom: "8px",
                    transition: "color 0.3s ease",
                    cursor: "pointer",
                  }}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={(e) => (e.target.style.color = "#A37D4C")}
                  onMouseLeave={(e) => (e.target.style.color = "#ccc")}
                >
                  <i className="bi bi-chevron-right me-1" style={{ fontSize: "10px", color: "#A37D4C" }}></i>
                  {item.name}
                </button>
              ))}
            </div>

            {/* COLUMN 3 - Contact Information */}
            <div className="col-lg-3 d-flex flex-column align-items-center align-items-lg-start">
              <h6
                style={{
                  color: "#A37D4C",
                  fontWeight: "700",
                  marginBottom: "15px",
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Contact Info
              </h6>
              <div className="d-flex align-items-center gap-2 mb-3" style={{ color: "#ccc", fontSize: "13px" }}>
                <i className="bi bi-geo-alt-fill" style={{ color: "#A37D4C", fontSize: "16px", minWidth: "20px" }}></i>
                <span>Idukka Pillaiyar Kovil, 6th St, Vengikkal, Tiruvannamalai, Tamil Nadu 606604</span>
              </div>
              <div className="d-flex align-items-center gap-2 mb-3" style={{ color: "#ccc", fontSize: "13px" }}>
                <i className="bi bi-telephone-fill" style={{ color: "#A37D4C", fontSize: "16px", minWidth: "20px" }}></i>
                <span>+91 9688866684</span>
              </div>
              <div className="d-flex align-items-center gap-2 mb-3" style={{ color: "#ccc", fontSize: "13px" }}>
                <i className="bi bi-whatsapp" style={{ color: "#A37D4C", fontSize: "16px", minWidth: "20px" }}></i>
                <span>+91 9688866684</span>
              </div>
              <div className="d-flex align-items-center gap-2" style={{ color: "#ccc", fontSize: "13px" }}>
                <i className="bi bi-envelope-fill" style={{ color: "#A37D4C", fontSize: "16px", minWidth: "20px" }}></i>
                <span>jpresidency2025@gmail.com</span>
              </div>
            </div>

            {/* COLUMN 4 - Facilities */}
            <div className="col-lg-2 d-flex flex-column align-items-center align-items-lg-start">
              <h6
                style={{
                  color: "#A37D4C",
                  fontWeight: "700",
                  marginBottom: "15px",
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Facilities
              </h6>
              {facilities.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center gap-2"
                  style={{
                    color: "#ccc",
                    fontSize: "13px",
                    marginBottom: "8px",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A37D4C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
                >
                  <i className="bi bi-check-circle-fill" style={{ color: "#A37D4C", fontSize: "12px" }}></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* COLUMN 5 - Instagram Photos */}
            <div className="col-lg-2 d-flex flex-column align-items-center align-items-lg-start">
              <h6
                style={{
                  color: "#A37D4C",
                  fontWeight: "700",
                  marginBottom: "15px",
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Instagram
              </h6>
              <div
                className="d-flex flex-wrap"
                style={{ gap: "6px", maxWidth: "180px", justifyContent: "center" }}
              >
                {footerGalleryImages.map((img, index) => (
                  <div
                    key={index}
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "6px",
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      border: "1px solid rgba(163,125,76,0.2)",
                    }}
                    onClick={() => setLightboxImg(img)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.08)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(163,125,76,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <img
                      src={img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                        background: "#111",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div
            className="text-center py-4 mt-4"
            style={{
              borderTop: "1px solid rgba(163,125,76,0.3)",
              color: "#aaa",
              fontSize: "13px",
            }}
          >
            <i className="bi bi-c-circle me-1"></i>
            {new Date().getFullYear()} JP Residency. All Rights Reserved.
            <br />
            <span style={{ fontSize: "12px", color: "#777" }}>
              Designed By Sonachala
            </span>
          </div>
        </div>
      </footer>

      {/* Lightbox for gallery images */}
      {lightboxImg && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div
            className="lightbox-content"
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "85vh",
              animation: "zoomIn 0.4s ease",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg}
              alt="Gallery"
              style={{
                maxWidth: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: "12px",
              }}
            />
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: "absolute",
                top: "-40px",
                right: 0,
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "2rem",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "rotate(90deg)")}
              onMouseLeave={(e) => (e.target.style.transform = "rotate(0deg)")}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
