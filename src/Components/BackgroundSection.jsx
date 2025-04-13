import React from "react";

const BackgroundSection = ({ bgImage, text, title }) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-90"></div>

      {/* Centered Static Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4">
      <h3 className="text-4xl font-bold text-[#0E2F40] mb-6">{title}</h3>
        <p className="  text-[#0E2F40] font-medium text-xl">{text}</p>
      </div>
    </div>
  );
};

export default BackgroundSection;
