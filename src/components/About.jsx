import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import '../styles/About.css';

const StatCounter = ({ target, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 1400;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Cubic ease-out deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref} className="stat-value">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    { target: 2, suffix: '+', label: 'Years Experience' },
    { target: 20, suffix: '+', label: 'Projects Completed' },
    { target: 9, suffix: '+', label: 'Certifications' },
    { target: 5, suffix: '+', label: 'Hackathons' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        {/* Stats row with on-scroll count animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="about-stats"
        >
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <StatCounter target={s.target} suffix={s.suffix} />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="about-content">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <p className="about-intro">{personalInfo.about.intro}</p>
            <p className="about-description">{personalInfo.about.description}</p>
          </motion.div>

          {/* Right: contact inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <span className="contact-label">Phone</span>
                <a href={`https://wa.me/${personalInfo.phone.replace(/\D/g, '')}`}>
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <span className="contact-label">Email</span>
                <a href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FaGlobe className="contact-icon" />
              <div>
                <span className="contact-label">Website</span>
                <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">
                  {personalInfo.website}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
