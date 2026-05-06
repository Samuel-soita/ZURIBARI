import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import pageConfig from '../config/page-config.json';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="institutional-footer" id="contact">
      <div className="container">
        <div className="footer-matrix">
          <div className="footer-brand-column">
            <div className="footer-identity">
              <div className="footer-logo-wrap">
                <img src={logo} alt="Zuribari Logo" className="footer-logo-asset" />
              </div>
              <h2 className="brand-gold-title">{pageConfig.brand.name}</h2>
            </div>
            <p className="footer-mission-text">{pageConfig.brand.tagline}</p>

          </div>

          <div className="footer-nav-column">
            <h4 className="column-label-gold">Corporate Portal</h4>
            <ul className="footer-link-list">
              <li><a href="#hero">Capability Hero</a></li>
              <li><a href="#solutions">Service Matrix</a></li>
              <li><a href="#reach">Institutional Reach</a></li>
              <li><a href="#stories">Partnership Echoes</a></li>
              <li><a href="#contact">Direct Inquiry</a></li>
            </ul>
          </div>

          <div className="footer-contact-column">
            <h4 className="column-label-gold">Engagement Hub</h4>
            <div className="hub-contact-node">
              <Phone size={18} className="gold-accent-icon" />
              <span>{pageConfig.contacts.phone}</span>
            </div>
            <div className="hub-contact-node">
              <Mail size={18} className="gold-accent-icon" />
              <span>{pageConfig.contacts.email}</span>
            </div>
            <div className="hub-contact-node">
              <MapPin size={18} className="gold-accent-icon" />
              <span>{pageConfig.brand.location}</span>
            </div>
          </div>

          <div className="footer-cta-column">
            <h4 className="column-label-gold">Direct Channel</h4>
            <a 
              href={`https://wa.me/${pageConfig.contacts.whatsapp}`} 
              className="exec-whatsapp-link"
            >
              <span>WhatsApp Connect</span>
              <ArrowUpRight size={18} />
            </a>
            
            <div className="executive-seal-signature">
              <span className="founder-script">June Chumbe</span>
              <span className="seal-rank">FOUNDER & DIRECTOR</span>
            </div>
          </div>
        </div>

        <div className="footer-legal-bar-refined">
          <p className="copyright-text">© {new Date().getFullYear()} {pageConfig.brand.name}. Led by {pageConfig.brand.founder}.</p>
          <div className="legal-link-matrix">
            <a href="#">Privacy Policy</a>
            <div className="node-divider" />
            <a href="#">Tender Documentation</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .institutional-footer {
          padding: clamp(100px, 15vw, 200px) 0 40px;
          background: var(--brand-bg);
          color: var(--brand-silver);
          border-top: 1px solid rgba(229, 181, 158, 0.2);
        }

        .footer-matrix {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: clamp(3rem, 6vw, 6rem);
          margin-bottom: 120px;
        }

        .footer-identity {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .footer-logo-wrap {
          width: 140px;
          height: 140px;
          background: #fff;
          border-radius: 8px;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(229, 181, 158, 0.1);
        }

        .footer-logo-asset {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .brand-gold-title { 
          font-size: 2.2rem; 
          color: var(--brand-blush-gold); 
          margin: 0; 
          font-family: var(--font-heading);
        }
        
        .footer-mission-text { 
          color: var(--brand-silver);
          opacity: 0.7;
          line-height: 1.8; 
          max-width: 320px; 
          margin-bottom: 3.5rem; 
          font-size: 1rem; 
          font-weight: 300;
        }

        .footer-socials-grid { display: flex; gap: 1.25rem; }
        .social-box { 
          width: 48px; 
          height: 48px; 
          border-radius: 4px; 
          background: var(--brand-onyx); 
          border: 1px solid rgba(229, 181, 158, 0.15);
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: var(--brand-blush-gold);
          transition: var(--transition-editorial);
        }
        .social-box:hover { 
          background: var(--brand-blush-gold); 
          color: var(--brand-onyx); 
          transform: translateY(-5px); 
          border-color: var(--brand-blush-gold);
        }

        .column-label-gold {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.4em;
          color: var(--brand-blush-gold);
          text-transform: uppercase;
          margin-bottom: 3rem;
        }

        .footer-link-list { list-style: none; }
        .footer-link-list li { margin-bottom: 1.5rem; }
        .footer-link-list a { 
          color: var(--brand-silver);
          opacity: 0.6;
          text-decoration: none; 
          font-size: 0.95rem; 
          transition: var(--transition-editorial);
          font-weight: 500;
        }
        .footer-link-list a:hover { 
          color: var(--brand-blush-gold); 
          opacity: 1;
          padding-left: 12px; 
        }

        .hub-contact-node { 
          display: flex; 
          align-items: center; 
          gap: 1.5rem; 
          margin-bottom: 2rem; 
          color: var(--brand-silver); 
          font-size: 1rem; 
        }
        .gold-accent-icon { color: var(--brand-blush-gold); }

        .exec-whatsapp-link { 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          gap: 12px;
          height: 52px;
          background: var(--brand-blush-gold);
          color: var(--brand-onyx);
          text-decoration: none;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-size: 0.7rem;
          border-radius: 2px;
          transition: var(--transition-editorial);
          border: 1px solid var(--brand-blush-gold);
          margin-bottom: 50px;
        }

        .exec-whatsapp-link:hover { 
          background: var(--brand-silver);
          border-color: var(--brand-silver);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .executive-seal-signature {
          text-align: right;
          opacity: 0.6;
        }

        .founder-script {
          display: block;
          font-family: 'Tenor Sans', sans-serif;
          font-size: 2.2rem;
          color: var(--brand-blush-gold);
          margin-bottom: 4px;
          font-style: italic;
          letter-spacing: -0.02em;
        }

        .seal-rank {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.4em;
          color: var(--brand-silver);
          text-transform: uppercase;
        }

        .footer-legal-bar-refined {
          padding-top: 50px;
          border-top: 1px solid rgba(229, 181, 158, 0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--brand-silver);
          opacity: 0.5;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .legal-link-matrix { display: flex; align-items: center; gap: 2.5rem; }
        .legal-link-matrix a { color: inherit; text-decoration: none; transition: var(--transition-editorial); }
        .legal-link-matrix a:hover { color: var(--brand-blush-gold); opacity: 1; }
        .node-divider { width: 4px; height: 4px; background: var(--brand-blush-gold); border-radius: 50%; opacity: 0.3; }

        @media (max-width: 1200px) {
          .footer-matrix { grid-template-columns: 1fr 1fr; }
        }
        
        @media (max-width: 768px) {
          .institutional-footer { padding: 80px 0 40px; }
          .footer-matrix { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
          .footer-identity { flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
          .footer-logo-wrap { margin: 0 auto; width: 100px; height: 100px; }
          .footer-mission-text { margin: 0 auto 3rem; }
          .hub-contact-node { justify-content: center; gap: 1rem; }
          .footer-legal-bar-refined { flex-direction: column; gap: 2rem; text-align: center; }
          .legal-link-matrix { flex-direction: column; gap: 1rem; }
          .node-divider { display: none; }
          .executive-seal-signature { text-align: center; margin-top: 2rem; }
        }
      `}} />
    </footer>
  );
};

export default Footer;
