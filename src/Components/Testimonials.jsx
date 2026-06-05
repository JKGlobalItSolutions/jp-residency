import { useState, useEffect, useRef, useCallback } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import guestImg1 from "../assets/guest/img1.png";
import guestImg2 from "../assets/guest/img2.png";
import guestImg3 from "../assets/guest/img3.png";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      text: "Exceptional stay at JP Residency! The rooms were immaculate and the staff went above and beyond to make our family vacation memorable. The location is perfect for temple visits.",
      rating: 5,
      initial: "PS",
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore, India",
      text: "I've stayed at many hotels in Tiruvannamalai, but JP Residency stands out for its cleanliness, comfort, and warm hospitality. The room service was prompt and professional.",
      rating: 5,
      initial: "RK",
    },
    {
      name: "Ananya Patel",
      location: "Chennai, India",
      text: "Beautiful hotel with excellent amenities. The air-conditioned rooms were a blessing after a long day of sightseeing. Highly recommended for both business and leisure travelers.",
      rating: 5,
      initial: "AP",
    },
    {
      name: "Vikram Singh",
      location: "Delhi, India",
      text: "Our family loved the spacious family room. The kids had plenty of space to play, and we felt completely safe with the 24/7 security. Will definitely be coming back!",
      rating: 4,
      initial: "VS",
    },
    {
      name: "Meera Nair",
      location: "Kerala, India",
      text: "JP Residency exceeded our expectations. From the warm welcome to the comfortable stay, everything was perfect. The proximity to Arunachaleswarar Temple was a huge bonus.",
      rating: 5,
      initial: "MN",
    },
    {
      name: "Arun Joshi",
      location: "Pune, India",
      text: "Great value for money! The rooms are well-maintained, the staff is courteous, and the location is ideal. The hot water and power backup ensured a hassle-free stay.",
      rating: 5,
      initial: "AJ",
    },
  ];
  const guestImages = [guestImg1, guestImg2, guestImg3];

  const totalSlides = Math.ceil(testimonials.length / 3);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
  }, [totalSlides]);

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide]);

  return (
    <section className="section-premium-alt" style={{ background: "#FBEFD3" }}>
      <div className="container">
        <div className="text-center mb-5">
          <div className="section-subtitle">Guest Reviews</div>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem" }}>
            Real experiences from our valued guests who experienced the JP Residency hospitality
          </p>
          <div className="premium-divider" />
        </div>

        <div className="testimonial-carousel">
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`bi ${i < item.rating ? "bi-star-fill" : "bi-star"}`}
                        style={{ marginRight: "2px" }}
                      ></i>
                    ))}
                  </div>
                  <p className="testimonial-text">"{item.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <img src={guestImages[index % guestImages.length]} alt={item.name} loading="lazy" />
                    </div>
                    <div>
                      <div className="testimonial-name">{item.name}</div>
                      <div className="testimonial-location">
                        <i className="bi bi-geo-alt me-1"></i>
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === currentSlide ? "active" : ""}`}
              onClick={() => {
                setCurrentSlide(i);
                startAutoSlide();
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
