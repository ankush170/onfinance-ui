import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SmallCircularRing = ({ isVisible }) => {
  const [tickVisible, setTickVisible] = useState(false);
  const pathLength = 24; 

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setTickVisible(true);
      }, 2300); 
    }
  }, [isVisible]);

  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className="absolute"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="orange"
        />
      </svg>
      <motion.svg
        width="30"
        height="27"
        viewBox="0 0 24 24"
        className="absolute"
        initial={{ opacity: 1, strokeDasharray: pathLength, strokeDashoffset: pathLength }}
        animate={{ strokeDashoffset: tickVisible ? 0 : pathLength }}
        transition={{ duration: 0.1 }}
        style={{ stroke: 'white', strokeWidth: 4, fill: 'none' }}
      >
        <path d="M4 12L9 17L20 6" />
      </motion.svg>
    </div>
  );
};

export default SmallCircularRing;
