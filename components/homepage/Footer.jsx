import { Facebook, Instagram, Linkedin } from "lucide-react";
import "../../styles/components/homepage/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Navigation */}
      <nav className="footer__top-nav">
        <a href="#" className="nav-item">
          Visit
        </a>
        <a href="#" className="nav-item">
          Apply
        </a>
        <a href="#" className="nav-item">
          Contact
        </a>
      </nav>

      {/* Large background text */}
      <div className="footer__background-text">
        <div className="large-text marquee">KINGS ENCOURAGE COURAGE</div>
      </div>

      {/* Partner logos */}
      <div className="footer__partner-logos">
        <img
          src="https://www.kings-taunton.co.uk/wp-content/uploads/2025/05/AGBIS-Logo-White-scaled.png"
          alt="AGBIS"
          className="logo"
        />
        <img
          src="https://www.kings-taunton.co.uk/wp-content/uploads/2025/01/iaps-logo.svg"
          alt="IAPS"
          className="logo"
        />
        <img
          src="https://www.kings-taunton.co.uk/wp-content/uploads/2025/01/bsa-logo.png"
          alt="BSA"
          className="logo"
        />
        <img
          src="https://www.kings-taunton.co.uk/wp-content/uploads/2025/01/hmc-logo.svg"
          alt="HMC"
          className="logo logo-circle"
        />
        <img
          src="https://www.kings-taunton.co.uk/wp-content/uploads/2025/01/the-good-schools-guide-logo.svg"
          alt="The Good Schools Guide"
          className="logo"
        />
      </div>

      {/* Footer navigation and social */}
      <div className="footer__navigation-social">
        {/* Footer links */}
        <nav className="navigation">
          <a href="#">Term Dates</a>
          <a href="#">Working at King's</a>
          <a href="#">Venue Hire</a>
          <a href="#">Cricket Festival</a>
          <a href="#">Digital Device Policy</a>
        </nav>

        {/* Social media icons */}
        <div className="social-icons">
          <div className="social-icon">
            <Facebook />
          </div>
          <div className="social-icon">
            <Instagram />
          </div>
          <div className="social-icon">
            <Linkedin />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="copyright">
          <div>
            <span style={{ color: "white" }}>©</span> King's College Taunton.
            Privacy Policy. Terms & Conditions. Registered Charity No. 1103346
          </div>
          <div>Site by meXhim</div>
        </div>
      </div>
    </footer>
  );
}
