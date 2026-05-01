import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award } from 'lucide-react';

interface AboutProps {
  title: string;
  content: string;
}

const AboutBrand: React.FC<AboutProps> = ({ title, content }) => {
  return (
    <section className="about-brand-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <div className="brand-accent-line" />
            <h2 className="text-gradient">{title}</h2>
            <p className="large-p">{content}</p>
            
            <div className="location-badge">
              <MapPin className="gold-icon" size={20} />
              <span>Strategically located in <strong>Ruiru, Kenya</strong></span>
            </div>
          </motion.div>

          <div className="capability-highlights">
            <div className="h-item">
              <Award className="gold-icon" size={32} />
              <h3>Unwavering Consistency</h3>
              <p>Reliable service delivery patterns for government-scale projects.</p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-brand-section {
          padding: var(--section-padding) 0;
          background: var(--noir);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 6rem;
          align-items: center;
        }
        .brand-accent-line {
          width: 60px;
          height: 4px;
          background: var(--brand-gold-500);
          margin-bottom: 2rem;
        }
        .about-text h2 {
          font-size: 3.5rem;
          margin-bottom: 2rem;
        }
        .large-p {
          font-size: 1.4rem;
          color: var(--silver);
          line-height: 1.6;
          font-weight: 300;
          margin-bottom: 3rem;
        }
        .location-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          width: fit-content;
        }
        .location-badge strong { color: var(--snow); }
        .h-item {
          padding: 3rem;
          background: var(--brand-emerald-950);
          border: 1px solid var(--glass-border);
          text-align: center;
        }
        .h-item h3 { margin: 1.5rem 0 1rem; font-size: 1.25rem; }
        .h-item p { color: var(--silver); font-size: 0.9rem; }
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr; gap: 4rem; }
        }
      `}} />
    </section>
  );
};

export default AboutBrand;
