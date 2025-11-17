import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Hackathons', to: 'competitions' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="hero" smooth={true} duration={500} className="logo">
          <span className="logo-text">
            <span className="logo-name">ZAKIR RAZA</span>
            <span className="logo-tagline">Ideas In Code</span>
          </span>
        </Link>

        <ul className={isMobile ? 'nav-links mobile-active' : 'nav-links'}>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMobile(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle theme">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setIsMobile(!isMobile)}
            aria-label="Toggle menu"
          >
            {isMobile ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
