import React from 'react';
import skill from '../../src/assets/skill-eliters-6.png';
import book from '../../src/assets/1-10.png';

function OurPartner() {
  return (
    <div className="py-10" style={{ background: 'linear-gradient(#162352, #0C0C20)' }}> {/* Gradient Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-white" style={{ minHeight: '60vh' }}>
          
          {/* Text Section */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-5xl font-bold leading-tight">
              The Smart <span className="text-blue-500">Choice</span> For <br />
              <span className="text-blue-500">Better Tomorrow</span>
            </h1>
            <p className="mt-4 text-lg">
              Online learning has become significantly more convenient and <br />
              EasyED is a great platform to LEARN...
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img className="w-96 h-auto" src={book} alt="Books and Learning Tools" />
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <img className="w-full h-auto mx-auto" src={skill} alt="Skill eliters" />
          <img className="w-full h-auto mx-auto" src={skill} alt="Skill eliters" />
          <img className="w-full h-auto mx-auto" src={skill} alt="Skill eliters" />
          <img className="w-full h-auto mx-auto" src={skill} alt="Skill eliters" />
          <img className="w-full h-auto mx-auto" src={skill} alt="Skill eliters" />
          <img className="w-full h-auto mx-auto" src={skill} alt="Skill eliters" />
        </div>
      </div>
    </div>
  );
}

export default OurPartner;
