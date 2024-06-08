import React from 'react';

import Footer from '../components/Footer';
import Analytics from '../components/Analytics'; 
import Features from '../components/Features';
import Header from '../components/Header';

import Pricing from '../components/Pricing';
import QuickFix from '../components/QuickFix';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
          </div>
        </div> 
      </div> 
      
        <>
          <QuickFix />
        </>
      
      
        <>
          <Pricing />
          <Features /> 
        </>
       
      
        <> 
          <Footer />
        </>
      
      <Analytics />
    </div>
  );
};

export default App;
