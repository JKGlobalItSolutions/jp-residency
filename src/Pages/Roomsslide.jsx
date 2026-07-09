import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import deluxeDoubleImg from "../assets/deluxe double room/img1.png";
import deluxeTripleImg from "../assets/deluxe triple room/img1.png";
import deluxeRoomImg from "../assets/deluxe room/img1.png";

const bookingUrl =
  "https://bookingengine.stayflexi.com/?hotel_id=39026";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const rooms = [
    {
      name: "Deluxe Double Room",
      price: "₹8,000",
      guests: "Up to 2 guests",
      beds: "Queen bed",
      images: [deluxeDoubleImg],
      description:
        "Comfortable and well-appointed room featuring modern amenities and city views. Perfect for business travelers and couples seeking quality accommodation at great value.",
      amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Safe", "Room Service", "Electric Kettle"],
      badge: "Best Value",
      icon: "bi-bed",
    },
    {
      name: "Deluxe Triple Room",
      price: "₹6,000",
      beds: "King bed",
      guests: "Up to 2 Adults & 2 Child",
      images: [deluxeTripleImg],
      description:
        "Elegant premium room with enhanced furnishings and modern amenities. Features plush bedding and a relaxing atmosphere.",
      amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Safe", "Room Service", "Complimentary Breakfast"],
      badge: "Popular Choice",
      icon: "bi-building",
    },
    {
      name: "Deluxe Room",
      price: "₹4,000",
      guests: "Up to 4 guests",
      beds: "2 Queen beds",
      images: [deluxeRoomImg],
      description:
        "Spacious family room designed for comfort and convenience. Ideal for families or small groups.",
      amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Safe", "Room Service", "Work Desk"],
      badge: "Family Favorite",
      icon: "bi-people",
    },
  ];

  const handleView = (room) => {
    setSelectedRoom(room);
    setCurrentIndex(0);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRoom(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (!selectedRoom) return;
    setCurrentIndex((prev) =>
      prev === selectedRoom.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedRoom) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedRoom.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="room" className="section-premium" style={{ background: "#fff" }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <div className="section-subtitle">Accommodations</div>
          <h2 className="section-title">Our Premium Rooms</h2>
          <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem" }}>
            Choose from carefully designed accommodations, each offering unique comfort and style
          </p>
          <div className="premium-divider" />
        </div>

        <div className="row g-4">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="col-12"
              data-index={idx}
              style={{
                opacity: visibleItems.includes(String(idx)) ? 1 : 0,
                transform: visibleItems.includes(String(idx)) ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s ease ${idx * 0.15}s`,
              }}
            >
              <div className="room-card-premium row g-0 mx-0 overflow-hidden" style={{ borderRadius: "20px" }}>
                {/* Left Side: Content - on mobile this comes first (order-1) above image */}
                <div className="col-lg-6 order-1 order-lg-1 px-0 d-flex flex-column">
                  <div className="room-body d-flex flex-column h-100 p-4 p-lg-5">
                    <span className="room-badge d-inline-block position-static mb-2" style={{ background: "#A37D4C", color: "#fff", padding: "5px 14px", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 600, width: "fit-content" }}>
                      {room.badge}
                    </span>
                    <h5 className="room-name" style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      <i className={`bi ${room.icon} me-2`} style={{ color: "#A37D4C" }}></i>
                      {room.name}
                    </h5>

                    <p className="card-text" style={{ fontSize: "0.88rem", color: "#6c757d", lineHeight: "1.6", marginBottom: "0.75rem" }}>
                      {room.description}
                    </p>

                    <div className="room-details mb-2">
                      <span>
                        <i className="bi bi-bed"></i> {room.beds}
                      </span>
                      <span>
                        <i className="bi bi-people"></i> {room.guests}
                      </span>
                    </div>

                    <div className="room-amenities mb-3">
                      {room.amenities.slice(0, 4).map((a, i) => (
                        <span key={i} className="amenity-tag">
                          <i className="bi bi-check-circle-fill"></i> {a}
                        </span>
                      ))}
                      {room.amenities.length > 4 && (
                        <span className="amenity-tag">
                          <i className="bi bi-plus-circle-fill"></i> +{room.amenities.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="mt-auto d-flex align-items-center gap-3 flex-wrap">
                      <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#A37D4C" }}>
                        {room.price}
                        <span style={{ fontSize: "0.8rem", fontWeight: 400, color: "#6c757d" }}>/night</span>
                      </span>
                      <button
                        className="btn-room-detail"
                        onClick={() => handleView(room)}
                        style={{ width: "auto", marginTop: 0, padding: "10px 28px" }}
                      >
                        <i className="bi bi-arrow-right-circle me-1"></i> View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Side: Image - on mobile this comes second (order-2) below content */}
                <div className="col-lg-6 order-2 order-lg-2 px-0">
                  <div className="room-image-wrapper" style={{ height: "100%", minHeight: "280px" }}>
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "280px" }}
                    />
                    <div className="room-overlay" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Premium Modal */}
      {showModal && selectedRoom && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.65)", zIndex: 9999 }}
        >
          <div
            className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
            style={{ maxWidth: "900px" }}
          >
            <div className="modal-content border-0 rounded-4 overflow-hidden" style={{ background: "#fff" }}>
              {/* Modal Header */}
              <div className="modal-header border-0 px-4 pt-4 pb-0">
                <h4 className="fw-bold mb-0" style={{ color: "#A37D4C" }}>
                  <i className={`bi ${selectedRoom.icon || "bi-building"} me-2`}></i>
                  {selectedRoom.name}
                </h4>
                <button
                  className="btn-close"
                  onClick={handleCloseModal}
                  style={{ fontSize: "1.2rem" }}
                ></button>
              </div>

              <div className="modal-body px-4 pb-4">
                <div className="row g-4">
                  {/* Left: Image Slider */}
                  <div className="col-md-7">
                    <div
                      className="position-relative rounded-3 overflow-hidden"
                      style={{ background: "#f8f8f8" }}
                    >
                      <img
                        src={selectedRoom.images[currentIndex]}
                        className="img-fluid w-100"
                        style={{
                          height: "350px",
                          objectFit: "cover",
                          transition: "opacity 0.3s ease",
                        }}
                        alt={selectedRoom.name}
                      />
                      {selectedRoom.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="btn bg-white shadow position-absolute start-0 top-50 translate-middle-y rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: "40px", height: "40px", marginLeft: "12px", zIndex: 5, border: "1px solid #eee" }}
                          >
                            <i className="bi bi-chevron-left"></i>
                          </button>
                          <button
                            onClick={nextImage}
                            className="btn bg-white shadow position-absolute end-0 top-50 translate-middle-y rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: "40px", height: "40px", marginRight: "12px", zIndex: 5, border: "1px solid #eee" }}
                          >
                            <i className="bi bi-chevron-right"></i>
                          </button>
                        </>
                      )}
                      {/* Image counter */}
                      {selectedRoom.images.length > 1 && (
                        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2" style={{ zIndex: 5 }}>
                          {selectedRoom.images.map((_, i) => (
                            <span
                              key={i}
                              style={{
                                width: i === currentIndex ? "22px" : "8px",
                                height: "8px",
                                borderRadius: "4px",
                                background: i === currentIndex ? "#A37D4C" : "rgba(255,255,255,0.6)",
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                              }}
                              onClick={() => setCurrentIndex(i)}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="col-md-5">
                    {/* Price */}
                    <div
                      className="d-flex align-items-center justify-content-between mb-3 p-3 rounded-3"
                      style={{ background: "#FBEFD3" }}
                    >
                      <div>
                        <span style={{ fontSize: "0.8rem", color: "#6c757d" }}>Price per night</span>
                        <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "#A37D4C" }}>
                          {selectedRoom.price}
                        </div>
                      </div>
                      <i className="bi bi-currency-rupee" style={{ fontSize: "1.5rem", color: "#A37D4C" }}></i>
                    </div>

                    {/* Room Type & Occupancy */}
                    <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
                      <span
                        className="badge d-inline-flex align-items-center gap-1"
                        style={{ background: "#A37D4C", padding: "6px 14px", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 500 }}
                      >
                        <i className="bi bi-door-open"></i> {selectedRoom.name}
                      </span>
                      <span
                        className="badge d-inline-flex align-items-center gap-1"
                        style={{ background: "#6c757d", padding: "6px 14px", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 500 }}
                      >
                        <i className="bi bi-bed me-1"></i> {selectedRoom.beds}
                      </span>
                      <span
                        className="badge d-inline-flex align-items-center gap-1"
                        style={{ background: "#6c757d", padding: "6px 14px", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 500 }}
                      >
                        <i className="bi bi-people me-1"></i> {selectedRoom.guests}
                      </span>
                    </div>

                    {/* Description */}
                    <h6 className="fw-bold" style={{ color: "#A37D4C", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                      <i className="bi bi-info-circle me-1"></i> Description
                    </h6>
                    <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: "1.7", marginBottom: "1rem" }}>
                      {selectedRoom.description}
                    </p>

                    {/* All Amenities */}
                    <h6 className="fw-bold" style={{ color: "#A37D4C", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                      <i className="bi bi-grid me-1"></i> All Amenities
                    </h6>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {selectedRoom.amenities.map((a, i) => (
                        <span
                          key={i}
                          style={{
                            background: "#FBEFD3",
                            color: "#A37D4C",
                            padding: "5px 14px",
                            borderRadius: "50px",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <i className="bi bi-check-circle-fill" style={{ fontSize: "0.7rem" }}></i>
                          {a}
                        </span>
                      ))}
                    </div>

                    {/* Booking Button */}
                    <div className="mt-3">
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn text-white fw-semibold w-100 py-2 btn-premium btn-shine d-flex align-items-center justify-content-center gap-2"
                        style={{ borderRadius: "50px", textDecoration: "none" }}
                      >
                        <i className="bi bi-whatsapp"></i>
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rooms;
