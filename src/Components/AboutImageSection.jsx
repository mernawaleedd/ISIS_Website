import React from 'react';

const AboutImageSection = ({ title, description, image, reverse = false }) => {
  return (
    <div className={` flex flex-col md:flex-row items-center justify-between my-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
       <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={image} 
          alt={title} 
          className="max-w-[400px] w-full h-auto rounded-lg shadow-md object-contain" 
        />
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 md:px-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#0E2F40] mb-6 capitalize">{title}</h2>
        <p className="text-[#5E5E5E] text-lg tracking-widest capitalize">{description}</p>
      </div>
    </div>
  );
};

export default AboutImageSection;
