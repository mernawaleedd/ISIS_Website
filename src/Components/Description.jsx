import React from 'react';

const Description = ({ title, description }) => (
  <div className="text-center mb-6 mx-auto max-w-3xl">
    <h2 className="text-3xl font-semibold mb-6 text-[#0E2F40] ">{title}</h2>
    <p className=" text-2xl mx-auto text-[#5E5E5E] capitalize font-medium tracking-wide leading-relaxed">{description}</p>
  </div>
);

export default Description;
