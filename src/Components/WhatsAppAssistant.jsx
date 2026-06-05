import "bootstrap-icons/font/bootstrap-icons.css";
import { whatsAppAssistantData } from "../db/data";

const WhatsAppAssistant = ({ isOpen, onClose }) => {
  const { phoneNumber, options } = whatsAppAssistantData;

  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="whatsapp-assistant-overlay"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        className="rounded-4 overflow-hidden whatsapp-assistant-panel"
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#fff",
          boxShadow: "0 25px 80px rgba(0,0,0,0.3)",
          animation: "zoomIn 0.3s ease",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-4 text-center"
          style={{
            background: "linear-gradient(135deg, #111111, #A37D4C)",
            color: "#fff",
            position: "relative",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-2"
            style={{
              width: "60px",
              height: "60px",
              background: "rgba(255,255,255,0.2)",
              fontSize: "2rem",
            }}
          >
            <i className="bi bi-whatsapp"></i>
          </div>
          <h5 className="fw-bold mb-1" style={{ color: "#fff" }}>JP Residency</h5>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.85rem", marginBottom: 0 }}>
            How can we help you?
          </p>
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "rgba(255,255,255,0.2)",
              border: "none",
              color: "#fff",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              fontSize: "0.9rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="bi bi-x"></i>
          </button>
        </div>

        {/* Options */}
        <div className="p-3">
          <p style={{ fontSize: "0.8rem", color: "#6c757d", marginBottom: "12px", textAlign: "center" }}>
            Select an option to start a conversation
          </p>
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => openWhatsApp(option.message)}
              className="w-100 d-flex align-items-center gap-3 p-3 mb-2 rounded-3 border-0"
              style={{
                background: "#f9f9f9",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textAlign: "left",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FBEFD3";
                e.currentTarget.style.transform = "translateX(5px)";
                e.currentTarget.querySelector(".wa-icon").style.background = "#A37D4C";
                e.currentTarget.querySelector(".wa-icon i").style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f9f9f9";
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.querySelector(".wa-icon").style.background = "#FBEFD3";
                e.currentTarget.querySelector(".wa-icon i").style.color = "#A37D4C";
              }}
            >
              <div
                className="wa-icon d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "44px",
                  height: "44px",
                  background: "#FBEFD3",
                  transition: "all 0.3s ease",
                  flexShrink: 0,
                }}
              >
                <i className={`bi ${option.icon}`} style={{ color: "#A37D4C", fontSize: "1.2rem", transition: "color 0.3s ease" }}></i>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#2d2d2d" }}>{option.title}</div>
                <div style={{ fontSize: "0.75rem", color: "#6c757d" }}>via WhatsApp</div>
              </div>
              <div className="ms-auto">
                <i className="bi bi-whatsapp" style={{ color: "#25D366", fontSize: "1.1rem" }}></i>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div
          className="text-center p-3"
          style={{ borderTop: "1px solid #eee", fontSize: "0.75rem", color: "#6c757d" }}
        >
          <i className="bi bi-shield-check me-1" style={{ color: "#25D366" }}></i>
          End-to-end encrypted · Powered by WhatsApp
        </div>
      </div>
    </div>
  );
};

export default WhatsAppAssistant;
