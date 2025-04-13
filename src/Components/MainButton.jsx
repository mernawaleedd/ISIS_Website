import React from "react";
import Arrow from "../assets/images/WhiteArrow.png";
const Button = ({ label }) => {
    return (
      <button className="bg-[#24698F] text-[#ffffff] px-6 py-4 rounded-full flex items-center justify-center space-x-2 hover:bg-[#0E2F40]">
        <span>{label}</span>
        <img src={Arrow} alt="Arrow" className="w-5" />
      </button>
    );
  };
  export default Button;