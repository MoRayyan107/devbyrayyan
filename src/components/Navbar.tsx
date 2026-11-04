import { useState } from 'react';
import { Arrow } from './portfolio';
import { email } from './portfolioData';
export function Navbar() { const [menu, setMenu] = useState(false);
return (<>    <header className="site-header wrap"><a className="wordmark" href="#">rayyan<span>.</span></a><button className="menu-toggle" aria-expanded={menu} aria-controls="navigation" onClick={() => setMenu(!menu)}>{menu ? 'Close −' : 'Menu +'}</button><nav id="navigation" className={menu ? 'open' : ''} aria-label="Main navigation" onClick={() => setMenu(false)}><a href="#work">Selected work</a><a href="#about">About</a><a href={email}>Let’s talk <Arrow /></a></nav></header>
</>);
}
