import React, { useEffect, useState } from 'react';
import DynamicRenderer from './components/DynamicRenderer';
import FloatingEcosystem from './components/FloatingEcosystem';
import Footer from './components/Footer';
import { Menu, X } from 'lucide-react';
import { motion, useSpring, useMotionValue, useScroll } from 'framer-motion';
import logo from './assets/logo.png';

interface Particle {
  id: number;
  initialX: number;
  initialY: number;
  opacity: number;
  duration: number;
  targetX: number;
  targetY: number;
}

const InstitutionalParticles = () => {
  const [particles] = useState<Particle[]>(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      initialX: Math.random() * 1000,
      initialY: Math.random() * 800,
      opacity: Math.random() * 0.5,
      duration: 20 + Math.random() * 40,
      targetX: Math.random() * 1000,
      targetY: Math.random() * 800,
    }))
  );

  return (
    <div className="institutional-particles-overlay">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle-gold"
          initial={{ x: `${p.initialX / 10}%`, y: `${p.initialY / 10}%`, opacity: p.opacity }}
          animate={{
            x: [null, `${p.targetX / 10}%`],
            y: [null, `${p.targetY / 10}%`],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Architectural Laser Cursor Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-shell">
      <InstitutionalParticles />

      {/* Architectural Laser Cursor */}
      <motion.div 
        className="laser-cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />

      {/* Dynamic SEO Title Update */}
      <title>Zuribari Enterprises | General Supply Excellence</title>

      {/* Navigation Slot */}
      <nav className={`refined-nav ${isScrolled ? 'scrolled' : ''}`}>
        <motion.div className="scroll-progress-line" style={{ scaleX }} />
        
        <div className="container nav-flex-layout">
          <div className="refined-brand-zone">
            <div className="brand-logo-container">
              <img src={logo} alt="Zuribari Logo" className="nav-logo-asset" />
            </div>
            <div className="refined-brand-stack">
              <span className="brand-primary-text">ZURIBARI ENTERPRISES</span>
              <span className="brand-leadership-tag">GENERAL SUPPLY SOLUTIONS</span>
            </div>
          </div>
          
          <div className={`nav-center-zone ${mobileMenu ? 'active' : ''}`}>
            <ul className="refined-nav-links">
              <li><a href="#hero" onClick={() => setMobileMenu(false)}>THE PROFILE</a></li>
              <li><a href="#solutions" onClick={() => setMobileMenu(false)}>SUPPLIES</a></li>
              <li><a href="#reach" onClick={() => setMobileMenu(false)}>REACH</a></li>
              <li><a href="#stories" onClick={() => setMobileMenu(false)}>PARTNERSHIPS</a></li>
              <li><a href="#contact" onClick={() => setMobileMenu(false)}>INQUIRY</a></li>
            </ul>
          </div>

          <div className="refined-nav-actions">
            <button className="refined-mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <DynamicRenderer />
      
      <Footer />
      
      <FloatingEcosystem />

      <style dangerouslySetInnerHTML={{ __html: `
        .app-shell {
          position: relative;
          cursor: none;
          overflow-x: hidden;
        }

        .institutional-particles-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle-gold {
          position: absolute;
          width: 2px;
          height: 2px;
          background: var(--brand-blush-gold);
          border-radius: 50%;
          filter: blur(1px);
        }

        .laser-cursor {
          position: fixed;
          top: -10px;
          left: -10px;
          width: 20px;
          height: 20px;
          background: transparent;
          border: 1px solid var(--brand-blush-gold);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .laser-cursor::after {
          content: '';
          width: 4px;
          height: 4px;
          background: var(--brand-blush-gold);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--brand-blush-gold);
        }

        .refined-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 3.5rem 0;
          z-index: 1000;
          transition: var(--transition-editorial);
        }

        .refined-nav.scrolled {
          padding: 1.5rem 0;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(229, 181, 158, 0.2);
        }

        .scroll-progress-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--brand-blush-gold);
          transform-origin: 0%;
          z-index: 1001;
          box-shadow: 0 0 15px var(--brand-blush-gold);
        }

        .nav-flex-layout {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .refined-brand-zone {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .brand-logo-container {
          width: 90px;
          height: 90px;
          background: #fff;
          border-radius: 8px;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(229, 181, 158, 0.2);
        }

        .nav-logo-asset {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .refined-brand-stack {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .brand-primary-text {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          letter-spacing: 0.1em;
          color: var(--brand-blush-gold);
        }

        .brand-leadership-tag {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.35em;
          color: var(--brand-silver);
          text-transform: uppercase;
        }

        .refined-nav-links {
          display: flex;
          gap: 4rem;
          list-style: none;
        }

        .refined-nav-links a {
          text-decoration: none;
          color: var(--brand-silver);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-weight: 700;
          transition: var(--transition-editorial);
          opacity: 0.7;
        }

        .refined-nav-links a:hover {
          opacity: 1;
          color: var(--brand-blush-gold);
        }

        .refined-mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--brand-blush-gold);
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .app-shell { cursor: auto; }
          .laser-cursor { display: none; }
          
          .nav-center-zone {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: var(--brand-bg);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: var(--transition-editorial);
          }

          .nav-center-zone.active { right: 0; }

          .refined-nav-links {
            flex-direction: column;
            align-items: center;
            gap: 3.5rem;
          }

          .refined-nav-links a { font-size: 1.4rem; }

          .refined-mobile-toggle {
            display: block;
            z-index: 1001;
          }
        }
      `}} />
    </div>
  );
};

export default App;
