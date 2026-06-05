import { useCallback, useEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import terraceImg1 from "../assets/Terrace Hill View Room/DSC08716.jpg";
import terraceImg2 from "../assets/Terrace Hill View Room/DSC08720.jpg";
import terraceImg3 from "../assets/Terrace Hill View Room/DSC08727.jpg";
import terraceImg4 from "../assets/Terrace Hill View Room/DSC08737.jpg";
import terraceImg5 from "../assets/Terrace Hill View Room/DSC08748.jpg";
import terraceImg6 from "../assets/Terrace Hill View Room/DSC08756.jpg";
import terraceImg7 from "../assets/Terrace Hill View Room/DSC08770.jpg";

const sliderImages = [terraceImg1, terraceImg2, terraceImg3, terraceImg4, terraceImg5, terraceImg6, terraceImg7];

const PanchaMukhaTour = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const sectionRef = useRef(null);
  const modalRef = useRef(null);
  const touchStartRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    setZoom(1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    setZoom(1);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setZoom(1);
    setIsFullscreen(false);
    if (document.fullscreenElement) document.exitFullscreen?.();
  }, []);

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

  useEffect(() => {
    if (!showModal) return undefined;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
      if (event.key === "+" || event.key === "=") setZoom((value) => Math.min(value + 0.2, 2.4));
      if (event.key === "-") setZoom((value) => Math.max(value - 0.2, 1));
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, nextSlide, prevSlide, showModal]);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const openTour = () => {
    setCurrentSlide(0);
    setZoom(1);
    setShowModal(true);
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement && modalRef.current?.requestFullscreen) {
      await modalRef.current.requestFullscreen();
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen?.();
    }
  };

  const handleTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartRef.current === null) return;

    const distance = touchStartRef.current - event.changedTouches[0].clientX;
    if (Math.abs(distance) > 45) {
      if (distance > 0) nextSlide();
      else prevSlide();
    }
    touchStartRef.current = null;
  };

  return (
    <>
      <section
        id="virtual-tour"
        className="section-premium"
        style={{ background: "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)", position: "relative", overflow: "hidden" }}
        ref={sectionRef}
      >
        <div className="pancha-pattern" />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div
            className="row align-items-center g-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div className="col-lg-6">
              <div className="section-subtitle" style={{ color: "#A37D4C", letterSpacing: "4px" }}>
                Virtual Experience
              </div>
              <h2 className="section-title text-start pancha-title">Experience Pancha Mukha Darisanam</h2>
              <p className="pancha-description">
                Enjoy a breathtaking view of the sacred Arunachala Hill directly from our terrace and immerse yourself in the spiritual atmosphere of Tiruvannamalai.
              </p>

              <button className="btn-premium btn-shine pancha-cta" onClick={openTour}>
                <i className="bi bi-play-circle-fill"></i>
                Take a Virtual Tour
              </button>

              <div className="pancha-feature-row">
                {[
                  { icon: "bi-arrow-repeat", label: "360 Degree Ready" },
                  { icon: "bi-zoom-in", label: "Zoom View" },
                  { icon: "bi-fullscreen", label: "Fullscreen" },
                ].map((item) => (
                  <div key={item.label} className="pancha-feature">
                    <i className={`bi ${item.icon}`}></i>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <button className="pancha-preview" onClick={openTour} aria-label="Open Pancha Mukha Darisanam virtual tour">
                <img src={terraceImg1} alt="Pancha Mukha Darisanam terrace view" loading="lazy" />
                <span className="pancha-preview-overlay">
                  <span className="pancha-play"><i className="bi bi-play-fill"></i></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div
          className="tour-modal"
          ref={modalRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Pancha Mukha Darisanam virtual tour"
        >
          <div className="tour-topbar">
            <div>
              <strong>Pancha Mukha Darisanam</strong>
              <span>{currentSlide + 1} / {sliderImages.length}</span>
            </div>
            <div className="tour-controls">
              <button onClick={() => setZoom((value) => Math.max(value - 0.2, 1))} aria-label="Zoom out">
                <i className="bi bi-zoom-out"></i>
              </button>
              <button onClick={() => setZoom(1)} aria-label="Reset zoom">
                <i className="bi bi-aspect-ratio"></i>
              </button>
              <button onClick={() => setZoom((value) => Math.min(value + 0.2, 2.4))} aria-label="Zoom in">
                <i className="bi bi-zoom-in"></i>
              </button>
              <button onClick={toggleFullscreen} aria-label="Toggle fullscreen">
                <i className={`bi ${isFullscreen ? "bi-fullscreen-exit" : "bi-fullscreen"}`}></i>
              </button>
              <button onClick={closeModal} aria-label="Close virtual tour">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          </div>

          <button className="tour-arrow tour-arrow-left" onClick={prevSlide} aria-label="Previous image">
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className="tour-stage">
            <img
              key={sliderImages[currentSlide]}
              src={sliderImages[currentSlide]}
              alt={`Pancha Mukha Darisanam view ${currentSlide + 1}`}
              style={{ transform: `scale(${zoom})` }}
              draggable="false"
            />
          </div>

          <button className="tour-arrow tour-arrow-right" onClick={nextSlide} aria-label="Next image">
            <i className="bi bi-chevron-right"></i>
          </button>

          <div className="tour-thumbnails" aria-label="Virtual tour thumbnails">
            {sliderImages.map((image, index) => (
              <button
                key={image}
                className={index === currentSlide ? "active" : ""}
                onClick={() => {
                  setCurrentSlide(index);
                  setZoom(1);
                }}
                aria-label={`Show image ${index + 1}`}
              >
                <img src={image} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PanchaMukhaTour;
