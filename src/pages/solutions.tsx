import React from 'react';

import Footer from '../components/Footer';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Services';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div> 
      </div> 
      <LazyShow> 
      </LazyShow>
      <LazyShow>
        <>
          <Features /> 
        </>
      </LazyShow> 
      <LazyShow>
        <>
          <Canvas />
          <Footer />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
