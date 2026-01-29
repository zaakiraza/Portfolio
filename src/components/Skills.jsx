import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaBootstrap, FaDatabase, FaPython, FaAws, FaGithub, FaServer
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiMui, SiMysql, SiScikitlearn } from 'react-icons/si';
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
      database: <FaDatabase />,
      tailwind: <SiTailwindcss />,
      material: <SiMui />,
      python: <FaPython />,
      mysql: <SiMysql />,
      aws: <FaAws />,
      github: <FaGithub />,
      hosting: <FaServer />,
      scikit: <SiScikitlearn />
    };
    return icons[iconName] || <FaDatabase />;
  };

  const stackConfig = {
    'Frontend': { color: '#61dafb', gradient: 'linear-gradient(135deg, #61dafb, #21a1c4)' },
    'Backend': { color: '#68a063', gradient: 'linear-gradient(135deg, #68a063, #3d6b3d)' },
    'Database': { color: '#4db33d', gradient: 'linear-gradient(135deg, #4db33d, #3d8b2f)' },
    'DevOps': { color: '#ff9900', gradient: 'linear-gradient(135deg, #ff9900, #cc7a00)' },
    'ML/AI': { color: '#f7931e', gradient: 'linear-gradient(135deg, #f7931e, #e85d04)' }
  };

  // Group skills by stack
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.stack]) {
      acc[skill.stack] = [];
    }
    acc[skill.stack].push(skill);
    return acc;
  }, {});

  const stackOrder = ['Frontend', 'Backend', 'Database', 'DevOps', 'ML/AI'];

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

        <div className="skills-container">
          {stackOrder.map((stack, stackIndex) => (
            groupedSkills[stack] && (
              <motion.div
                key={stack}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stackIndex * 0.1 }}
                viewport={{ once: true }}
                className="skill-category"
              >
                <div 
                  className="category-header"
                  style={{ background: stackConfig[stack]?.gradient }}
                >
                  <h3>{stack}</h3>
                </div>
                <div className="category-skills">
                  {groupedSkills[stack].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="skill-chip"
                      style={{ '--chip-color': stackConfig[stack]?.color }}
                    >
                      <span className="chip-icon">{getIcon(skill.icon)}</span>
                      <span className="chip-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
