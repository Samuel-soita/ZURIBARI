import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, Sparkles } from 'lucide-react';

interface QuizProps {
  variant?: 'professional' | 'business';
  title?: string;
  subtitle?: string;
}

const CtaQuiz: React.FC<QuizProps> = ({ variant = 'professional', title = 'Requirement Assessment', subtitle = 'Let us understand your supply chain needs.' }) => {
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    "Does your institution require meal output exceeding 500 units daily?",
    "Is strict KRA & Health compliance a non-negotiable for your tenders?",
    "Do you value architectural dining experiences for board-level guests?"
  ];

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <section className={`quiz-section variant-${variant}`}>
      <div className="container">
        <div className="quiz-card glass-card">
          {!finished ? (
            <AnimatePresence mode="wait">
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="quiz-content"
              >
                <div className="quiz-header">
                  <ClipboardCheck className="gold-icon" />
                  <span>Requirement Assessment</span>
                </div>
                <h2>{step === 0 ? title : questions[step]}</h2>
                <p>{step === 0 ? subtitle : "Select the best option for your needs."}</p>
                
                <div className="quiz-actions">
                  <button className="btn-refined" onClick={handleNext}>Yes, Absolutely</button>
                  <button className="btn-refined outline" onClick={handleNext}>Maybe / Not Yet</button>
                </div>
                
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }} 
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="quiz-result"
            >
              <Sparkles size={48} className="gold-icon" />
              <h2>Strategic Match Confirmed</h2>
              <p>Based on your input, Zuribari Enterprises' institutional framework is 98% compatible with your requirements. Let's start the partnership.</p>
              <button className="btn-refined">Download Capability Proposal</button>
            </motion.div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .quiz-section {
          padding: var(--section-padding) 0;
          background: linear-gradient(to bottom, transparent, var(--brand-emerald-950), transparent);
        }

        .quiz-card {
          max-width: 800px;
          margin: 0 auto;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: var(--glass-blur);
          padding: 4rem;
          border-radius: 32px;
          min-height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .quiz-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          color: var(--brand-gold-500);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.8rem;
        }

        .quiz-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .quiz-content p {
          color: var(--silver);
          margin-bottom: 3rem;
        }

        .quiz-actions {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.05);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--brand-gold-500);
          transition: width 0.4s var(--ease-expo);
        }

        .quiz-result {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .quiz-result h2 { font-size: 3rem; }

        @media (max-width: 768px) {
          .quiz-card { padding: 30px 20px; min-height: auto; border-radius: 16px; }
          .quiz-content h2 { font-size: 1.8rem; }
          .quiz-actions { flex-direction: column; width: 100%; gap: 1rem; }
          .quiz-result h2 { font-size: 2.2rem; }
        }
      `}} />
    </section>
  );
};

export default CtaQuiz;
