import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Target, Zap, Users, BarChart, ShieldCheck } from 'lucide-react';
import pageConfig from '../config/page-config.json';
import ScrollReveal from '../components/ScrollReveal';

const StylizedMap = ({ activeSector, onHover }: { activeSector: number | null, onHover: (i: number | null) => void }) => {
  // Simplified World Map Paths (just representation)
  return (
    <svg viewBox="0 0 1000 500" className="institutional-map-svg">
      <path 
        d="M150,150 Q250,100 350,150 T550,150 T750,150 T900,200" 
        fill="none" 
        stroke="rgba(229, 181, 158, 0.1)" 
        strokeWidth="1" 
      />
      {/* Representational continents */}
      <circle cx="200" cy="200" r="80" fill="rgba(30, 30, 30, 0.5)" />
      <circle cx="500" cy="250" r="100" fill="rgba(30, 30, 30, 0.5)" />
      <circle cx="800" cy="180" r="70" fill="rgba(30, 30, 30, 0.5)" />
      
      {/* Interactive Nodes */}
      {[
        { x: 220, y: 180, label: "Corporate" },
        { x: 480, y: 230, label: "Government" },
        { x: 520, y: 280, label: "NGOs" },
        { x: 810, y: 170, label: "Education" },
        { x: 780, y: 210, label: "Hospitality" }
      ].map((node, i) => (
        <g 
          key={i} 
          className={`map-node-group ${activeSector === i ? 'active' : ''}`}
          onMouseEnter={() => onHover(i)}
          onMouseLeave={() => onHover(null)}
        >
          <motion.circle 
            cx={node.x} 
            cy={node.y} 
            initial={{ r: 6 }}
            animate={{ r: activeSector === i ? 10 : 6 }}
            className="map-node-core"
          />
          <motion.circle 
            cx={node.x} 
            cy={node.y} 
            initial={{ r: 15 }}
            className="map-node-pulse"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <AnimatePresence>
            {activeSector === i && (
              <motion.text
                x={node.x + 15}
                y={node.y + 5}
                className="map-node-label"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 15 }}
                exit={{ opacity: 0 }}
              >
                {node.label}
              </motion.text>
            )}
          </AnimatePresence>
        </g>
      ))}
    </svg>
  );
};

const InstitutionalReach: React.FC = () => {
  const { market, advantages } = pageConfig;
  const [activeSector, setActiveSector] = useState<number | null>(null);

  const icons = [Target, Globe, Users, Zap, BarChart];

  return (
    <section className="institutional-reach-section" id="reach">
      <div className="container">
        {/* Target Market Matrix */}
        <div className="reach-header">
          <ScrollReveal>
            <span className="section-label-gold">{market.subtitle}</span>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="section-title-obsidian">{market.title}</h2>
          </ScrollReveal>
        </div>

        <div className="reach-visualization-layout">
          <div className="market-sector-list">
            {market.sectors.map((sector, i) => (
              <motion.div 
                key={i}
                onMouseEnter={() => setActiveSector(i)}
                onMouseLeave={() => setActiveSector(null)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`sector-node ${activeSector === i ? 'active' : ''}`}
              >
                <div className="sector-icon-wrap">
                  <ShieldCheck size={20} />
                </div>
                <span>{sector}</span>
              </motion.div>
            ))}
          </div>

          <div className="map-visual-zone">
            <StylizedMap activeSector={activeSector} onHover={setActiveSector} />
          </div>
        </div>

        {/* The Zuribari Edge */}
        <div className="reach-header secondary-header">
          <ScrollReveal>
            <span className="section-label-gold">{advantages.subtitle}</span>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="section-title-obsidian">{advantages.title}</h2>
          </ScrollReveal>
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
                className="advantage-card preserve-3d depth-card"
              >
                <div className="glint-overlay" />
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

        .reach-visualization-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 5rem;
        }

        .market-sector-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
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
          cursor: pointer;
        }

        .sector-node.active, .sector-node:hover {
          background: var(--brand-blush-gold);
          color: var(--brand-onyx);
          transform: translateX(15px);
        }

        .sector-icon-wrap {
          color: var(--brand-blush-gold);
        }

        .sector-node.active .sector-icon-wrap, .sector-node:hover .sector-icon-wrap {
          color: var(--brand-onyx);
        }

        .map-visual-zone {
          background: var(--brand-onyx);
          border-radius: 8px;
          border: 1px solid rgba(229, 181, 158, 0.05);
          padding: 40px;
          position: relative;
        }

        .institutional-map-svg {
          width: 100%;
          height: auto;
        }

        .map-node-core {
          fill: var(--brand-blush-gold);
          cursor: pointer;
        }

        .map-node-pulse {
          fill: var(--brand-blush-gold);
          pointer-events: none;
        }

        .map-node-label {
          fill: var(--brand-blush-gold);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
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

        @media (max-width: 1024px) {
          .reach-visualization-layout { grid-template-columns: 1fr; }
          .map-visual-zone { display: none; }
        }

        @media (max-width: 768px) {
          .advantages-pillar-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default InstitutionalReach;
