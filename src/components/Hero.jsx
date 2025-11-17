import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import "../styles/Hero.css";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "UI/UX Enthusiast",
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
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Zakir Raza</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Passionate about creating stunning web experiences and turning ideas
            into reality.
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
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image"
        >
          <div className="image-wrapper">
            <div className="animated-border"></div>
            <div className="hero-avatar">
              <span className="avatar-initials">ZR</span>
              <div className="avatar-decoration"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
