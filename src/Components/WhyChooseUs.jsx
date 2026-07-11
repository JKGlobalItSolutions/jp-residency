import { useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".why-reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reasons = [
    { icon: "bi-moon-stars-fill", title: "Pancha Mukha Darisanam View", desc: "Experience the divine Pancha Mukha Darisanam view directly from the property." },
    { icon: "bi-flower2", title: "Meditation Area", desc: "Experience peace and spiritual tranquility in our dedicated meditation space, designed for relaxation, mindfulness, prayer, and inner well-being." },
    { icon: "bi-stars", title: "Party Hall", desc: "Spacious and well-maintained party hall suitable for family gatherings, celebrations, small functions, and special occasions." },
    { icon: "bi-house-gear", title: "Pantry", desc: "Well-equipped pantry with essential facilities for preparing tea, coffee, and light refreshments during your stay." },
    { icon: "bi-house-door-fill", title: "Guest House", desc: "Comfortable and affordable guest house facilities with a divine atmosphere, perfect for families, pilgrims, and travelers visiting Tiruvannamalai." },
    { icon: "bi-geo-alt-fill", title: "Prime Location", desc: "Situated in the heart of Tiruvannamalai, close to major attractions and temples." },
    { icon: "bi-house-heart-fill", title: "Comfortable Rooms", desc: "Well-appointed rooms designed for maximum comfort and relaxation." },
    { icon: "bi-people-fill", title: "Family Friendly", desc: "Warm hospitality and spacious accommodations perfect for families." },
    { icon: "bi-cash-stack", title: "Affordable Pricing", desc: "Premium quality stays at budget-friendly prices with great value." },
    { icon: "bi-shield-fill-check", title: "Secure Parking", desc: "Ample secure parking space monitored 24/7 for your vehicle safety." },
    { icon: "bi-headset", title: "24/7 Guest Support", desc: "Round-the-clock dedicated support team ready to assist you anytime." },
    { icon: "bi-flower1", title: "Peaceful Meditation Environment", desc: "Dedicated calm and spiritual atmosphere ideal for meditation and relaxation." },
    { icon: "bi-person-heart", title: "Pilgrim-Friendly Stay", desc: "Comfortable accommodation designed for devotees and spiritual travelers." },
    { icon: "bi-signpost-split-fill", title: "Prime Location Near Temple Attractions", desc: "Easy access to important spiritual and sightseeing destinations." },
    { icon: "bi-people-fill", title: "Family-Friendly Accommodation", desc: "Safe, comfortable, and convenient stay for families." },
  ];

  return (
    <section className="section-premium" style={{ background: "#fff" }} ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-5">
          <div className="section-subtitle">Why JP Residency</div>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem" }}>
            Discover what makes JP Residency the preferred choice for travelers seeking comfort and excellence
          </p>
          <div className="premium-divider" />
        </div>

        <div className="row g-4">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-4 why-reveal"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.6s ease ${index * 0.1}s`,
              }}
            >
              <div className="why-choose-card">
                <div className="why-choose-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
