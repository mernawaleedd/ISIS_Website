import React, { useState, useEffect } from 'react';

const CounterSection = () => {
  const counters = [
    { value: 50, label: 'Happy Clients' },
    { value: 13, label: 'Years of Experience' },
    { value: 100, label: 'Projects Completed' }
  ];

  const [counts, setCounts] = useState(Array(counters.length).fill(0));
  const [paused, setPaused] = useState(Array(counters.length).fill(false));

  useEffect(() => {
    const intervalIds = counters.map((counter, index) =>
      setInterval(() => {
        if (!paused[index] && counts[index] < counter.value) {
          setCounts(prev => {
            const updated = [...prev];
            updated[index] = prev[index] + 1;
            return updated;
          });
        }
      }, 50)
    );

    return () => intervalIds.forEach(clearInterval);
  }, [counts, paused]);

  const handleMouseEnter = (index) => {
    setPaused(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const handleMouseLeave = (index) => {
    setPaused(prev => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  return (
    <div className="bg-[#0E2F40] py-10 text-center">
      <h2 className="text-[30px] md:text-[40px] font-medium mt-8 mb-8 text-white">
        We are future-proofing software
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="flex flex-col items-center mt-8 w-28 md:w-40"
          >
            <span
              className="text-3xl md:text-4xl font-bold mb-2 text-white transition-all duration-200"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {counts[index]}{index !== 1 && '+'}
            </span>
            <p className="text-[#24698F] p-2 md:p-4 text-sm md:text-nowrap">
              {counter.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
