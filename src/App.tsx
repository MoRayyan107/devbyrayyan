import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Certificates } from './components/Certificates';
import { Brand } from './components/Brand';
import { Arrow } from './components/portfolio';
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Certificates />
        <Contact />
      </main>
      <footer className="wrap">
        <Brand href="#top" />
        <p>© {new Date().getFullYear()} Mohammad Rayyan Adhoni</p>
        <span>
          GLASGOW, SCOTLAND <Arrow />
        </span>
        <p className="ai-note">This portfolio was built with AI assistance.</p>
      </footer>
    </>
  );
}
