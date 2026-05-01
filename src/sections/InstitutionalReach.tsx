import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Target, Zap, Users, BarChart, ShieldCheck } from 'lucide-react';
import pageConfig from '../config/page-config.json';

const InstitutionalReach: React.FC = () => {
  const { market, advantages } = pageConfig;

  const icons = [Target, Globe, Users, Zap, BarChart];

  return (
    <section className="institutional-reach-section" id="reach">
      <div className="container">
        {/* Target Market Matrix */}
        <div className="reach-header">
          <span className="section-label-gold">{market.subtitle}</span>
          <h2 className="section-title-obsidian">{market.title}</h2>
        </div>

        <div className="market-sector-grid">
          {market.sectors.map((sector, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="sector-node"
            >
              <div className="sector-icon-wrap">
                <ShieldCheck size={20} />
              </div>
              <span>{sector}</span>
            </motion.div>
          ))}
        </div>

        {/* The Zuribari Edge */}
        <div className="reach-header secondary-header">
          <span className="section-label-gold">{advantages.subtitle}</span>
          <h2 className="section-title-obsidian">{advantages.title}</h2>
        </div>

        <div className="advantages-pillar-grid">
          {advantages.pillars.map((pillar, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="advantage-card"
              >
                <div className="advantage-icon-box">
                  <Icon size={32} />
                </div>
                <div className="advantage-content">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
                <div className="advantage-card-glint" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .institutional-reach-section {
          padding: var(--section-padding) 0;
          background: transparent;
        }

        .reach-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .reach-header.secondary-header {
          margin-top: 10rem;
        }

        .section-label-gold {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-blush-gold);
          display: block;
          margin-bottom: 1.5rem;
        }

        .section-title-obsidian {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          color: var(--brand-silver);
          font-family: var(--font-heading);
        }

        .market-sector-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .sector-node {
          background: var(--brand-onyx);
          padding: 24px 32px;
          border-radius: 4px;
          border: 1px solid rgba(229, 181, 158, 0.1);
          display: flex;
          align-items: center;
          gap: 20px;
          color: var(--brand-silver);
          font-weight: 500;
          transition: var(--transition-editorial);
        }

        .sector-node:hover {
          background: var(--brand-blush-gold);
          color: var(--brand-onyx);
          transform: translateY(-5px);
        }

        .sector-icon-wrap {
          color: var(--brand-blush-gold);
        }

        .sector-node:hover .sector-icon-wrap {
          color: var(--brand-onyx);
        }

        .advantages-pillar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .advantage-card {
          position: relative;
          background: var(--brand-onyx);
          padding: 50px;
          border-radius: 4px;
          border: 1px solid rgba(229, 181, 158, 0.15);
          display: flex;
          flex-direction: column;
          gap: 30px;
          overflow: hidden;
          transition: var(--transition-editorial);
        }

        .advantage-card:hover {
          transform: translateY(-10px);
          border-color: var(--brand-blush-gold);
          box-shadow: var(--shadow-executive);
        }

        .advantage-icon-box {
          color: var(--brand-blush-gold);
        }

        .advantage-content h3 {
          font-size: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 12px;
          color: var(--brand-blush-gold);
        }

        .advantage-content p {
          color: var(--brand-silver);
          opacity: 0.7;
          line-height: 1.7;
          font-weight: 300;
        }

        .advantage-card-glint {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(229, 181, 158, 0.05),
            transparent
          );
          transform: skewX(-25deg);
          transition: 0.8s;
        }

        .advantage-card:hover .advantage-card-glint {
          left: 150%;
        }

        @media (max-width: 768px) {
          .advantages-pillar-grid { grid-template-columns: 1fr; }
          .sector-node { justify-content: center; }
        }
      `}} />
    </section>
  );
};

export default InstitutionalReach;
