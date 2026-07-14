import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoImage from "../assets/gallery/JP Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const bookingUrl =
  "https://bookingengine.stayflexi.com/?hotel_id=39026";

const Navbar = () => {
  const [header, setHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setHeader(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = isMobile ? "#FBEFD3" : header ? "#FBEFD3" : "transparent";
  const navTextColor = header || isMobile ? "#000" : "#fff";

  const navItemStyle = {
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.95rem",
    fontWeight: "500",
    textTransform: "uppercase",
    transition: "color 0.3s ease",
    position: "relative",
    padding: "0.5rem 1rem",
    color: navTextColor,
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = "#A37D4C";
    e.target.style.setProperty("--underline-width", "100%");
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = navTextColor;
    e.target.style.setProperty("--underline-width", "0%");
  };

  const navItems = [
    { label: "Home", route: "/" },
    { label: "About Us", route: "/about" },
    { label: "Rooms", route: "/rooms" },
    { label: "JP Guest House", route: "/guest-house" },
    { label: "Pantry", route: "/pantry" },
    { label: "Tours & Travels", route: "/tours-travels" },
    { label: "Amenities", route: "/amenities" },
    { label: "Gallery", route: "/gallery" },
    { label: "Contact Us", route: "/contact" },
  ];

  const handleNavClick = (route) => {
    if (location.pathname !== route) {
      navigate(route);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-premium"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1030",
        backgroundColor: "#a37d4c",
        padding: header ? "0.5rem 1rem" : "1rem 1rem",
        boxShadow: header || isMobile ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
        transition: "all 0.3s",
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={LogoImage}
            width="90"
            height="70"
            alt="JP Residency Logo"
            style={{ objectFit: "contain" }}
          />
          <span style={{ color: "#efedea", fontWeight: 700, fontSize: "1.2rem" }}>
            JP RESIDENCY
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-uppercase fw-semibold">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <span
                  onClick={() => handleNavClick(item.route)}
                  className="nav-link"
                  style={navItemStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.label}
                </span>
              </li>
            ))}

            <li className="nav-item d-flex align-items-center">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="jp-book-now-btn"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
