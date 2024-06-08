import React from 'react';
import config from '../config/index.json';

const QuickFix = () => {   
  const { quickfix } = config; 

  return (
    <section className={`bg-background py-8`} id="quickfix">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {quickfix.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <div className="flex flex-col items-center justify-center">
            <a href="/quickfix"
              className={`block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100`}
              >
              LEARN MORE
            </a>
        </div> 
      </div>      
    </section>
  );
};

export default QuickFix;
