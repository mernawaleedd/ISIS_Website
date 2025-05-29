import React from "react";
import { NavLink } from "react-router-dom";

const ButtonWithArrow = ({ label, arrowImage, to, className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full transition ";

  // You can tweak these default sizes and paddings for responsiveness
  const defaultClasses =
    "px-6 py-3 md:px-8 md:py-4 text-white bg-[#24698F] hover:bg-[#1d5a78]";

  // If 'to' is passed, render NavLink, else a normal button
  return to ? (
    <NavLink to={to} className={`${baseClasses} ${defaultClasses} ${className}`} {...props}>
      {label}
      <img src={arrowImage} alt="arrow" className="inline-block ml-2 h-5 w-5 md:h-6 md:w-6" />
    </NavLink>
  ) : (
    <button className={`${baseClasses} ${defaultClasses} ${className}`} {...props}>
      {label}
      <img src={arrowImage} alt="arrow" className="inline-block ml-2 h-5 w-5 md:h-6 md:w-6" />
    </button>
  );
};

export default ButtonWithArrow;
