import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import MED from "../assets/images/MED.png";
import MedLogo from "../assets/images/MedLogo.png"; 
import ProjectsBg from "../assets/images/ProjectsBg.png";
import BackgroundSection from '../Components/BackgroundSection';
import ContactUs from "../Components/ContactUs";

const Projects = () => {
  const cardsData = [
    {
      description: "MED - Mechanical And Electrical Department",
      logo: MedLogo,
      image: MED,
    },
  ];
  return (
    <>
    <div className="animate-on-scroll">
      <BackgroundSection bgImage={ProjectsBg} text="Our work speaks for itself" title="Projects" />
      </div>

        {/* Cards grid */}
        <div className="py-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center container animate-on-scroll">
          {cardsData.map((card, index) => (
            <div className="animate-on-scroll">
            <ProjectCard
              key={index}
              image={card.image}
              description={card.description}
              logo={card.logo}
            />
            </div>
          ))}
        </div>
        <div className="animate-on-scroll">
        <ContactUs/>
        </div>
    </>
  );
};

export default Projects;
