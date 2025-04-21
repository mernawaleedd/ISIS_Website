import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ image, description, logo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projectDetailes');
  };

  return (
    <div className="w-full max-w-[380px]">
      <div className="border border-[#F6F6F6] rounded-3xl p-5 shadow-md bg-white flex flex-col items-start transform transition duration-300 hover:scale-105">
        <img src={image} alt="Project" className="w-full h-48 object-cover mb-2 rounded-md" />
        {logo && <img src={logo} alt="Logo" className="w-32 h-32 object-contain" />}
        <p className="text-lg font-semibold text-[#0E2F40] mb-4">{description}</p>
        <h3 className="p-3 text-[#24698F]">Web</h3>
        <button 
          onClick={handleClick}
          className="bg-[#F6F6F6] hover:bg-[#969292] text-[#5E5E5E] font-semibold py-2 px-6 rounded-full transition"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
