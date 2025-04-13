import React from 'react';
const ProjectCard = ({ image, description, logo }) => {
  return (
    <div className="border border-[#F6F6F6] rounded-3xl p-5 w-full max-w-[380px] shadow-md bg-[#ffffff] flex flex-col items-start">


      {/* Main Image */}
      <img src={image} alt="Project" className="w-full h-48 object-cover mb-2 rounded-md" />
          {/* Logo (instead of title) */}
          {logo && (
        <img src={logo} alt="Logo" className="w-32 h-32  object-contain" />
      )}
      {/* Description */}
      <p className="text-lg font-semibold text-[#0E2F40] mb-4">{description}</p>

      {/* Button */}
      <button className="bg-[#F6F6F6] hover:bg-[#969292] text-[#5E5E5E] font-semibold py-2 px-6 rounded-full transition">
        Web
      </button>
    </div>
  );
};

export default ProjectCard;
