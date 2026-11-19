import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaBootstrap, FaDatabase, FaPython, FaAws, FaGithub, FaServer,
  FaLock, FaRobot, FaKey, FaBrain, FaPenFancy, FaNetworkWired, FaGlobe
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiTailwindcss, SiMui, SiMysql, SiScikitlearn,
  SiRedis, SiRedux, SiGithubactions, SiFastapi, SiSequelize, SiNginx,
  SiPm2, SiVercel, SiTypescript, SiSass, SiGraphql, SiDocker, SiSqlite,
  SiCplusplus, SiFirebase, SiOpenai, SiClaude, SiGooglegemini, SiJest, SiVitest,
  SiPostgresql, SiNetlify, SiRailway, SiVite, SiGoogleanalytics, SiGooglesearchconsole
} from 'react-icons/si';
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
      scikit: <SiScikitlearn />,
      redux: <SiRedux />,
      redis: <SiRedis />,
      cache: <FaServer />,
      storage: <FaDatabase />,
      microservices: <FaServer />,
      cicd: <SiGithubactions />,
      rag: <FaPython />,
      fastapi: <SiFastapi />,
      api: <FaNetworkWired />,
      auth: <FaLock />,
      llm: <FaRobot />,
      vectordb: <SiMongodb />,
      schema: <FaDatabase />,
      indexing: <FaDatabase />,
      sequelize: <SiSequelize />,
      vercel: <SiVercel />,
      nginx: <SiNginx />,
      pm2: <SiPm2 />,
      secrets: <FaKey />,
      embeddings: <FaBrain />,
      prompt: <FaPenFancy />,
      typescript: <SiTypescript />,
      scss: <SiSass />,
      graphql: <SiGraphql />,
      docker: <SiDocker />,
      sqlite: <SiSqlite />,
      agenticai: <FaRobot />,
      cpp: <SiCplusplus />,
      oop: <FaBrain />,
      dsa: <FaNetworkWired />,
      vite: <SiVite />,
      firebase: <SiFirebase />,
      postgresql: <SiPostgresql />,
      openai: <SiOpenai />,
      claude: <SiClaude />,
      gemini: <SiGooglegemini />,
      mcp: <FaNetworkWired />,
      jest: <SiJest />,
      vitest: <SiVitest />,
      seo: <FaGlobe />,
      searchconsole: <SiGooglesearchconsole />,
      analytics: <SiGoogleanalytics />,
      railway: <SiRailway />,
      netlify: <SiNetlify />
    };
    return icons[iconName] || <FaDatabase />;
  };

  const accent = { color: 'var(--primary-color)', gradient: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))' };
  const stackConfig = new Proxy({}, { get: () => accent });

  // Group skills by stack
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.stack]) {
      acc[skill.stack] = [];
    }
    acc[skill.stack].push(skill);
    return acc;
  }, {});

  const stackOrder = ['Frontend', 'Backend', 'Database', 'AI & LLMs', 'Testing & SEO', 'DevOps', 'Programming'];

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
                transition={{ duration: 0.5, delay: Math.min(stackIndex * 0.06, 0.2) }}
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
                      transition={{ duration: 0.3, delay: Math.min(index * 0.025, 0.2) }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3 }}
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
