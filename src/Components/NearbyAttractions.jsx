import { useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import kovilImg from "../assets/nearby/kovil.png";
import ramanaImg from "../assets/nearby/ramana.png";
import caveImg from "../assets/nearby/cave.png";
import ashramImg from "../assets/nearby/ashram.png";

const NearbyAttractions = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".attraction-reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const attractions = [
    {
      name: "Arunachaleswarar Temple",
      image: kovilImg,
      distance: "1.5 km",
      desc: "One of the largest and most revered Shiva temples in South India, known for its magnificent gopurams and spiritual significance.",
    },
    {
      name: "Ramana Ashram",
      image: ramanaImg,
      distance: "2 km",
      desc: "The famous ashram of sage Ramana Maharshi, a peaceful spiritual retreat visited by seekers from around the world.",
    },
    {
      name: "Virupaksha Cave",
      image: caveImg,
      distance: "3.5 km",
      desc: "A historic cave on Arunachala hill where Ramana Maharshi meditated. A serene spot for meditation and spiritual reflection.",
    },
    {
      name: "Skandashram",
      image: ashramImg,
      distance: "4 km",
      desc: "A beautiful cave ashram located on the slopes of Arunachala hill, offering stunning views and peaceful meditation spaces.",
    },
  ];

  return (
    <section className="section-premium" style={{ background: "#fff" }} ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-5">
          <div className="section-subtitle">Explore Nearby</div>
          <h2 className="section-title">Nearby Attractions</h2>
          <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem" }}>
            Discover the spiritual and cultural landmarks surrounding JP Residency
          </p>
          <div className="premium-divider" />
        </div>

        <div className="row g-4">
          {attractions.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-3 attraction-reveal"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.7s ease ${index * 0.12}s`,
              }}
            >
              <div className="attraction-card">
                <div className="attraction-icon" style={{ overflow: "hidden", padding: 0 }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      display: "block",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="attraction-body">
                  <h5>{item.name}</h5>
                  <div className="attraction-distance mb-2">
                    <i className="bi bi-geo-alt"></i>
                    {item.distance} from hotel
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyAttractions;