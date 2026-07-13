import { useEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Automatically import every image inside the about folder.
// Adding a new image here requires no code changes — Vite picks it up on build/HMR.
const imageModules = import.meta.glob("../assets/about/*", { eager: true });
const aboutImages = Object.keys(imageModules)
  .sort()
  .map((key) => imageModules[key].default);

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
            <div className="section-subtitle" style={{ fontSize: "3rem" }}>About Us</div>
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

          {/* Right: Image Carousel */}
          <div className="col-lg-6">
            <div
              className="position-relative about-swiper-wrapper"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 50px rgba(0,0,0,0.12)",
                transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              <Swiper
                className="about-swiper"
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={600}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={true}
                pagination={{ clickable: true, el: ".about-custom-pagination" }}
              >
                {aboutImages.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`JP Residency ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Badge overlay */}
              <div
                className="position-absolute bottom-0 start-0 end-0 p-4"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 100%)",
                  zIndex: 5,
                  pointerEvents: "none",
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

              {/* Pagination dots (rendered above the badge overlay) */}
              <div
                className="about-custom-pagination"
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 6,
                  display: "flex",
                  gap: "8px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-swiper {
          width: 100%;
          height: 600px;
        }
        .about-swiper .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        /* Navigation arrows */
        .about-swiper .swiper-button-next,
        .about-swiper .swiper-button-prev {
          width: 36px;
          height: 36px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }
        .about-swiper .swiper-button-next:hover,
        .about-swiper .swiper-button-prev:hover {
          opacity: 1;
        }
        .about-swiper .swiper-button-next::after,
        .about-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: 700;
          color: #333;
        }
        /* Pagination dots */
        .about-custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.6);
          opacity: 1;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .about-custom-pagination .swiper-pagination-bullet-active {
          width: 22px;
          background: #A37D4C;
        }
        /* Responsive heights */
        @media (max-width: 991px) {
          .about-swiper { height: 500px; }
        }
        @media (max-width: 767px) {
          .about-swiper { height: 400px; }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;