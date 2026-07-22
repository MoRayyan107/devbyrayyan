import React from 'react';

export const Hero: React.FC = () => {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="header">
      <div className="hero">
        <div className="hero-noise"></div>
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="header-text">
          <div className="hero-tag">
            <span className="tag-dot"></span>
            Backend Software Engineer
          </div>
          <h1>Mohammad<br /><em>Rayyan</em> Adhoni</h1>
          <p className="hero-sub">
            Building scalable backend systems with <strong>Java</strong> &amp; <strong>Spring Boot</strong>.<br />
            MEng Computer Science · University of Strathclyde
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#MyProjects" onClick={(e) => handleScroll(e, 'MyProjects')}>
              View Projects
            </a>
            <a className="btn btn-ghost" href="#Contact" onClick={(e) => handleScroll(e, 'Contact')}>
              Let's Talk
            </a>
          </div>
          <div className="hero-chips">
            <span className="chip">Java</span>
            <span className="chip">Spring Boot</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">Docker</span>
            <span className="chip">Azure</span>
          </div>
        </div>
      </div>
    </div>
  );
};