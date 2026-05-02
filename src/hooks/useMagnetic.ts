import { useEffect, useCallback, RefObject } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export const useMagnetic = (ref: RefObject<HTMLElement | null>, strength: number = 0.5) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Only apply if within a reasonable range (e.g., 100px)
    const threshold = 100;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < threshold) {
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  }, [ref, strength, x, y]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return { x: springX, y: springY };
};
