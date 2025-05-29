import React from 'react';

const AboutImageSection = ({ title, description, image, reverse = false }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between my-16 px-4 sm:px-6 md:px-10 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={image}
          alt={title}
          className="max-w-[400px] w-full h-auto rounded-lg shadow-md object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E2F40] mb-4 sm:mb-6 capitalize">
          {title}
        </h2>
        <p className="text-[#5E5E5E] text-base sm:text-lg tracking-widest capitalize">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutImageSection;
