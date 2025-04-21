import React from 'react';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';
import card5 from '../assets/images/card5.png';
import Arrow from "../assets/images/Arrow.png";
import Description from "./Description";
const Services = () => {
    const services = [
        {
            title: 'Software Development',
            description: 'Web Development . Mobile . CRM . ERP ',
            icon: card1,
        },
        {
            title: 'Artificial Intelligence',
            description: 'Machine Learning . OCR . NLP . Chatbot . Computer Vision',
            icon: card2,
        },
        {
            title: 'Digital Product Design',
            description: 'UX Design . UI Design . Design System . Prototyping . Branding ',
            icon: card3,
        },
        {
            title: 'Cloud Solutions & System Integration',
            description: 'Seamless Software Integration . NGINX . IIS . Cloud Migration ',
            icon: card4,
        },
        {
            title: 'Project Support',
            description: 'Technical Maintenance & Support . Project Management',
            icon: card5,
        },
    ];

    return (
        <div className="bg-[#ffffff] py-10 px-4">
       <Description
       title="Services"
       description=" At our software company, we offer a full range of innovative digital solutions designed to meet the specific needs of businesses across various industries. Our skilled team utilizes the latest technologies and industry best practices to develop high-performance, scalable,
                and secure software solutions that enhance business growth and operational efficiency."
                />
            <div className="flex flex-col gap-6 items-center animate-on-scroll">
                {services.map((service, index) => (
                    <div key={index} className="bg-[#F6F6F6] p-6 rounded-[40px] shadow-sm text-center w-full md:w-2/3 lg:w-1/2">
                        <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
