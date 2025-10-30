import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaBootstrap, FaDatabase 
} from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { skills } from '../data/portfolioData';
import '../styles/Skills.css';

const Skills = () => {
  const getIcon = (iconName) => {
    const icons = {
      html5: <FaHtml5 />,
      css3: <FaCss3Alt />,
      js: <FaJs />,
      react: <FaReact />,
      nodejs: <FaNodeJs />,
      express: <SiExpress />,
      mongodb: <SiMongodb />,
      git: <FaGitAlt />,
      bootstrap: <FaBootstrap />,
      database: <FaDatabase />
    };
    return icons[iconName] || <FaDatabase />;
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="skill-card"
            >
              <div className="skill-icon">{getIcon(skill.icon)}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-progress-wrapper">
                <div className="skill-progress">
                  <motion.div 
                    className="skill-progress-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
