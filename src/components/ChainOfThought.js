import React, { useState } from 'react';
import SmallCircularRing from './SmallCircularRing';

const ChainOfThought = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="bg-gradient-to-tr from-[#6696C1] to-[#2C9BFE] p-4 w-[280px] mr-2 rounded-t-lg text-white">
      <div className='text-xl font-sans'>Chain of thought</div>
      <div className="mt-10 bg-[#68B1F3] p-2 text-sm rounded-md">What are GDP numbers for ...</div>
      <div className="mt-4 mb-2 bg-[#68B1F3] p-2 text-sm rounded-md">Data Viz: Compare last 15 yrs .....</div>
      <div className="relative mt-12">
        <button className="w-full bg-white text-black p-2 rounded">
          Complete Thought
        </button>
        <div className="absolute top-1/2 right-[-15px] transform -translate-y-1/2">
          <SmallCircularRing isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
};

export default ChainOfThought;
