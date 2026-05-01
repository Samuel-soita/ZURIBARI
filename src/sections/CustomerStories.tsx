import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronRight } from 'lucide-react';
import pageConfig from '../config/page-config.json';

interface Story {
  org: string;
  content: string;
  author: string;
}

interface CustomerStoriesProps {
  title?: string;
  subtitle?: string;
  stories?: Story[];
}

const CustomerStories: React.FC<CustomerStoriesProps> = ({ title, subtitle, stories }) => {
  const [active, setActive] = useState(0);

  // Hardened Fallback Logic: Pull from central registry if props are missing
  const activeStories = stories || (pageConfig.partnerships as any[]);
  const activeTitle = title || "Partnership Echoes";
  const activeSubtitle = subtitle || "Institutional Impact";

  if (!activeStories || activeStories.length === 0) return null;

  return (
    <section className="institutional-stories" id="stories">
      <div className="container">
        <div className="stories-editorial-grid">
          <div className="stories-sidebar">
            <div className="editorial-label">
              <div className="line" />
              <span>{activeSubtitle}</span>
            </div>
            <h2 className="editorial-heading">{activeTitle}</h2>
            <div className="org-tab-list">
              {activeStories.map((story, index) => (
                <button 
                  key={index}
                  className={`org-tab ${active === index ? 'active' : ''}`}
                  onClick={() => setActive(index)}
                >
                  <span className="index">0{index + 1}</span>
                  <span className="name">{story.org}</span>
                  <ChevronRight size={14} className="arrow" />
                </button>
              ))}
            </div>
          </div>

          <div className="story-editorial-display">
            <AnimatePresence mode="wait">
              <motion.div 
                key={active}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -20 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="story-content-card"
              >
                <Quote size={60} className="blush-gold-icon-large" />
                <p className="main-quote">"{activeStories[active]?.content}"</p>
                <div className="author-signature">
                  <div className="sig-line" />
                  <div className="sig-meta">
                    <strong className="author-name">{activeStories[active]?.author}</strong>
                    <span className="author-org">{activeStories[active]?.org}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="editorial-bg-accent" />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .institutional-stories {
          padding: var(--section-padding) 0;
          background: transparent;
        }

        .stories-editorial-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 100px;
          align-items: center;
        }

        .editorial-label {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 2rem;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.3em;
          color: var(--brand-blush-gold);
          text-transform: uppercase;
        }

        .editorial-label .line {
          width: 40px;
          height: 1px;
          background: var(--brand-blush-gold);
        }

        .stories-sidebar .editorial-heading {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 4rem;
          color: var(--brand-silver);
          font-family: var(--font-heading);
        }

        .org-tab-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .org-tab {
          background: var(--brand-onyx);
          border: 1px solid rgba(229, 181, 158, 0.1);
          padding: 24px 32px;
          display: flex;
          align-items: center;
          gap: 24px;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-editorial);
          color: var(--brand-silver);
          border-radius: 4px;
        }

        .org-tab .index {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          color: var(--brand-blush-gold);
          opacity: 0.5;
        }

        .org-tab .name {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          flex-grow: 1;
        }

        .org-tab .arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: var(--transition-editorial);
          color: var(--brand-blush-gold);
        }

        .org-tab:hover {
          border-color: var(--brand-blush-gold);
          transform: translateX(10px);
        }

        .org-tab.active {
          background: var(--brand-blush-gold);
          color: var(--brand-onyx);
          border-color: var(--brand-blush-gold);
        }

        .org-tab.active .index { color: var(--brand-onyx); }
        .org-tab.active .arrow { opacity: 1; transform: translateX(0); color: var(--brand-onyx); }

        .story-editorial-display {
          background: var(--brand-onyx);
          padding: clamp(4rem, 8vw, 8rem);
          border-radius: 4px;
          color: var(--brand-silver);
          box-shadow: var(--shadow-executive);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(229, 181, 158, 0.15);
        }

        .blush-gold-icon-large {
          color: var(--brand-blush-gold);
          opacity: 0.2;
          margin-bottom: 3rem;
        }

        .main-quote {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          line-height: 1.5;
          margin-bottom: 5rem;
          font-weight: 400;
          color: var(--brand-silver);
        }

        .author-signature {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .sig-line {
          width: 60px;
          height: 1px;
          background: var(--brand-blush-gold);
        }

        .author-name {
          display: block;
          font-size: 1.15rem;
          margin-bottom: 6px;
          color: var(--brand-blush-gold);
        }

        .author-org {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--brand-silver);
          opacity: 0.6;
          font-weight: 800;
        }

        .editorial-bg-accent {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 60%;
          height: 140%;
          background: linear-gradient(135deg, transparent 0%, rgba(229, 181, 158, 0.03) 100%);
          transform: rotate(15deg);
          pointer-events: none;
        }

        @media (max-width: 1100px) {
          .stories-editorial-grid { grid-template-columns: 1fr; gap: 60px; }
          .story-editorial-display { padding: 4rem 2.5rem; }
        }
      `}} />
    </section>
  );
};

export default CustomerStories;
