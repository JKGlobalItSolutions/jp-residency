import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import WhatsAppAssistant from "../Components/WhatsAppAssistant";

const initialForm = { name: "", email: "", message: "" };

const trustItems = [
  { icon: "bi-moon-stars-fill", label: "Pancha Mukha Darisanam View" },
  { icon: "bi-flower2", label: "Peaceful Meditation Space" },
  { icon: "bi-p-circle-fill", label: "Free Parking" },
  { icon: "bi-headset", label: "24x7 Assistance" },
];

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!emailPattern.test(form.email.trim())) nextErrors.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) nextErrors.message = "Please share a few more details.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setFormStatus(null);
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(null);

    if (!validateForm()) {
      setFormStatus({ type: "error", text: "Please correct the highlighted fields." });
      return;
    }

    setSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFormStatus({ type: "success", text: "Message sent successfully. Our team will contact you shortly." });
        setForm(initialForm);
        setErrors({});
      })
      .catch((err) => {
        console.log(err);
        setFormStatus({ type: "error", text: "Message could not be sent. Please try again or call us directly." });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-premium-section section-premium-alt">
      <div className="container-xl contact-premium-container">
        <div className="text-center mb-5" data-aos="fade-down">
          <div className="section-subtitle">Get In Touch</div>
          <h2 className="section-title">Contact Us</h2>
          <p className="text-muted contact-premium-intro">
            We'd love to hear from you. Get in touch for reservations and inquiries.
          </p>
          <div className="premium-divider" />
        </div>

        <div className="row g-4 align-items-stretch contact-card-row">
          <div className="col-12 col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-premium-card h-100 w-100">
              <div className="contact-card-title">
                <span>
                  <i className="bi bi-building"></i>
                </span>
                <div>
                  <h3>Hotel Information</h3>
                  <p>Reach our reception team for bookings, arrivals, and guest support.</p>
                </div>
              </div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span><i className="bi bi-geo-alt-fill"></i></span>
                  <div>
                    <strong>Address</strong>
                    <p>Idukka Pillaiyar Kovil, 6th St, Vengikkal, Tiruvannamalai, Tamil Nadu 606604</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span><i className="bi bi-telephone-fill"></i></span>
                  <div>
                    <strong>Phone</strong>
                    <p>9688866684</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span><i className="bi bi-envelope-fill"></i></span>
                  <div>
                    <strong>Email</strong>
                    <p>jpresidency2025@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span><i className="bi bi-clock-fill"></i></span>
                  <div>
                    <strong>Check-in / Check-out</strong>
                    <p>3:00 PM / 12:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <a href="tel:+919688866684" className="btn-contact-action btn-call-now">
                  <i className="bi bi-telephone-fill"></i>
                  Call Now
                </a>
                <button
                  type="button"
                  onClick={() => setShowWhatsApp(true)}
                  className="btn-contact-action btn-whatsapp"
                >
                  <i className="bi bi-whatsapp"></i>
                  WhatsApp Us
                </button>
                <a
                  href="https://www.google.com/maps/dir//JP+Residency/@12.2554604,79.061876,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact-action btn-directions"
                >
                  <i className="bi bi-signpost-2-fill"></i>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-premium-card contact-form-card h-100 w-100">
              <div className="contact-card-title">
                <span>
                  <i className="bi bi-chat-dots-fill"></i>
                </span>
                <div>
                  <h3>Send Us a Message</h3>
                  <p>Have a question or special request? We will be happy to help.</p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="contact-premium-form">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name</label>
                  <div className={`contact-input-wrap ${errors.name ? "has-error" : ""}`}>
                    <i className="bi bi-person"></i>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  </div>
                  {errors.name && <small>{errors.name}</small>}
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <div className={`contact-input-wrap ${errors.email ? "has-error" : ""}`}>
                    <i className="bi bi-envelope"></i>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>
                  {errors.email && <small>{errors.email}</small>}
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">Message</label>
                  <div className={`contact-input-wrap contact-textarea-wrap ${errors.message ? "has-error" : ""}`}>
                    <i className="bi bi-chat-dots"></i>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      placeholder="Tell us about your booking or inquiry"
                      required
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                    ></textarea>
                  </div>
                  {errors.message && <small>{errors.message}</small>}
                </div>

                {formStatus && (
                  <div className={`contact-form-status ${formStatus.type}`} role="status">
                    <i className={`bi ${formStatus.type === "success" ? "bi-check-circle-fill" : "bi-exclamation-circle-fill"}`}></i>
                    {formStatus.text}
                  </div>
                )}

                <button type="submit" className="contact-submit-button btn-shine" disabled={submitting}>
                  {submitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-fill"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="contact-map-section" data-aos="fade-up" data-aos-delay="150">
          <div className="contact-trust-strip">
            {trustItems.map((item) => (
              <div className="contact-trust-item" key={item.label}>
                <i className={`bi ${item.icon}`}></i>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="contact-map-card">
            <div className="contact-map-heading">
              <div>
                <span className="section-subtitle">Location Map</span>
                <h3>Find Us Easily</h3>
              </div>
              <a
                href="https://www.google.com/maps/dir//JP+Residency/@12.2554604,79.061876,17z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-map-fill"></i>
                Open in Maps
              </a>
            </div>

            <div className="contact-map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5523.431678025991!2d79.06187597587994!3d12.255460416222563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc1bd8599ae87%3A0x4633f38a69a5b8d7!2sJP%20Residency!5e0!3m2!1sen!2sin!4v1780402679223!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                title="JP Residency Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppAssistant isOpen={showWhatsApp} onClose={() => setShowWhatsApp(false)} />
    </section>
  );
};

export default Contact;
