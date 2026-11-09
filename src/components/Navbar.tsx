import { useRef, useState } from 'react';
import { Arrow } from './portfolio';
import { Brand } from './Brand';
export function Navbar() {
  const [menu, setMenu] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <>
      {' '}
      <header
        id="top"
        className="site-header wrap"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && menu) {
            setMenu(false);
            menuButton.current?.focus();
          }
        }}
      >
        <Brand href="#top" />
        <button
          type="button"
          ref={menuButton}
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
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#contact">
            Let’s talk <Arrow />
          </a>
        </nav>
      </header>
    </>
  );
}
