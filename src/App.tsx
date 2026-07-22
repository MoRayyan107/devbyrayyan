import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default App;