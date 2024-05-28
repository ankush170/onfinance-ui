import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FinancialMarketData = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    const animateBars = async () => {
      controls1.start({ height: '75%' });
      controls2.start({ height: '100%' });
      controls3.start({ height: '25%' });
    };

    animateBars();
  }, [controls1, controls2, controls3]);

  return (
    <div className="flex flex-col bg-gradient-to-tr from-[#1D4242] to-[#171717] rounded-tl-lg p-4 w-[130px] ml-2 h-[350px] mt-4">
      <div className='bg-[#00C0FF] h-[1px] w-10 mt-10' />
      <div className="text-[#00FFFF] font-sans mt-2">FINANCIAL MARKET DATA</div>
      <div className="flex flex-row items-end space-x-2 mt-10 h-20">
        <motion.div
          className="bg-[#00FFFF] w-6"
          initial={{ height: '100%' }}
          animate={controls1}
          transition={{ duration: 3 }}
        />
        <motion.div
          className="bg-[#21A6A6] w-6"
          initial={{ height: '25%' }}
          animate={controls2}
          transition={{ duration: 3 }}
        />
        <motion.div
          className="bg-[#20A0A8] w-6"
          initial={{ height: '50%' }}
          animate={controls3}
          transition={{ duration: 3 }}
        />
      </div>
    </div>
  );
};

export default FinancialMarketData;
