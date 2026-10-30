import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let hideTimeout = null;
    let isCurrentlyVisible = true;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show near top
      if (currentScrollY <= 80) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          hideTimeout = null;
        }
        setVisible(true);
        isCurrentlyVisible = true;
        setScrolled(currentScrollY > 20);
      } else {
        setScrolled(true);

        // Scrolling DOWN
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          // Wait 1.2 seconds before hiding if currently visible
          if (isCurrentlyVisible && !hideTimeout) {
            hideTimeout = setTimeout(() => {
              setVisible(false);
              isCurrentlyVisible = false;
              setIsMobile(false);
              hideTimeout = null;
            }, 100); // 1.2s delay before becoming invisible
          }
        } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
          // Scrolling UP -> show immediately & cancel pending hide timer
          if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
          }
          setVisible(true);
          isCurrentlyVisible = true;
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (hideTimeout) clearTimeout(hideTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!visible ? 'navbar-hidden' : ''}`}>
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
