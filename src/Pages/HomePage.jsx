import BgWithAnimation from "../Components/BgWithAnimation";
import Services from "../Components/Services";
import Customers from "../Components/Customers";
import Statistics from "../Components/Statistics"
import News from "../Components/News";
import ContactForm from "../Components/ContactUs";
import TestimonialSlider from "../Components/NewsSlider";
import background from "../assets/images/background.png";
import Map from "../Components/Map";
import ProjectCard from '../Components/ProjectCard';
import MED from "../assets/images/MED.png";
import MedLogo from "../assets/images/MedLogo.png";
import Description from "../Components/Description";
import Button from "../Components/MainButton";
import Arrow from "../assets/images/arrow.png";
import WhiteArrow from "../assets/images/WhiteArrow.png";
import { NavLink,useNavigate } from "react-router-dom";
export default function Home(){
  const navigate = useNavigate();
  const cardsData = [
    {
      description: "MED - Mechanical And Electrical Department",
      logo: MedLogo,
      image: MED,
    },
  ];
  const ServicesDetailes = () => {
    navigate("/Services"); 
  };
  const ProjectsDetailes = () => {
    navigate("/Projects"); 
  };
  return (
    <>
        <div className="animate-on-scroll">
    <BgWithAnimation bgImage={background}/>
    </div>
    <div className="animate-on-scroll">
    <Customers/>
    </div>
    <div className="animate-on-scroll">
    <Services/>
    <NavLink
  to="/Services"
  className="mx-auto px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-[#ffffff] text-[#24698F] shadow-lg rounded-3xl hover:bg-[#F6F6F6] transition mt-16 flex items-center justify-center w-max"
>
  Learn More
  <img src={Arrow} alt="arrow" className="inline-block ml-2" />
</NavLink>

    </div>
    <div className="py-32 animate-on-scroll">
    <Description title="Projects" description="We consistently deliver cutting-edge software solutions that drive innovation, streamline operations, and elevate user experiences."/>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center container">
            {cardsData.map((card, index) => (
              <ProjectCard
                key={index}
                image={card.image}
                description={card.description}
                logo={card.logo}
              />
            ))}
          </div>
          <div className="flex justify-center m-auto py-16">
          <NavLink
      to="/Projects"
      className="px-9 py-4 bg-[#24698F] text-white rounded-full hover:bg-[#1d5a78] transition"
    >
       View All
       <img src={WhiteArrow} alt="arrow" className="inline-block ml-2" />
    </NavLink>
            </div>
          </div>
          <div className="animate-on-scroll">
    <Statistics/>
    </div>
    <div className="animate-on-scroll">
    <News/>
    </div>
    <div className="animate-on-scroll">
    <TestimonialSlider/>
    </div>
    <div className="animate-on-scroll">
    <ContactForm/>
    </div>
    <div className="animate-on-scroll">
    <Map/>
    </div>
    </>
  )
};