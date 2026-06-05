import { useEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { pournamiCalendarData } from "../db/data";

const parseLocalDate = (date) => {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day, 23, 59, 59);
};

const formatTimelineDate = (date) =>
  parseLocalDate(date).toLocaleDateString("en-US", { month: "short", day: "numeric" });

const PournamiCalendar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const sectionRef = useRef(null);
  const { dates: pournamiData, bookingUrgency } = pournamiCalendarData;

  const timelineItems = [
    { date: "2026-06-29", title: "Full Moon Girivalam", status: "85% Booked" },
    { date: "2026-07-29", title: "Full Moon Girivalam", status: "High Demand" },
    { date: "2026-08-27", title: "Special Pilgrimage Day", status: "Limited Rooms Left" },
    { date: "2026-09-26", title: "Full Moon Girivalam", status: "Book Early" },
  ];

  const benefits = [
    { icon: "bi-moon-stars", label: "Pancha Mukha Darisanam View" },
    { icon: "bi-flower2", label: "Dedicated Meditation Area" },
    { icon: "bi-house-heart", label: "Comfortable Family Rooms" },
    { icon: "bi-signpost-2", label: "Easy Access to Girivalam Path" },
    { icon: "bi-stars", label: "Peaceful Spiritual Atmosphere" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
        setShowStickyCta(entry.isIntersecting);
      },
      { threshold: 0.22 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const nextPournami = pournamiData.find((p) => parseLocalDate(p.date) > now);

      if (!nextPournami) return;

      const diff = parseLocalDate(nextPournami.date).getTime() - now.getTime();
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [pournamiData]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRooms = () => {
    document.getElementById("room")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="calendar" className="section-premium pournami-booking-section" ref={sectionRef}>
      <div className="container">
        <div className={`text-center mb-5 pournami-reveal ${isVisible ? "visible" : ""}`}>
          <div className="section-subtitle">Pilgrimage Dates</div>
          <h2 className="section-title">Pournami & Girivalam Calendar</h2>
          <p className="text-muted" style={{ maxWidth: "650px", margin: "0 auto", fontSize: "0.95rem" }}>
            Plan your spiritual journey with our Pournami and Girivalam calendar. Experience the divine energy of Arunachala on these sacred days.
          </p>
          <div className="premium-divider" />
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className={`pournami-timeline-card pournami-reveal ${isVisible ? "visible" : ""}`}>
              <div className="pournami-card-kicker">Upcoming Sacred Dates</div>
              <h3>Plan Around Peak Pilgrimage Nights</h3>

              <div className="pournami-timeline">
                {timelineItems.map((item, index) => (
                  <div className="pournami-timeline-item" key={item.date}>
                    <div className="pournami-date-pill">{formatTimelineDate(item.date)}</div>
                    <div className="pournami-timeline-content">
                      <strong>{item.title}</strong>
                      <span>{item.status}</span>
                    </div>
                    {index < timelineItems.length - 1 && <div className="pournami-timeline-rule" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-12">
                <div className={`pournami-countdown-card pournami-reveal ${isVisible ? "visible" : ""}`}>
                  <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap mb-3">
                    <div>
                      <div className="pournami-card-kicker dark">Booking Countdown</div>
                      <h3><span aria-hidden="true">&#x23F3;</span> Next Pournami</h3>
                    </div>
                    <button className="pournami-cta light" onClick={scrollToContact}>Reserve Your Stay</button>
                  </div>

                  <div className="pournami-countdown-grid">
                    {[
                      { value: countdown.days, label: "Days" },
                      { value: countdown.hours, label: "Hours" },
                      { value: countdown.minutes, label: "Minutes" },
                      { value: countdown.seconds, label: "Seconds" },
                    ].map((item) => (
                      <div className="pournami-countdown-box" key={item.label}>
                        <strong>{String(item.value).padStart(2, "0")}</strong>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className={`pournami-status-card pournami-reveal ${isVisible ? "visible" : ""}`}>
                  <div className="pournami-card-kicker">Live Room Status</div>
                  <h3><span aria-hidden="true">&#x1F525;</span> Pournami Booking Status</h3>
                  <p>85% Rooms Already Booked</p>
                  <div className="pournami-progress" aria-label="85 percent rooms booked">
                    <span style={{ width: "85%" }} />
                  </div>
                  <strong>Only {bookingUrgency.roomsLeft} Rooms Remaining</strong>
                  <button className="pournami-cta dark" onClick={scrollToRooms}>Book Now</button>
                </div>
              </div>

              <div className="col-md-6">
                <div className={`pournami-benefits-card pournami-reveal ${isVisible ? "visible" : ""}`}>
                  <div className="pournami-card-kicker">Stay Benefits</div>
                  <h3><span aria-hidden="true">&#x2728;</span> Why Stay at JP Residency During Pournami?</h3>
                  <div className="pournami-benefits-list">
                    {benefits.map((benefit) => (
                      <div className="pournami-benefit" key={benefit.label}>
                        <i className={`bi ${benefit.icon}`}></i>
                        <span>{benefit.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showStickyCta && (
        <div className="pournami-sticky-cta" role="region" aria-label="Pournami special booking">
          <div>
            <strong><span aria-hidden="true">&#x1F525;</span> Pournami Special Booking</strong>
            <span>Only {bookingUrgency.roomsLeft} Rooms Left</span>
          </div>
          <button onClick={scrollToContact}>Reserve Now</button>
        </div>
      )}
    </section>
  );
};

export default PournamiCalendar;
