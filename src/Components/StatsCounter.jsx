import { useState, useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ guests: 0, reception: 0, security: 0, price: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetCounts = { guests: 1000, reception: 24, security: 100, price: 100 };
    const duration = 2500;
    const steps = 60;
    const increment = {};

    Object.keys(targetCounts).forEach((key) => {
      increment[key] = targetCounts[key] / steps;
    });

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setCounts({
        guests: Math.min(Math.round(increment.guests * currentStep), targetCounts.guests),
        reception: Math.min(Math.round(increment.reception * currentStep), targetCounts.reception),
        security: Math.min(Math.round(increment.security * currentStep), targetCounts.security),
        price: Math.min(Math.round(increment.price * currentStep), targetCounts.price),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible]);

  const stats = [
    { icon: "bi-emoji-smile", count: counts.guests, suffix: "+", label: "Happy Guests" },
    { icon: "bi-headset", count: counts.reception, suffix: "/7", label: "Reception" },
    { icon: "bi-shield-check", count: counts.security, suffix: "%", label: "Secure Stay" },
    { icon: "bi-trophy", count: counts.price, suffix: "%", label: "Best Price Guarantee" },
  ];

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="row g-4">
          {stats.map((item, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div className="stat-number">
                  {item.count}
                  <span className="stat-suffix">{item.suffix}</span>
                </div>
                <div className="stat-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;