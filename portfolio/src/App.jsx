import { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixEasterEgg from './components/MatrixEasterEgg';

const EASTER_EGG_CODE = 'visioncrafter';

export default function App() {
  const [matrixActive, setMatrixActive] = useState(false);
  const [typed, setTyped] = useState('');

  // Easter egg keyboard listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.altKey || e.metaKey || !e.key) return;
      setTyped((prev) => {
        const next = (prev + String(e.key).toLowerCase()).slice(-EASTER_EGG_CODE.length);
        if (next === EASTER_EGG_CODE) {
          setMatrixActive(true);
          return '';
        }
        return next;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMatrix = useCallback(() => setMatrixActive(false), []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1C] text-[#E2E8F0]">
      {/* Matrix Easter Egg */}
      <MatrixEasterEgg active={matrixActive} onClose={closeMatrix} />

      {/* Main Portfolio */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Timeline />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
