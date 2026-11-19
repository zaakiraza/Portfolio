import { useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Competitions from './components/Competitions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) return JSON.parse(saved);
    return !window.matchMedia('(prefers-color-scheme: light)').matches;
  });

  useEffect(() => {
    AOS.init({
      duration: 600,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      once: true,
      offset: 100
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="app">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Competitions />
        <Contact />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
}

export default App;
