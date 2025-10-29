import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { experience } from '../data/portfolioData';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="experience-item"
            >
              <div className="experience-dot"></div>
              <div className="experience-line"></div>
              
              <div className="experience-content">
                {exp.current && <span className="current-badge">Current</span>}
                <div className="experience-header">
                  <div>
                    <h3 className="experience-position">{exp.position}</h3>
                    <h4 className="experience-company">
                      <FaBriefcase /> {exp.company}
                    </h4>
                  </div>
                  <span className="experience-year">{exp.year}</span>
                </div>
                
                <p className="experience-location">
                  <FaMapMarkerAlt /> {exp.location}
                </p>
                <p className="experience-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
