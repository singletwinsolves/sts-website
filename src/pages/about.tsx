import React from 'react';

import Footer from '../components/Footer';
import Analytics from '../components/Analytics'; 
import Company from '../components/Company';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';

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
      <LazyShow>
        <>
          <Company /> 
        </>
      </LazyShow> 
      <LazyShow>
        <>
          <Footer />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
