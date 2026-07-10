import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import gallery9 from "../assets/gallery/gellary_img9.png";
import gallery10 from "../assets/gallery/gellary_img10.png";
import gallery11 from "../assets/gallery/gellary_img11.png";
import gallery12 from "../assets/gallery/gellary_img12.png";
import gallery13 from "../assets/gallery/gellary_img13.png";
import gallery14 from "../assets/gallery/gellary_img14.png";
import gallery15 from "../assets/gallery/gellary_img15.png";
import gallery16 from "../assets/gallery/gellary_img16.png";
import gallery17 from "../assets/gallery/gellary_img17.png";
import gallery18 from "../assets/gallery/gellary_img18.png";
import gallery19 from "../assets/gallery/gellary_img19.png";
import gallery20 from "../assets/gallery/gellary_img20.png";
import gallery21 from "../assets/gallery/gellary_img21.png";
import gallery22 from "../assets/gallery/gellary_img22.png";
import gallery23 from "../assets/gallery/gellary_img23.png";
import gallery24 from "../assets/gallery/gellary_img24.png";
import gallery25 from "../assets/gallery/gellary_img25.png";
import gallery26 from "../assets/gallery/gellary_img26.png";
import gallery27 from "../assets/gallery/gellary_img27.png";

export const galleryImages = [
  { src: gallery9, size: "gallery-h-xl" },
  { src: gallery10, size: "gallery-h-lg" },
  { src: gallery11, size: "gallery-h-md" },
  { src: gallery12, size: "gallery-h-lg" },
  { src: gallery13, size: "gallery-h-md" },
  { src: gallery14, size: "gallery-h-xl" },
  { src: gallery15, size: "gallery-h-md" },
  { src: gallery16, size: "gallery-h-lg" },
  { src: gallery17, size: "gallery-h-sm" },
  { src: gallery18, size: "gallery-h-md" },
  { src: gallery19, size: "gallery-h-md" },
  { src: gallery20, size: "gallery-h-md" },
  { src: gallery21, size: "gallery-h-md" },
  { src: gallery22, size: "gallery-h-md" },
  { src: gallery23, size: "gallery-h-md" },
  { src: gallery24, size: "gallery-h-md" },
  { src: gallery25, size: "gallery-h-md" },
  { src: gallery26, size: "gallery-h-md" },
  { src: gallery27, size: "gallery-h-md" },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const openLightbox = (index) => {
    setCurrentImg(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="section-premium" style={{ background: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <div className="section-subtitle">Our Photo Gallery</div>
          <h2 className="section-title">Visual Tour</h2>
          <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem" }}>
            Take a visual tour of JP Residency and experience the beauty of our hotel
          </p>
          <div className="premium-divider" />
        </div>

        <div className="row g-3">
          {galleryImages.map((item, i) => (
            <div
              key={i}
              className="col-6 col-md-4 col-lg-4"
              onClick={() => openLightbox(i)}
            >
              <div
                className="gallery-premium-item"
                style={{ height: item.size === "gallery-h-xl" ? "340px" : item.size === "gallery-h-lg" ? "280px" : item.size === "gallery-h-md" ? "240px" : "200px" }}
              >
                <img src={item.src} alt={`JP Residency Gallery ${i + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <i className="bi bi-arrows-angle-expand"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="bi bi-x-lg"></i>
            </button>
            <button className="lightbox-prev" onClick={prevImage}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <img src={galleryImages[currentImg].src} alt={`Gallery ${currentImg + 1}`} />
            <button className="lightbox-next" onClick={nextImage}>
              <i className="bi bi-chevron-right"></i>
            </button>
            <div className="text-center mt-3">
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>
                {currentImg + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
