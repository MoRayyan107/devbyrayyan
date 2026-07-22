import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // The new scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Stops the URL from changing to #targetId
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    closeMenu(); 
  };

  return (
    <nav className="nav-bar">
      <div className="custom-logo">
        <a href="#header" onClick={(e) => handleScroll(e, 'header')}>
          C:\rayyan&gt;<span className="slash-cursor">|</span>
        </a>
      </div>
      <ul
        className="nav-links"
        id="nav-menu"
        style={{ right: isMenuOpen ? '0' : '-300px' }}
      >
        <li><a href="#header" onClick={(e) => handleScroll(e, 'header')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
        <li><a href="#MyProjects" onClick={(e) => handleScroll(e, 'MyProjects')}>Projects</a></li>
        <li><a href="#Certificates" onClick={(e) => handleScroll(e, 'Certificates')}>Certs</a></li>
        <li><a href="#Contact" onClick={(e) => handleScroll(e, 'Contact')}>Contact</a></li>
        <i className="fas fa-times" onClick={closeMenu}></i>
      </ul>
      <i className="fas fa-bars" onClick={toggleMenu}></i>
    </nav>
  );
};