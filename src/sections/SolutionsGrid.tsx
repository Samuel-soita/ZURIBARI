import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import * as Icons from 'lucide-react';
import pageConfig from '../config/page-config.json';
import ScrollReveal from '../components/ScrollReveal';
import Magnetic from '../components/Magnetic';

interface Solution {
  id: string;
  icon?: string;
  title: string;
  desc: string;
}

interface SolutionsGridProps {
  title?: string;
  subtitle?: string;
  solutions?: Solution[];
}

const SolutionsGrid: React.FC<SolutionsGridProps> = ({ title, subtitle, solutions }) => {
  const activeSolutions = solutions || (pageConfig.services as any[]);
  const activeTitle = title || "Supply Portfolio";
  const activeSubtitle = subtitle || "Operational Essentials";
  
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    container: containerRef,
  });

  return (
    <section className="dark-authority-matrix" id="solutions">
      <div className="container">
        <div className="authority-matrix-header">
          <div className="authority-tag-group">
            <div className="gold-accent-line" />
            <span>{activeSubtitle}</span>
          </div>
          <ScrollReveal>
            <h2 className="authority-matrix-title">{activeTitle}</h2>
          </ScrollReveal>
          <p className="authority-matrix-desc">Zuribari Enterprises delivers high-capacity supply infrastructure across ICT, Hospitality, and Industrial sectors.</p>
        </div>

        <div 
          ref={containerRef}
          className="authority-matrix-grid perspective-container"
        >
          {activeSolutions?.map((item, index) => {
            const IconComponent = (Icons as any)[item.icon || 'ShieldCheck'] || Icons.Package;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="authority-matrix-card preserve-3d depth-card"
              >
                <div className="glint-overlay" />
                <div className="matrix-card-top">
                  <span className="matrix-index">/ 0{index + 1}</span>
                  <div className="matrix-icon-box">
                    <IconComponent size={28} strokeWidth={1} className="gold-icon" />
                  </div>
                </div>
                
                <h3 className="matrix-card-title">{item.title}</h3>
                <p className="matrix-card-desc">{item.desc}</p>
                
                <Magnetic strength={0.2}>
                  <a href="#contact" className="matrix-card-action" style={{ textDecoration: 'none' }}>
                    <span>Procurement Specs</span>
                    <Icons.ArrowRight size={16} />
                  </a>
                </Magnetic>
                
                <div className="matrix-card-glow" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .dark-authority-matrix {
          padding: var(--section-padding) 0;
          background: transparent;
        }

        .authority-matrix-header {
          margin-bottom: 100px;
          max-width: 850px;
        }

        .authority-tag-group {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 2.5rem;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.4em;
          color: var(--brand-blush-gold);
          text-transform: uppercase;
        }

        .gold-accent-line {
          width: 50px;
          height: 1px;
          background: var(--brand-blush-gold);
        }

        .authority-matrix-title {
          font-size: clamp(3rem, 6vw, 4.5rem);
          margin-bottom: 2.5rem;
          color: var(--brand-silver);
        }

        .authority-matrix-desc {
          font-size: 1.25rem;
          color: var(--brand-silver);
          margin-top: 2.5rem;
          line-height: 1.7;
          font-weight: 300;
          max-width: 600px;
        }

        .authority-matrix-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 30px;
          padding: 40px 0;
        }

        .authority-matrix-card {
          background: var(--brand-onyx);
          padding: 50px 40px;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
          transition: var(--transition-editorial);
          border: 1px solid rgba(229, 181, 158, 0.1);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .authority-matrix-card:hover {
          border-color: var(--brand-blush-gold);
          box-shadow: var(--shadow-executive);
        }

        .matrix-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 70px;
        }

        .matrix-index {
          font-family: var(--font-heading);
          font-size: 1rem;
          color: var(--brand-blush-gold);
          letter-spacing: 0.15em;
          opacity: 0.5;
        }

        .gold-icon { color: var(--brand-blush-gold); transition: var(--transition-editorial); }

        .authority-matrix-card:hover .gold-icon { transform: scale(1.1); }

        .matrix-card-title {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
          color: var(--brand-blush-gold);
        }

        .matrix-card-desc {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--brand-silver);
          margin-bottom: 2.5rem;
          opacity: 0.6;
          transition: var(--transition-editorial);
        }

        .authority-matrix-card:hover .matrix-card-desc {
          opacity: 1;
        }

        .matrix-card-action {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--brand-blush-gold);
          opacity: 0.4;
          transition: var(--transition-editorial);
        }

        .authority-matrix-card:hover .matrix-card-action {
          opacity: 1;
        }

        .matrix-card-glow {
          position: absolute;
          bottom: -40px;
          right: -40px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(229, 181, 158, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        @media (max-width: 800px) {
          .authority-matrix-header { margin-bottom: 60px; text-align: center; }
          .authority-matrix-grid { grid-template-columns: 1fr; }
          .authority-matrix-card { padding: 40px 25px; }
          .matrix-card-title { font-size: 1.5rem; }
          .matrix-card-desc { margin-bottom: 3rem; }
        }
      `}} />
    </section>
  );
};

export default SolutionsGrid;
