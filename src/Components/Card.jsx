import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={` p-4 rounded-2xl shadow-lg bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
