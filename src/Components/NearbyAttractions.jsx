import { useState, useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import kovilImg from "../assets/nearby/kovil.png";
import ramanaImg from "../assets/nearby/ramana.png";
import caveImg from "../assets/nearby/cave.png";
import ashramImg from "../assets/nearby/ashram.png";
import girivalamImg from "../assets/nearby/girivalam.png";
import panchaImg from "../assets/nearby/pancha.png";
import railwayImg from "../assets/nearby/railway.png";
import idukuImg from "../assets/nearby/iduku.png";
import gingeeImg from "../assets/nearby/gingee.png";
import renuImg from "../assets/nearby/renu.png";
import jawaImg from "../assets/nearby/jawa.png";
import paruImg from "../assets/nearby/paru.png";
import sathanurImg from "../assets/nearby/sathanur.png";
import mailamImg from "../assets/nearby/mailam.png";
import melImg from "../assets/nearby/mel.png";
import poondiImg from "../assets/nearby/poondi.png";
import thiruImg from "../assets/nearby/thiru.png";
import peruImg from "../assets/nearby/peru.png";

const NearbyAttractions = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const attractions = [
    {
      name: "Sathanur Dam",
      image: sathanurImg,
      distance: "Approx. 35 km",
      desc: "A magnificent dam built across the Thenpennai River, offering scenic views and a peaceful environment for day trips.",
      travelTime: "1 hour",
    },
    {
      name: "Parvatha Malai",
      image: paruImg,
      distance: "Approx. 45 km",
      desc: "A sacred hill with a Shiva temple at the peak, offering breathtaking sunrise views and a challenging trek for adventure seekers.",
      travelTime: "1.5 hours",
    },
    {
      name: "Jamanamathur Hills",
      image: jawaImg,
      distance: "Approx. 40 km",
      desc: "Picturesque hills perfect for nature walks and photography, with lush greenery and panoramic views of the surrounding landscape.",
      travelTime: "1.5 hours",
    },
    {
      name: "Padavedu Renugambal Temple",
      image: renuImg,
      distance: "Approx. 30 km",
      desc: "An ancient temple dedicated to Goddess Renugambal, known for its architectural beauty and spiritual significance.",
      travelTime: "1 hour",
    },
    {
      name: "Gingee Fort",
      image: gingeeImg,
      distance: "Approx. 60 km",
      desc: "A historic hill fort with impressive architecture, ancient temples, and stunning views. A must-visit for history enthusiasts.",
      travelTime: "2 hours",
    },
    {
      name: "Ulagalanda Perumal Temple",
      image: peruImg,
      distance: "Approx. 25 km",
      desc: "A revered Vishnu temple with intricate carvings and a serene atmosphere, showcasing traditional Dravidian architecture.",
      travelTime: "45 minutes",
    },
    {
      name: "Aathi Thiruvarangam Temple",
      image: thiruImg,
      distance: "Approx. 50 km",
      desc: "An ancient temple with rich historical significance, featuring beautiful sculptures and a peaceful spiritual ambiance.",
      travelTime: "1.5 hours",
    },
    {
      name: "Poondi Mahan Temple",
      image: poondiImg,
      distance: "Approx. 55 km",
      desc: "A sacred temple known for its unique architecture and religious importance, attracting devotees from across the region.",
      travelTime: "2 hours",
    },
    {
      name: "Melmalayanur Angalamman Temple",
      image: melImg,
      distance: "Approx. 70 km",
      desc: "A famous temple dedicated to Goddess Angalamman, known for its powerful deity and vibrant religious festivals.",
      travelTime: "2.5 hours",
    },
    {
      name: "Mailam Murugan Temple",
      image: mailamImg,
      distance: "Approx. 65 km",
      desc: "A revered Murugan temple situated on a hilltop, offering spiritual solace and magnificent views of the surrounding countryside.",
      travelTime: "2 hours",
    },
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
    {
      name: "Girivalam Path",
      image: girivalamImg,
      distance: "Approx. 2 km",
      desc: "Experience the sacred 14 km Girivalam Path around Arunachala Hill, a revered pilgrimage route visited by thousands of devotees, especially during Pournami (Full Moon).",
    },
    {
      name: "Pachamugha Dharisanam",
      image: panchaImg,
      distance: "Approx. 3 km",
      desc: "A popular viewpoint where devotees can witness the divine five-faced view of Arunachala Hill during Girivalam.",
    },
    {
      name: "Tiruvannamalai Railway Station",
      image: railwayImg,
      distance: "Approx. 2.5 km",
      desc: "The main railway station providing convenient connectivity to major cities and nearby destinations.",
    },
    {
      name: "Idukku Pillaiyar Temple",
      image: idukuImg,
      distance: "Approx. 2 km",
      desc: "A famous Lord Ganesesha temple where devotees pass through the narrow sacred passage as part of their spiritual visit.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => {
          const maxSlide = attractions.length - slidesPerView;
          return prev >= maxSlide ? 0 : prev + 1;
        });
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [attractions.length, slidesPerView, isPaused]);

  const nextSlide = () => {
    const maxSlide = attractions.length - slidesPerView;
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxSlide = attractions.length - slidesPerView;
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const totalDots = attractions.length - slidesPerView + 1;
  const visibleAttractions = attractions.slice(currentSlide, currentSlide + slidesPerView);

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

        <div 
          className="position-relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="row g-4">
            {visibleAttractions.map((item, index) => (
              <div
                key={currentSlide + index}
                className={`col-12 ${slidesPerView === 1 ? 'col-12' : slidesPerView === 2 ? 'col-sm-6' : 'col-lg-4'}`}
                style={{
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "all 0.5s ease",
                }}
              >
                <div className="attraction-card">
                  <div className="attraction-icon" style={{ overflow: "hidden", padding: 0 }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "250px",
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
                    {item.travelTime && (
                      <div className="attraction-travel-time mb-2">
                        <i className="bi bi-clock"></i>
                        {item.travelTime}
                      </div>
                    )}
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y rounded-circle shadow d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
              border: "none",
              fontSize: "20px",
              zIndex: 5,
              marginLeft: "-20px",
              opacity: 0.85,
            }}
            aria-label="Previous attractions"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="btn btn-light position-absolute top-50 end-0 translate-middle-y rounded-circle shadow d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
              border: "none",
              fontSize: "20px",
              zIndex: 5,
              marginRight: "-20px",
              opacity: 0.85,
            }}
            aria-label="Next attractions"
          >
            ›
          </button>

          {/* Pagination Dots */}
          <div
            className="d-flex justify-content-center gap-2 mt-4"
          >
            {Array.from({ length: totalDots }).map((_, i) => (
              <span
                key={i}
                onClick={() => goToSlide(i)}
                style={{
                  width: i === currentSlide ? "24px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  background: i === currentSlide ? "#A37D4C" : "rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyAttractions;