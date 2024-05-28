// src/App.js
import React from 'react';
import FinancialMarketData from './components/FinancialMarketData';
import ChainOfThought from './components/ChainOfThought';
import FooterBar from './components/FooterBar';

function App() {
  return (
    <div className="min-h-screen p-40 text-white" style={{
      background: 'radial-gradient(circle at 25% 50%, #1E3A8A, #000000)'
    }}>
      <div className="grid grid-cols-2 gap-8 mr-20 ml-20 mt-10">
        <div className="flex flex-col justify-between">
          <div className='flex flex-col w-[450px]'>
            <div className='flex flex-row justify-between'>
              <FinancialMarketData />
              <ChainOfThought />
            </div>
            <FooterBar />
          </div>
        </div>
        <div className="flex flex-col justify-left gap-8">
          <h1 className="text-5xl font-bold">Collaborate to build high quality reports at light speed</h1>
          <p className="mt-4 text-xl text-[#C2E3FF] pb-4">NeoGPT separates chain of thought from the PDF report outputs allowing teams to collaborate, version, and iterate on reports.</p>
          <button className="w-[181px] bg-white text-blue-900 p-4 mt-10 rounded">Get Free Trial</button>
        </div>
      </div>
    </div>
  );
}

export default App;
