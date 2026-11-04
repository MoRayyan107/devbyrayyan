import { useState } from 'react';
import { Arrow } from './portfolio';
import { Brand } from './Brand';
export function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      {' '}
      <header id="top" className="site-header wrap">
        <Brand href="#top" />
        <button
          className="menu-toggle"
          aria-expanded={menu}
          aria-controls="navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? 'Close −' : 'Menu +'}
        </button>
        <nav
          id="navigation"
          className={menu ? 'open' : ''}
          aria-label="Main navigation"
          onClick={() => setMenu(false)}
        >
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#Certificates">Certificates</a>
          <a href="#contact">
            Let’s talk <Arrow />
          </a>
        </nav>
      </header>
    </>
  );
}
