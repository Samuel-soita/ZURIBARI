import React from 'react';

interface TrustedMarqueeProps {
  title: string;
  clients: string[];
}

const TrustedMarquee: React.FC<TrustedMarqueeProps> = ({ title, clients }) => {
  return (
    <section className="marquee-section">
      <div className="container">
        <h4 className="marquee-title">{title}</h4>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="marquee-item">
              {client}
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .marquee-section {
          padding: 5rem 0;
          background: white;
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
        }

        .marquee-title {
          text-align: center;
          color: var(--brand-rose-gold);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 0.75rem;
          font-weight: 800;
          margin-bottom: 3.5rem;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          display: flex;
          position: relative;
        }

        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        .marquee-content {
          display: flex;
          animation: marquee 40s linear infinite;
        }

        .marquee-item {
          padding: 0 5rem;
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          color: #d1d1d1;
          white-space: nowrap;
          text-transform: uppercase;
          font-weight: 700;
          transition: var(--transition-elegant);
        }

        .marquee-item:hover {
          color: var(--brand-rose-gold);
          transform: scale(1.05);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .marquee-section { padding: 3rem 0; }
          .marquee-item { padding: 0 3rem; }
        }
      `}} />
    </section>
  );
};

export default TrustedMarquee;
