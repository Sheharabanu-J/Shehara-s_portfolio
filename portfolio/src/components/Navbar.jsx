import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import sheharaImg from '../assets/shehara.jpeg';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  // Sticky navbar listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy to track active section
  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const activeLink = navLinks.find(link => link.href === `#${id}`);
          if (activeLink) {
            setActive(activeLink.label);
          }
        }
      });
    }, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0.1
    });

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    // Reset when at the top of the page
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActive('');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl border-b border-[rgba(56,189,248,0.1)] ${
        scrolled
          ? 'py-3 bg-[rgba(5,5,16,0.95)]'
          : 'py-5 bg-[rgba(5,5,16,0.7)] max-md:py-3 max-md:bg-[rgba(5,5,16,0.9)]'
      }`}
    >
      <div className="w-full pl-3 pr-8 md:pl-6 md:pr-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="flex items-center gap-2.5 font-heading font-bold text-xl tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.6)] flex-shrink-0">
            <img src={sheharaImg} alt="Shehara" className="w-full h-full object-cover" />
          </div>
          <span className="gradient-text-blue whitespace-nowrap">Shehara's Portfolio</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-[#38BDF8]' : 'text-slate-300 hover:text-[#38BDF8]'
                }`}
                onClick={() => setActive(link.label)}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-[-6px] left-0 right-0 h-[3px] bg-[#38BDF8] rounded-full"
                    style={{
                      boxShadow: '0 0 12px #38BDF8, 0 0 4px #38BDF8',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <motion.a
            href="#contact"
            className="text-sm py-2 px-5 rounded-lg text-white font-semibold transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #1e3aff 0%, #1e8fff 50%, #818cf8 100%)',
              border: '1px solid rgba(56, 189, 248, 0.45)',
              boxShadow: '0 0 24px rgba(30, 143, 255, 0.4)',
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 32px rgba(30, 143, 255, 0.65)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me ↗
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gold text-2xl z-50"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-[rgba(5,5,16,0.95)] border-b border-[rgba(56, 189, 248, 0.1)] px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link, i) => {
              const isActive = active === link.label;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`text-base py-2 border-b border-[rgba(255,255,255,0.05)] transition-colors duration-300 ${
                    isActive ? 'text-[#38BDF8] font-semibold' : 'text-slate-300'
                  }`}
                  onClick={() => {
                    setActive(link.label);
                    setMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
