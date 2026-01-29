import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3 className="about-intro">{personalInfo.about.intro}</h3>
            <p className="about-description">{personalInfo.about.description}</p>

            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href={`https://wa.me/${personalInfo.phone.replace(/\D/g, '')}`}>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaGlobe className="contact-icon" />
                <div>
                  <h4>Website</h4>
                  <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer">
                    {personalInfo.website}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="about-stats"
          >
            <div className="stat-card">
              <h3>2+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-card">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>3+</h3>
              <p>Certifications</p>
            </div>
            <div className="stat-card">
              <h3>5+</h3>
              <p>Competitions Participated</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
