import React from 'react';

const Description = ({ title, description }) => (
  <div className="text-center mb-6 mx-auto max-w-3xl px-4 sm:px-6">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#0E2F40]">
      {title}
    </h2>
    <p className="text-base sm:text-lg md:text-2xl text-[#5E5E5E] capitalize font-medium tracking-wide leading-relaxed">
      {description}
    </p>
  </div>
);

export default Description;
