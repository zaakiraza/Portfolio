import { motion } from 'framer-motion';
import { competitions } from '../data/portfolioData';
import '../styles/Competitions.css';

const Competitions = () => {
  return (
    <section id="competitions" className="competitions section">
      <div className="container">
        <h2 className="section-title">Hackathons &amp; Competitions</h2>
        <p className="section-sub">Selected hackathons, challenges and competition highlights.</p>

        <div className="competitions-grid">
          {competitions.map((c) => (
            <motion.article
              key={c.id}
              className="competition-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <header className="competition-header">
                <h3 className="competition-title">{c.title}</h3>
                <span className="competition-year">{c.year}</span>
              </header>
              <div className="competition-body">
                <p className="competition-role">Role: <strong>{c.role}</strong></p>
                <p className="competition-desc">{c.description}</p>
              </div>
              {c.link ? (
                <footer className="competition-footer">
                  <a href={c.link} target="_blank" rel="noreferrer" className="btn-sm">View Project</a>
                </footer>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
