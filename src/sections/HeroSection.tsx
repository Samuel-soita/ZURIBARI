import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  founderCredit?: string;
  description: string;
  ctas: Array<{ label: string; type: string; action: string; target?: string }>;
}

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

const CinematicHeading = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as any,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const lettersContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 1.2 },
    },
  };

  const excellence = "EXCELLENCE".split("");

  return (
    <div key={key} className="cinematic-title-wrap">
      <h1 className="authority-title">
        <span className="gold constant-word">LEADING </span>
        
        <motion.span
          variants={container}
          initial="hidden"
          animate="visible"
          className="word-reveal-group"
        >
          {["General", "Supply", "&", "Procurement"].map((word, index) => (
            <motion.span
              variants={child}
              key={index}
              className="gold reveal-word"
              style={{ display: 'inline-block', marginRight: '15px' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>

        <motion.span
          variants={lettersContainer}
          initial="hidden"
          animate="visible"
          className="letter-reveal-group gold"
          style={{ display: 'block', marginTop: '10px' }}
        >
          {excellence.map((letter, index) => (
            <motion.span
              variants={child}
              key={index}
              style={{ display: 'inline-block' }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </h1>
    </div>
  );
};

const HeroSection: React.FC<HeroProps> = ({ founderCredit, description, ctas }) => {
  return (
    <section className="dark-authority-hero" id="hero">
      <div className="container">
        <div className="authority-grid">
          <div className="authority-text-column">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="authority-badge">
                <ShieldCheck size={16} className="gold" />
                <span>{founderCredit}</span>
              </div>
              
              <CinematicHeading />
              
              <p className="authority-description">{description}</p>
              
              <div className="authority-cta-matrix">
                {ctas.map((cta, index) => (
                  <a 
                    key={index} 
                    href={cta.action.startsWith('http') ? cta.action : `#${cta.action}`}
                    className={`btn-refined ${cta.type === 'secondary' ? 'btn-outline-refined' : ''}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span>{cta.label}</span>
                    <ArrowRight size={18} className="cta-icon" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="authority-capability-column"
          >
            <div className="obsidian-capability-card">
              <div className="card-obsidian-header">
                <span className="profile-tag">Institutional Profile</span>
                <div className="active-glow-container">
                  <div className="gold-pulse" />
                  <span>Verified Capability</span>
                </div>
              </div>
              
              <div className="obsidian-stats">
                <div className="stat-entry">
                  <span className="val-gold">
                    <Counter value={300} suffix="+" />
                  </span>
                  <span className="lab-silver">Institutional Seating</span>
                </div>
                <div className="stat-entry">
                  <span className="val-gold">
                    <Counter value={1000} suffix="+" />
                  </span>
                  <span className="lab-silver">Daily Meal Output</span>
                </div>
                <div className="stat-entry">
                  <span className="val-gold">
                    <Counter value={100} suffix="%" />
                  </span>
                  <span className="lab-silver">Compliance Rating</span>
                </div>
              </div>

              <div className="card-obsidian-footer">
                <div className="gold-separator" />
                <span className="footer-lead">DIRECTOR: JUNE CHUMBE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .dark-authority-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 180px 0 100px;
          background: transparent;
          position: relative;
        }

        .authority-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 120px;
          align-items: center;
        }

        .authority-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.3em;
          color: var(--brand-blush-gold);
          text-transform: uppercase;
          margin-bottom: 3.5rem;
          border-bottom: 1px solid rgba(229, 181, 158, 0.3);
          padding-bottom: 8px;
        }

        .authority-title {
          font-size: clamp(3rem, 6vw, 4.5rem);
          margin-bottom: 3rem;
          max-width: 950px;
          line-height: 1.1;
        }

        .constant-word {
          margin-right: 20px;
          display: inline-block;
        }

        .letter-reveal-group {
          letter-spacing: 0.15em;
        }

        .authority-description {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          color: var(--brand-silver);
          max-width: 650px;
          line-height: 1.7;
          margin-bottom: 5.5rem;
          font-weight: 300;
        }

        .authority-cta-matrix {
          display: flex;
          gap: 24px;
        }

        .btn-outline-refined {
          background: transparent;
          border: 1px solid var(--brand-blush-gold) !important;
          color: var(--brand-blush-gold);
        }

        .btn-outline-refined:hover {
          background: var(--brand-blush-gold);
          color: var(--brand-onyx);
        }

        .cta-icon { transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1); }
        .btn-refined:hover .cta-icon { transform: translateX(10px); }

        .obsidian-capability-card {
          background: var(--brand-onyx);
          padding: 80px;
          border-radius: 4px;
          box-shadow: var(--shadow-executive);
          border: 1px solid rgba(229, 181, 158, 0.15);
          position: relative;
        }

        .card-obsidian-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 80px;
        }

        .profile-tag {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--brand-blush-gold);
          opacity: 0.6;
        }

        .active-glow-container {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #E5B59E;
        }

        .gold-pulse {
          width: 8px;
          height: 8px;
          background: var(--brand-blush-gold);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--brand-blush-gold);
        }

        .obsidian-stats {
          display: grid;
          gap: 50px;
        }

        .stat-entry .val-gold {
          display: block;
          font-family: var(--font-heading);
          font-size: 4rem;
          color: var(--brand-blush-gold);
          margin-bottom: 6px;
        }

        .stat-entry .lab-silver {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--brand-silver);
          opacity: 0.4;
        }

        .card-obsidian-footer {
          margin-top: 80px;
          text-align: center;
        }

        .gold-separator {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(229, 181, 158, 0.2), transparent);
          margin-bottom: 24px;
        }

        .footer-lead {
          font-size: 0.7rem;
          letter-spacing: 0.5em;
          color: var(--brand-blush-gold);
          opacity: 0.3;
          font-weight: 800;
        }

        @media (max-width: 1200px) {
          .authority-grid { grid-template-columns: 1fr; gap: 80px; text-align: center; }
          .authority-badge { margin: 0 auto 3.5rem; }
          .authority-description { margin: 0 auto 5.5rem; }
          .authority-cta-matrix { justify-content: center; }
          .authority-capability-column { max-width: 550px; margin: 0 auto; }
        }

        @media (max-width: 768px) {
          .dark-authority-hero { padding: 120px 0 60px; }
          .authority-title { font-size: 2.8rem; }
          .authority-description { font-size: 1.1rem; }
          .authority-cta-matrix { flex-direction: column; width: 100%; }
          .obsidian-capability-card { padding: 40px 20px; }
          .stat-entry .val-gold { font-size: 3rem; }
          .card-obsidian-header { margin-bottom: 40px; }
          .obsidian-stats { gap: 30px; }
        }
      `}} />
    </section>
  );
};

export default HeroSection;
