import React from "react";
import Cup from "../assets/images/Cup.png";
import Description from "./Description";

const WhyChooseUs = () => {
  const topCards = [
    {
      title: "Expertise in Industrial Services",
      description: "We Develop Specialized Apps And Systems Tailored For Industrial Operations.",
    },
    {
      title: "Comprehensive Digital Solutions",
      description: "From Software Development To Cybersecurity, We Provide End-To-End Technology Services.",
    },
    {
      title: "Customer-Centric Approach",
      description: "We Focus On Delivering Seamless User Experiences And Long-Term Business Value.",
    },
  ];

  const bottomCards = [
    {
      title: "AI & Automation Integration",
      description: "Leveraging AI-Driven Solutions To Optimize Asset Management And Business Procedures.",
    },
    {
      title: "Scalable & Secure Infrastructure",
      description: "We Build Cloud And On-Premise Solutions That Are Future-Proof And Secure.",
    },
  ];

  return (
    <div className="relative py-20 md:py-12 bg-[#F6F6F6]">
      <div className="mb-16">
        <Description title="Leading companies choose I.S.I.S for their maintenance operations — here's why?" />
      </div>
      <div className="hidden sm:block absolute left-0 right-0 top-[394px] h-1 bg-[#24698F] container"></div>

      <div className="flex justify-center gap-16 mb-20 relative flex-wrap">
        {topCards.map((card, index) => (
          <div key={index} className="flex flex-col items-center relative">
            <div className="w-1 h-10 bg-[#24698F] absolute top-full hidden sm:block"></div>
            <div className="bg-[#ffffff] p-6 rounded-3xl shadow-lg w-64 text-center">
              <h3 className="font-bold text-[#0E2F40] text-lg mb-2">{card.title}</h3>
              <p className="text-[#5E5E5E] text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-32 mt-20 relative flex-wrap">
        {bottomCards.map((card, index) => (
          <div key={index} className="flex flex-col items-center relative mb-3">
            <div className="w-1 h-10 bg-[#24698F] absolute bottom-full hidden sm:block"></div>
            <div className="bg-[#ffffff] p-6 rounded-3xl shadow-lg w-64 text-center">
              <h3 className="font-bold text-[#0E2F40] text-lg mb-2">{card.title}</h3>
              <p className="text-[#5E5E5E] text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hide the cup icon on small screens */}
      <div className="hidden sm:block absolute right-32 top-[395px] transform translate-y-[-50%]">
        <img src={Cup} alt="Cup" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
