import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaFileDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import '../styles/Footer.css';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-logo-name">ZAKIR RAZA</span>
            <p className="footer-tagline">
              Full Stack &amp; Agentic AI Developer. I solve problems first — code is how I bring solutions to life.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
              <li>
                <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer-connect">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-socials">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                <FaFileDownload />
              </a>
            </div>
            <p className="footer-location">{personalInfo.location}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {personalInfo.name}. Built with React &amp; Vite.
          </p>
          <button type="button" className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
