import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const QuickFix = () => {   
  const { quickfix } = config;
  const [firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem, seventhItem] = quickfix.items;

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
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
            <ul className="perkDescriptionList">
            </ul>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <Divider />
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {thirdItem?.title}
            </h3>
            <p className={`text-gray-600`}>{thirdItem?.description}</p>
            <ul className="perkDescriptionList">
            </ul>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={thirdItem?.img}
              alt={thirdItem?.title}
            />
          </div>
        </div>
        <Divider />
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={fourthItem?.img}
              alt={fourthItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {fourthItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{fourthItem?.description}</p>
            </div>
          </div>
        </div>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {fifthItem?.title}
            </h3>
            <p className={`text-gray-600`}>{fifthItem?.description}</p>
            <ul className="perkDescriptionList">
            
            </ul>

          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={fifthItem?.img}
              alt={fifthItem?.title}
            />
          </div>
        </div>
        <Divider />
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={sixthItem?.img}
              alt={sixthItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {sixthItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{sixthItem?.description}</p>
            </div>
          </div>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {seventhItem?.title}
            </h3>
            <p className={`text-gray-600`}>{seventhItem?.description}</p>
            <ul className="perkDescriptionList">
            
            </ul>

          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={seventhItem?.img}
              alt={seventhItem?.title}
            />
          </div>
        </div>
        <Divider /> 
       </div>
      </div>
    </section>
  );
};

export default QuickFix;
