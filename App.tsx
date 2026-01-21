
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import AnikAssistant from './components/AnikAssistant';
import LoadingScreen from './components/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative min-h-screen selection:bg-blue-500/30">
      <AnimatePresence>
        <Sidebar activeSection={activeSection} />
        
        <main className="lg:pl-20">
          <section id="home" onMouseEnter={() => setActiveSection('home')}>
            <Hero />
          </section>
          
          <section id="about" onMouseEnter={() => setActiveSection('about')}>
            <About />
          </section>
          
          <section id="skills" onMouseEnter={() => setActiveSection('skills')}>
            <Skills />
          </section>
          
          <section id="portfolio" onMouseEnter={() => setActiveSection('portfolio')}>
            <Portfolio />
          </section>
          
          <section id="experience" onMouseEnter={() => setActiveSection('experience')}>
            <Experience />
          </section>
          
          <section id="contact" onMouseEnter={() => setActiveSection('contact')}>
            <Contact />
          </section>

          <footer className="py-12 border-t border-blue-900/30 glass text-center">
            <p className="text-sm font-orbitron text-blue-400/60">
              © 2035 SAHADATUR RAHMAN ANIK. ALL RIGHTS RESERVED.
            </p>
          </footer>
        </main>

        <AnikAssistant />
      </AnimatePresence>
    </div>
  );
};

export default App;
