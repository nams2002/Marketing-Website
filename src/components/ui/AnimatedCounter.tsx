'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  label,
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // Extract number from value string (e.g., "500+" -> 500)
    const numericValue = parseInt(value.replace(/[^\d]/g, ''));
    return Math.round(latest);
  });

  useEffect(() => {
    if (inView) {
      const numericValue = parseInt(value.replace(/[^\d]/g, ''));
      animate(count, numericValue, { duration });
    }
  }, [inView, count, value, duration]);

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div className={`text-3xl md:text-4xl font-bold mb-2 ${className || 'text-blue-400'}`}>
        <motion.span>{rounded}</motion.span>
        {value.includes('+') && '+'}
        {value.includes('K') && 'K'}
        {value.includes('%') && '%'}
      </motion.div>
      <div className="text-gray-300 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
