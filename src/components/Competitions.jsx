import React from 'react';
import { competitions } from '../data/portfolioData';
import '../styles/Competitions.css';

const Competitions = () => {
  return (
    <section id="competitions" className="competitions section">
      <div className="container">
        <h2 className="section-title">Hackathons & Competitions</h2>
        <p className="section-sub">Selected hackathons, challenges and competition highlights.</p>

        <div className="competitions-grid">
          {competitions.map((c) => (
            <article key={c.id} className="competition-card" data-aos="fade-up">
              <header className="competition-header">
                <h3 className="competition-title">{c.title}</h3>
                <span className="competition-year">{c.year}</span>
              </header>
              <div className="competition-body">
                <p className="competition-role">Role: <strong>{c.role}</strong></p>
                <p className="competition-award">Award: <strong>{c.award}</strong></p>
                <p className="competition-desc">{c.description}</p>
              </div>
              {c.link ? (
                <footer className="competition-footer">
                  <a href={c.link} target="_blank" rel="noreferrer" className="btn-sm">View</a>
                </footer>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
