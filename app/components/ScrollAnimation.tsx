'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  type?: 'fade' | 'slide' | 'scale' | 'fade-slide';
  duration?: number;
  amount?: number;
}

export default function ScrollAnimation({ 
  children, 
  delay = 0, 
  className = '',
  type = 'fade-slide',
  duration = 0.5,
  amount = 0.3
}: ScrollAnimationProps) {
  const getAnimationVariants = () => {
    switch (type) {
      case 'fade':
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 }
        };
      case 'slide':
        return {
          initial: { y: 20 },
          whileInView: { y: 0 }
        };
      case 'scale':
        return {
          initial: { scale: 0.95 },
          whileInView: { scale: 1 }
        };
      case 'fade-slide':
      default:
        return {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      initial={getAnimationVariants().initial}
      whileInView={getAnimationVariants().whileInView}
      transition={{ duration, delay }}
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 