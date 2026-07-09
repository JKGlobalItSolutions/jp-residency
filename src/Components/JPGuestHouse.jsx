import "bootstrap-icons/font/bootstrap-icons.css";
import guestRoomImg from "../assets/guest/img1.png";
import livingSpaceImg from "../assets/guest/img2.png";
import exteriorImg from "../assets/guest/img3.png";

const bookingUrl =
  "https://bookingengine.stayflexi.com/?hotel_id=39026";

const features = [
  { icon: "bi-arrows-fullscreen", label: "Spacious Rooms" },
  { icon: "bi-people-fill", label: "Family-Friendly Stay" },
  { icon: "bi-person-hearts", label: "Group Accommodation" },
  { icon: "bi-house-heart-fill", label: "Comfortable Living Space" },
  { icon: "bi-flower2", label: "Peaceful Environment" },
  { icon: "bi-signpost-split-fill", label: "Easy Access to Major Attractions" },
];

const JPGuestHouse = () => {
  return (
    <section id="guest-house" className="guest-house-section section-premium">
      <div className="container-xl">
        <div className="guest-house-shell">
          <div className="guest-house-content" data-aos="fade-right">
            <div className="section-subtitle">JP Residency Hospitality</div>
            <h2 className="section-title text-start guest-house-title">JP Guest House</h2>
            <p className="guest-house-lead">
              JP Guest House offers spacious and comfortable accommodation for families, groups,
              and long-stay guests. Designed with privacy, convenience, and a homely atmosphere in
              mind, it provides an ideal stay experience in Tiruvannamalai.
            </p>

            <div className="guest-house-features">
              {features.map((feature) => (
                <div className="guest-house-feature" key={feature.label}>
                  <i className={`bi ${feature.icon}`}></i>
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>

            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="guest-house-cta btn-shine">
              <i className="bi bi-whatsapp"></i>
              Book Now
            </a>
          </div>

          <div className="guest-house-gallery" data-aos="fade-left">
            <div className="guest-house-image guest-house-image-main">
              <img src={guestRoomImg} alt="Spacious JP Guest House family room" loading="lazy" />
              <span>Family & Group Stays</span>
            </div>
            <div className="guest-house-image">
              <img src={livingSpaceImg} alt="Comfortable JP Guest House living space" loading="lazy" />
            </div>
            <div className="guest-house-image">
              <img src={exteriorImg} alt="JP Residency exterior in Tiruvannamalai" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JPGuestHouse;
