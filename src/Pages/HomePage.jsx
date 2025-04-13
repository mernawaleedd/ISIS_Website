import BgWithAnimation from "../Components/BgWithAnimation";
import Services from "../Components/Services";
import Customers from "../Components/Customers";
import Projects from "../Components/Project";
import Statistics from "../Components/Statistics"
import News from "../Components/News";
import ContactForm from "../Components/ContactUs";
import TestimonialSlider from "../Components/NewsSlider";
import background from "../assets/images/background.png";
export default function Home(){
  return (
    <>
    <BgWithAnimation bgImage={background}/>
    <Customers/>
    <Services/>
    <Projects/>
    <Statistics/>
    <News/>
    <TestimonialSlider/>
    <ContactForm/>
    {/* <Map/> */}

    </>
  )
};