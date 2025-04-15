import React, { useState, useEffect } from 'react';

const testimonials = [
  "The I.S.I.S Software Team impressed us with their development skills and ability to overcome complex challenges.",
  "Their dedication and professionalism helped us achieve our goals efficiently.",
  "An outstanding team that delivers on time and with great quality!",
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative bottom-28 w-full flex justify-center z-10">
      <div className="bg-[#24698F] text-[#ffffff] rounded-2xl p-10 shadow-lg w-3/4 md:w-2/4 flex flex-col items-center text-center h-64">
        <div className="text-4xl mb-4">“</div>
        <p className="text-lg font-medium mb-6 h-20 flex items-center justify-center">
          {testimonials[currentIndex]}
        </p>
        <div className="flex space-x-3">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-6 h-1 rounded cursor-pointer transition-all duration-300 ${
                currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
