import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import WhatsAppAssistant from "./WhatsAppAssistant";

const FloatingActions = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="floating-actions">
        {/* Scroll To Top */}
        <button
          className={`floating-btn floating-btn-top ${showTopBtn ? "" : "hidden"}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up"></i>
          <span className="btn-tooltip">Top</span>
        </button>

        {/* WhatsApp - Opens Smart Assistant */}
        <button
          onClick={() => setShowWhatsApp(true)}
          className="floating-btn floating-btn-whatsapp"
          aria-label="Chat on WhatsApp"
          style={{ border: "none", cursor: "pointer" }}
        >
          <i className="bi bi-whatsapp"></i>
          <span className="btn-tooltip">WhatsApp</span>
        </button>

        {/* Call Now */}
        <a
          href="tel:+919688866684"
          className="floating-btn floating-btn-call"
          aria-label="Call us"
        >
          <i className="bi bi-telephone-fill"></i>
          <span className="btn-tooltip">Call</span>
        </a>
      </div>

      {/* WhatsApp Assistant Popup */}
      <WhatsAppAssistant
        isOpen={showWhatsApp}
        onClose={() => setShowWhatsApp(false)}
      />
    </>
  );
};

export default FloatingActions;