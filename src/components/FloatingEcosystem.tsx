import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ThumbsUp, Bell, X, ShieldCheck } from 'lucide-react';
import pageConfig from '../config/page-config.json';

const FloatingEcosystem: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showCookie, setShowCookie] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="universal-ux-features">
      {/* Precision Action Buttons - Hardened & Functional */}
      <div className="precision-fab-stack">
        <div className="fab-node-group">
          <span className="fab-tooltip">Institutional Feedback</span>
          <a href="#contact" className="p-fab-btn feedback" title="Feedback">
            <ThumbsUp size={22} />
          </a>
        </div>
        
        <div className="fab-node-group">
          <span className="fab-tooltip">Strategic Channel</span>
          <a 
            href={`https://wa.me/${pageConfig.contacts.whatsapp}`} 
            className="p-fab-btn channel" 
            title="Direct Channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare size={22} />
          </a>
        </div>
      </div>

      {/* Authority Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="authority-toast"
          >
            <div className="toast-icon-wrap"><Bell size={20} /></div>
            <div className="toast-narrative">
              <strong>Capability Update</strong>
              <p>{pageConfig.brand.name} expanded its general supply logistics by 40% for Q3.</p>
            </div>
            <button onClick={() => setShowNotification(false)} className="toast-close-btn"><X size={16} /></button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compliance Cookie Banner */}
      <AnimatePresence>
        {showCookie && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="compliance-banner"
          >
            <div className="container">
              <div className="banner-flex-layout">
                <div className="banner-info-cluster">
                  <ShieldCheck className="gold-accent-icon" size={24} />
                  <p className="banner-text-hd">We use institutional cookies to ensure data security and compliance tracking during your engagement.</p>
                </div>
                <div className="banner-action-cluster">
                  <button className="btn-acknowledge-hd" onClick={() => setShowCookie(false)}>
                    ACKNOWLEDGE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .precision-fab-stack {
          position: fixed;
          bottom: 40px;
          right: 40px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          z-index: 1000;
          align-items: flex-end;
        }

        .fab-node-group {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .fab-tooltip {
          background: var(--brand-blush-gold);
          color: var(--brand-onyx);
          padding: 8px 16px;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border-radius: 2px;
          opacity: 0;
          transform: translateX(10px);
          transition: var(--transition-editorial);
          pointer-events: none;
          white-space: nowrap;
          box-shadow: var(--shadow-executive);
        }

        .fab-node-group:hover .fab-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        .p-fab-btn {
          width: 56px;
          height: 56px;
          border-radius: 4px;
          border: 1px solid rgba(229, 181, 158, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-editorial);
          box-shadow: var(--shadow-executive);
          color: var(--brand-blush-gold);
          background: var(--brand-onyx);
          text-decoration: none;
        }

        .p-fab-btn:hover { 
          transform: translateY(-8px); 
          background: var(--brand-blush-gold);
          color: var(--brand-onyx);
          border-color: var(--brand-blush-gold);
        }

        .authority-toast {
          position: fixed;
          bottom: 130px;
          right: 40px;
          background: var(--brand-onyx);
          border: 1px solid rgba(229, 181, 158, 0.25);
          padding: 28px;
          border-radius: 4px;
          display: flex;
          gap: 24px;
          width: 380px;
          z-index: 1001;
          box-shadow: var(--shadow-executive);
          color: var(--brand-silver);
        }

        .toast-icon-wrap { color: var(--brand-blush-gold); }
        .toast-narrative strong { display: block; margin-bottom: 6px; font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--brand-blush-gold); }
        .toast-narrative p { font-size: 0.95rem; color: var(--brand-silver); opacity: 0.9; line-height: 1.6; margin: 0; font-weight: 400; }

        .toast-close-btn { background: transparent; border: none; color: rgba(229, 181, 158, 0.4); cursor: pointer; align-self: flex-start; transition: 0.3s; }
        .toast-close-btn:hover { color: var(--brand-blush-gold); }

        .compliance-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: var(--brand-bg);
          border-top: 1px solid rgba(229, 181, 158, 0.25);
          padding: 28px 0;
          z-index: 2000;
          box-shadow: 0 -20px 60px rgba(0,0,0,0.3);
        }

        .banner-flex-layout {
          display: flex;
          align-items: center;
          gap: 4rem;
          justify-content: space-between;
        }

        .banner-info-cluster { display: flex; align-items: center; gap: 24px; }
        .banner-text-hd { 
          font-size: 1rem; 
          color: var(--brand-silver); 
          opacity: 1; 
          margin: 0; 
          font-weight: 500;
          max-width: 800px;
        }
        .gold-accent-icon { color: var(--brand-blush-gold); }

        .btn-acknowledge-hd { 
          height: 48px;
          padding: 0 32px;
          background: var(--brand-blush-gold); 
          color: var(--brand-onyx);
          border: none;
          font-size: 0.75rem;
          font-weight: 900;
          letter-spacing: 0.3em;
          cursor: pointer;
          border-radius: 2px;
          transition: var(--transition-editorial);
        }

        .btn-acknowledge-hd:hover { 
          background: var(--brand-silver);
          transform: translateY(-4px);
        }

        @media (max-width: 1100px) {
          .banner-flex-layout { flex-direction: column; text-align: center; gap: 2.5rem; }
          .authority-toast { width: calc(100% - 40px); right: 20px; bottom: 120px; }
          .precision-fab-stack { bottom: 30px; right: 30px; }
          .fab-tooltip { display: none; }
        }
      `}} />
    </div>
  );
};

export default FloatingEcosystem;
