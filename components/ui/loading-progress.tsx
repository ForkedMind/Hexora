'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingProgressProps {
  isLoading: boolean;
}

export function LoadingProgress({ isLoading }: LoadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 10;
        });
      }, 200);

      return () => clearInterval(interval);
    } else {
      setProgress(100);
      setTimeout(() => setProgress(0), 500);
    }
  }, [isLoading]);

  if (!isLoading && progress === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-primary/60"
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.div>
  );
}