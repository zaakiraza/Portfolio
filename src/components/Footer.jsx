import { FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo-text">
              <span className="footer-logo-name">ZAKIR RAZA</span>
              <span className="footer-logo-tagline">Ideas In Code</span>
            </div>
            <p className="footer-tagline">Building the web, one line at a time.</p>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} {personalInfo.name}. Made with <FaHeart className="heart-icon" /> by Zakir Raza
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
