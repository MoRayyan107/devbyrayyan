import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Certificates } from './components/Certificates';
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
        <a className="wordmark" href="#">
          rayyan<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Mohammad Rayyan Adhoni</p>
        <span>GLASGOW, SCOTLAND ↗</span>
      </footer>
    </>
  );
}
