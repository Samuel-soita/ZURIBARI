import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, width = "fit-content" }) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
