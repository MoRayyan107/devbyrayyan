import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div id="Contact" className="fade-in-section is-visible">
      <div className="container">
        <h1 className="sub-title">Get In Touch</h1>
        <p className="contact-sub">Open to backend engineering roles, internships, and collaborations.</p>
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> rayyan.adhoni@outlook.com</p>
          <p><i className="fas fa-map-marker-alt"></i> Glasgow, Scotland</p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/mohammad-rayyan-adhoni" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin linkedIn"></i>
          </a>
          <a href="https://github.com/MoRayyan107" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Mohammad Rayyan Adhoni. All rights reserved.</p>
      </div>
    </div>
  );
};