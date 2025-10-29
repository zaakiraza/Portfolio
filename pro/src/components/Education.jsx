import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-badge">
                  {edu.current && <span className="current-badge">Current</span>}
                </div>
                <span className="timeline-year">{edu.year}</span>
                <h3 className="timeline-degree">{edu.degree}</h3>
                <h4 className="timeline-institution">{edu.institution}</h4>
                <p className="timeline-location">{edu.location}</p>
                <p className="timeline-description">{edu.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
