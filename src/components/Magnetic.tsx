import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMagnetic(ref, strength);

  return (
    <motion.div ref={ref} style={{ x, y }}>
      {children}
    </motion.div>
  );
};

export default Magnetic;
