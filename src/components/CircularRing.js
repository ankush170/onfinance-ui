import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CircularRing = ({ isVisible }) => {
  const [tickVisible, setTickVisible] = useState(false);
  const pathLength = 70; 

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setTickVisible(true);
      }, 100); 
    }
  }, [isVisible]);

  return (
    <motion.div
      className="absolute right-20 -bottom-10 transform translate-x translate-y w-32 h-32 flex items-center justify-center"
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className="absolute"
      >
        <defs>
          <linearGradient id="inner-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#01C2FF" />
            <stop offset="100%" stopColor="#053462" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeWidth="10"
          fill="url(#inner-gradient)" // Apply gradient as fill
        />
      </svg>
      <motion.svg
        width="60"
        height="54"
        viewBox="0 0 24 24"
        className="absolute"
        initial={{ opacity: 0, strokeDasharray: pathLength, strokeDashoffset: pathLength }}
        animate={tickVisible ? { opacity: 1, strokeDashoffset: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ stroke: 'white', strokeWidth: 4, fill: 'none' }}
      >
        <path d="M4 12L9 17L20 6" />
      </motion.svg>
    </motion.div>
  );
};

export default CircularRing;
