import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaNpm } from "react-icons/fa";
import { projects } from "../data/portfolioData";
import "../styles/Projects.css";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  // Extract unique technologies/languages from all projects
  const filters = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => {
        // Normalize tech names for filtering
        const normalizedTech = tech.toLowerCase();
        if (normalizedTech.includes("react") || normalizedTech.includes("reactjs")) {
          techSet.add("React");
        } else if (normalizedTech.includes("mern")) {
          techSet.add("MERN Stack");
        } else if (normalizedTech.includes("node")) {
          techSet.add("Node.js");
        } else if (normalizedTech.includes("javascript") || normalizedTech === "js") {
          techSet.add("JavaScript");
        } else if (normalizedTech.includes("html")) {
          techSet.add("HTML/CSS");
        } else if (normalizedTech.includes("python") || normalizedTech.includes("fastapi")) {
          techSet.add("Python");
        } else if (normalizedTech.includes("api")) {
          techSet.add("API");
        }
      });
    });
    return ["All", ...Array.from(techSet).sort()];
  }, []);

  // Filter projects based on selected filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    
    return projects.filter(project => {
      return project.technologies.some(tech => {
        const normalizedTech = tech.toLowerCase();
        const filter = activeFilter.toLowerCase();
        
        if (filter === "react") {
          return normalizedTech.includes("react");
        } else if (filter === "mern stack") {
          return normalizedTech.includes("mern");
        } else if (filter === "node.js") {
          return normalizedTech.includes("node");
        } else if (filter === "javascript") {
          return normalizedTech.includes("javascript") || normalizedTech === "js";
        } else if (filter === "html/css") {
          return normalizedTech.includes("html") || normalizedTech.includes("css");
        } else if (filter === "python") {
          return normalizedTech.includes("python") || normalizedTech.includes("fastapi");
        } else if (filter === "api") {
          return normalizedTech.includes("api") && !normalizedTech.includes("fastapi");
        }
        return normalizedTech.includes(filter);
      });
    });
  }, [activeFilter]);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Here are some of my recent works and contributions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="projects-filter"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter(filter);
                setShowAll(false);
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              {project.isPackage ? (
                <div className="project-package">
                  <FaNpm className="package-icon" />
                  <h3>{project.title}</h3>
                </div>
              ) : (
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> View Project
                    </a>
                  </div>
                </div>
              )}

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="projects-actions"
          >
            <button
              className="btn btn-primary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
