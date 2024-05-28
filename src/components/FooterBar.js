// src/components/FooterBar.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CircularRing from './CircularRing';
import pdfIcon from '../images/pdf-icon.svg';

const FooterBar = () => {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const targetText = 'Report ready';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setText(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true); 
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-[#21A6A6] to-[#1B6DB7] p-4 rounded-b-lg flex items-center w-full overflow-visible">
      <img src={pdfIcon} alt="PDF Icon" className="ml-7" />
      <motion.div
        className="text-white font-thin p-1"
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4))'
        }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
      >
        {text}
      </motion.div>

      <CircularRing isVisible={isComplete} />
    </div>
  );
};

export default FooterBar;
