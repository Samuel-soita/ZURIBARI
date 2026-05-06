import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowUpRight } from 'lucide-react';

interface FounderProps {
  name: string;
  role: string;
  summary: string;
}

const AboutFounder: React.FC<FounderProps> = ({ name, role, summary }) => {
  return (
    <section className="dark-authority-executive" id="founder">
      <div className="container">
        <div className="authority-executive-grid">


          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="authority-narrative"
          >
            <div className="authority-narrative-header">
              <Quote size={54} className="gold-icon-fade" />
              <div className="reveal-mask">
                <span className="authority-meta-role blush-gold-gradient" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '10px' }}>{role}</span>
                <h2 className="authority-editorial-heading reveal-text" style={{ marginBottom: '1rem' }}>{name}</h2>
                <h3 className="sub-heading-gold" style={{ fontSize: '1.5rem', color: 'var(--brand-blush-gold)', marginBottom: '3rem', fontFamily: 'var(--font-heading)' }}>Directing Institutional Standard</h3>
              </div>
            </div>
            
            <p className="authority-summary-text">{summary}</p>

            <div className="authority-pillar-matrix">
              <div className="authority-pillar-card">
                <div className="pillar-index-box">
                  <span className="p-num-gold">01</span>
                </div>
                <div className="pillar-text">
                  <strong>Strategic Oversight</strong>
                  <p>June personally architects every procurement workflow to ensure institutional success.</p>
                </div>
              </div>
              
              <div className="authority-pillar-card">
                <div className="pillar-index-box">
                  <span className="p-num-gold">02</span>
                </div>
                <div className="pillar-text">
                  <strong>Quality Governance</strong>
                  <p>Operations mapped to the highest standards of government and corporate safety compliance.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-refined" style={{ textDecoration: 'none' }}>
              <span>View Executive Credentials</span>
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .dark-authority-executive {
          padding: var(--section-padding) 0;
          background: transparent;
        }

        .authority-executive-grid {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .authority-narrative {
          max-width: 900px;
          text-align: center;
        }

        .authority-narrative-header {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .authority-pillar-matrix {
          justify-items: center;
        }

        .authority-summary-text {
          margin-left: auto;
          margin-right: auto;
        }

        .authority-portrait-frame {
          position: relative;
          height: clamp(550px, 65vh, 800px);
          background: var(--brand-onyx);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow-executive);
          border: 1px solid rgba(229, 181, 158, 0.15);
        }

        .authority-initials {
          position: absolute;
          top: 60px;
          right: 60px;
          font-family: var(--font-heading);
          font-size: 11rem;
          color: rgba(229, 181, 158, 0.04);
          line-height: 0.7;
          pointer-events: none;
        }

        .authority-meta-portrait {
          position: absolute;
          bottom: 80px;
          left: 80px;
          z-index: 5;
        }

        .authority-meta-role {
          display: block;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .authority-meta-name {
          font-size: clamp(3rem, 6vw, 4.5rem);
          color: var(--brand-blush-gold);
        }

        .gold-icon-fade { color: var(--brand-blush-gold); opacity: 0.5; margin-bottom: 3rem; }

        .authority-editorial-heading {
          font-size: clamp(3rem, 6vw, 4.5rem);
          margin-bottom: 4rem;
        }

        .authority-summary-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--brand-silver);
          margin-bottom: 6rem;
          font-weight: 300;
          max-width: 650px;
        }

        .authority-pillar-matrix {
          display: grid;
          gap: 40px;
          margin-bottom: 7rem;
        }

        .authority-pillar-card {
          display: flex;
          gap: 30px;
          background: var(--brand-onyx);
          padding: 45px;
          border-radius: 4px;
          border: 1px solid rgba(229, 181, 158, 0.1);
          transition: var(--transition-editorial);
        }

        .authority-pillar-card:hover {
          transform: translateY(-8px);
          border-color: var(--brand-blush-gold);
          box-shadow: var(--shadow-executive);
        }

        .p-num-gold {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: var(--brand-blush-gold);
        }

        .pillar-text strong {
          display: block;
          font-size: 1.15rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 12px;
          color: var(--brand-blush-gold);
        }

        .pillar-text p {
          font-size: 1rem;
          color: var(--brand-silver);
          line-height: 1.7;
          opacity: 0.7;
        }

        @media (max-width: 1100px) {
          .authority-executive-grid { grid-template-columns: 1fr; gap: 60px; }
        }

        @media (max-width: 768px) {
          .authority-editorial-heading { font-size: 2.2rem; margin-bottom: 2.5rem; }
          .authority-summary-text { font-size: 1.1rem; margin-bottom: 4rem; }
          .authority-pillar-card { padding: 30px 20px; gap: 20px; }
          .p-num-gold { font-size: 1.2rem; }
          .pillar-text strong { font-size: 1rem; }
          .pillar-text p { font-size: 0.9rem; }
        }
      `}} />
    </section>
  );
};

export default AboutFounder;
