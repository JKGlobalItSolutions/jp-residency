import { useEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import aboutImg from "../assets/about/img.png";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="section-premium"
      style={{ background: "#fff" }}
      ref={sectionRef}
    >
      <div className="container">
        <div
          className="row align-items-center g-5"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {/* Left: Content */}
          <div className="col-lg-6">
            <div className="section-subtitle">About Us</div>
            <h2 className="section-title text-start" style={{ fontSize: "2rem" }}>
              Your Divine Stay in Tiruvannamalai
            </h2>
            <p
              className="text-muted"
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.8",
                marginBottom: "1.2rem",
              }}
            >
              Welcome to JP Residency, a peaceful and spiritually enriching stay located in the sacred town of Tiruvannamalai. Designed for devotees, pilgrims, families, and travelers seeking comfort with a divine atmosphere, JP Residency offers a serene environment that complements the spiritual essence of Arunachala.
            </p>
            <p
              className="text-muted"
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.8",
                marginBottom: "1.2rem",
              }}
            >
              One of the unique highlights of JP Residency is the Pancha Mukha Darisanam View, where guests can experience the sacred sight associated with the five-faced manifestation of Lord Shiva. This rare spiritual experience makes the stay truly special for devotees visiting Tiruvannamalai.
            </p>
            <p
              className="text-muted"
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.8",
                marginBottom: "1.2rem",
              }}
            >
              For guests seeking inner peace and reflection, the property also provides a dedicated meditation space, offering a calm and tranquil setting for meditation, yoga, prayer, and spiritual practices. The peaceful surroundings help visitors disconnect from daily stress and connect with a deeper sense of mindfulness.
            </p>
            <p
              className="text-muted"
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.8",
                marginBottom: 0,
              }}
            >
              Experience comfort, spirituality, and serenity together at JP Residency – Your Divine Stay in Tiruvannamalai.
            </p>
          </div>

          {/* Right: Image */}
          <div className="col-lg-6">
            <div
              className="position-relative"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 50px rgba(0,0,0,0.12)",
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <img
                src={aboutImg}
                alt="JP Residency"
                className="img-fluid w-100"
                style={{
                  height: "400px",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s ease",
                }}
                loading="lazy"
              />
              <div
                className="position-absolute bottom-0 start-0 end-0 p-4"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 100%)",
                }}
              >
                <span
                  className="badge"
                  style={{
                    background: "#A37D4C",
                    padding: "8px 18px",
                    borderRadius: "50px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  <i className="bi bi-star-fill me-1"></i> Experience Comfort & Luxury
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
