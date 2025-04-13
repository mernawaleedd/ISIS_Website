import React, { useState } from 'react';
import Card from "./Card";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Project1 from "../assets/images/Project1.png";
import MedLogo from "../assets/images/MedLogo.png";
import Description from "./Description";
import leftArrow from "../assets/images/leftArrow.png";
import rightArrow from "../assets/images/rightArrow.png";
const projects = [
  {
    title: 'MED',
    department: 'Mechanical and Electrical Department',
    description: 'MED is a Computerized Maintenance Management System (CMMS) used for managing the maintenance of assets and equipment in companies and organizations. This system helps users track asset quality, schedule maintenance, analyze efficiency, predict failures, and manage spare parts and other critical functions to ensure asset sustainability and technical efficiency.',
    image: Project1,
    logo: MedLogo
  },
  {
    title: 'MAS',
    department: 'IT Solutions',
    description: 'This project focuses on developing scalable IT solutions for enterprise-level organizations, streamlining their digital transformation.',
    image: Project1,
    logo: MedLogo
  },
  {
    title: 'MAS Mobile',
    department: 'IT Solutions',
    description: 'This project focuses on developing ',
    image: Project1,
    logo: MedLogo
  },
  {
    title: 'MAS',
    department: 'IT Solutions',
    description: 'This project',
    image: Project1,
    logo: MedLogo
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const { title, department, description, image, logo } = projects[currentIndex];

  return (
    <div className="flex flex-col items-center p-4">
   <Description
    title="Projects"
   description= "We consistently deliver cutting-edge software solutions that drive innovation, streamline operations, and elevate user experiences"
   />
      <Card className="container min-h-[400px] h-auto mx-auto w-auto sm:max-w-[70%] md:max-w-[50%] p-4 rounded-2xl shadow-lg text-center relative">
        <img src={logo} alt="Logo" className="w-32 mx-auto mb-2" />
        <div className="flex flex-col sm:flex-row items-center h-full">
          <div className="sm:flex-[1] flex items-center justify-center mb-4 sm:mb-0">
            <img src={image} alt="Project" className="  object-contain" />
          </div>
          <div className="sm:flex-[2] flex flex-col justify-center pl-4">
            <h3 className="text-xl font-semibold mt-0 mb-2 text-[#0E2F40]">{title}</h3>
            <p className="font-medium mb-2 text-[#0E2F40]">{department}</p>
            <p className="text-sm text-[#5E5E5E] leading-10">{description}</p>
          </div>
        </div>
      </Card>
      <div className="flex justify-between w-40 my-12">
        <button onClick={handlePrev}><img src={leftArrow} alt="leftArrow" className='w-8 p-2  rounded-full bg-[#24698F0D]' /></button>
        <button onClick={handleNext}><img src={rightArrow} alt="rightArrow" className='w-8 p-2  rounded-full bg-[#24698F0D]' /></button>
      </div>
    </div>
  );
};
export default Projects;
