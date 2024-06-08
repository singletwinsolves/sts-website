import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Privacy = () => {
  const { privacypolicy } = config; 
  const { description, items: privacypolicyList } = privacypolicy;
   
  return (
    <section className={`bg-background py-8`} id="privacypolicy">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {privacypolicy.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-full sm:w-1/2 p-6`}>  
          {privacypolicyList.map((privacypolicy) => (
              <div key={privacypolicy.name} className="relative">
                <h2
                  className={`text-base text-primary font-semibold tracking-wide uppercase`}>
                  {privacypolicy.title}
                </h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  {description}
                </p>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {privacypolicy.description}
                </dd>
                <br></br>
              </div>
            ))}
          </div>
        </div> 
 
      </div>
    </section>
  );
};
export default Privacy;
