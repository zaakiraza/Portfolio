import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import "../styles/Hero.css";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [
    "Full Stack Developer",
    "Agentic AI Engineer",
    "AI Solutions Builder",
    "Problem Solver",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, toRotate]);

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-text"
        >
          <span className="hero-greeting">Hello, world! 👋</span>
          <h1 className="hero-title">
            I'm <span className="gradient-text">Zakir Raza</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            I build full-stack web apps and AI-powered systems — from React UIs to Agentic AI backends.
          </p>

          <div className="hero-buttons">
            <a
              href="/Portfolio/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaDownload /> Download Resume
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects <FaArrowRight />
            </a>
          </div>

          <div className="hero-socials">
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-image"
        >
          <div className="image-wrapper">
            <div className="hero-avatar">
              <img
                src="/Portfolio/assets/images/profile.webp"
                alt="Zakir Raza"
                className="profile-photo"
              />
            </div>
            <div className="image-ring"></div>
            <div className="image-glow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
