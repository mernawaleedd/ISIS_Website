import React from "react";

const BackgroundSection = ({ bgImage, text, title, textColor = "#0E2F40" }) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-90"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 ">
        <h3
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
          style={{ color: textColor }}
        >
          {title}
        </h3>
        <p
          className="text-base sm:text-lg md:text-2xl font-medium"
          style={{ color: textColor }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default BackgroundSection;
