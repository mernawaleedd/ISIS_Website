import BackgroundSection from "../Components/BackgroundSection";
import Description from "../Components/Description";
import ContactUs from "../Components/ContactUs";
import NewsBg from "../assets/images/NewsBg.png";
import NewsImg from "../assets/images/NewsImg.png";
import NewsLogos from "../assets/images/NewsLogos.png";
import NewsFS from "../assets/images/NewsFS.png";
import image3 from "../assets/images/imge3.png";
import image4 from "../assets/images/image4.1.png";
import image5 from "../assets/images/image4.2.png";
import image6 from "../assets/images/image4.3.png";
import Event1 from "../assets/images/Event1.png";
import Event2 from "../assets/images/Event2.png";
import Event3 from "../assets/images/Event3.png";
import Event4 from "../assets/images/Event4.png";
import Event5 from "../assets/images/Event5.png";
import Event6 from "../assets/images/Event6.png";
import Event7 from "../assets/images/Event7.png";
import Event8 from "../assets/images/Event8.png";
import AboutImageSection from "../Components/AboutImageSection";
function News() {
  return (
    <>
      <BackgroundSection bgImage={NewsBg} text="The Latest News, Isights And Best Practices From Our Team Of Experts." title="News " />
      <div className="bg-[#ffffff]">
        <div className="container py-16">
          <Description title="Progress Meeting on Kitchener Project Performance Monitoring System with HCWW" />

          <img src={NewsImg} alt="Event Image" className="w-96 m-auto" />

          <div className="w-96 mx-auto mt-4 text-left">
            <p className="mb-5 text-[#5E5E5E]">Mar 4, 2025</p>
            <img src={NewsLogos} alt="Logos" className="w-36 mt-2" />
          </div>
          <div className="p-12 font-medium text-lg text-[#0E2F40] tracking-widest leading-relaxed capitalize">
            <p className="mb-12">As part of the ongoing efforts to enhance water and sanitation services, a meeting was held with the Holding Company for Water and Wastewater (HCWW) to present the progress of the Kitchener Project Performance Monitoring System.</p>
            <p>The project, implemented in collaboration with the German grant, aims to improve performance tracking and management of wastewater and sanitation systems. During the meeting, the team showcased the completed phases of the project, highlighting key achievements, data integration strategies, and the system’s role in optimizing operational efficiency.</p>
          </div>
          <img src={NewsFS} alt="website screen" className="w-96 ml-auto m-12" />
          <p className="p-12 font-medium text-lg text-[#0E2F40] tracking-widest leading-relaxed capitalize">The discussions also focused on future steps to ensure the sustainability and scalability of the system, reinforcing its alignment with Egypt’s environmental and infrastructure development goals.</p>
        </div>
      </div>
      <div className="bg-[#F6F6F6]">
        <div className="container py-16">
          <Description title="Coordination Meeting on JCAR Project: Advancing Asset Management for Pumping Stations" />

          <img src={image3} alt="Event Image" className="w-96 m-auto" />

          <div className="w-96 mx-auto mt-4 text-left">
            <p className="mb-5 text-[#5E5E5E]">February 5, 2025</p>
            <div className="flex gap-2">
              <img src={image4} alt="Logos" className="w-16 mt-2" />
              <img src={image5} alt="Logos" className="w-16 mt-2" />
            </div>
          </div>
          <p className="p-9 font-medium text-lg text-[#5E5E5E] tracking-widest leading-relaxed capitalize">As part of the follow-up on studies related to the JCAR project,
            on Wednesday, February 5, 2025, Eng. Mourad Lotfy, Head of the Mechanical and Electrical Department, held a coordination meeting at the department's headquarters in the New Administrative Capital.
          </p>
          <AboutImageSection
            description="The meeting was attended virtually by Prof. Dr. Sherif Mohamady, Head of the National Water Research Center, along with Eng. Walid Haqiqi, Head of the Planning Sector, Dr. Sherif Mohamdy, Director of the Mechanical and Electrical Research Institute, Dr. Mostafa Moussa from Zewail University, and the project team."
            image={Event1}
            reverse={true}
          />
               <AboutImageSection
            description="Discussions focused on the Asset Management Component and its potential integration with available data in the Planning Sector related to lifting stations, as well as addressing the department’s observations to ensure maximum benefits, improve asset management, and optimize their utilization."
            image={Event2}
            reverse={true}
          />
           <p className="p-9 font-medium text-lg text-[#5E5E5E] tracking-widest leading-relaxed capitalize">As part of the follow-up on studies related to the JCAR project,
           The meeting aimed to follow up on the activities of the Performance Enhancement of Pumping Stations for Irrigation and Drainage (PEPSI) project.

          </p>
        </div>
      </div>
      <div className="bg-[#ffffff]">
        <div className="container py-16">
          <Description title="PEPSI at Cairo Water Week 2024 |  Enhancing Decision-Making Through Asset Management" />

          <img src={Event3} alt="Event Image" className="w-96 m-auto" />

          <div className="w-96 mx-auto mt-4 text-left">
            <p className="mb-5 text-[#5E5E5E]">Oct 19,2024</p>
            <div className="flex gap-2">
              <img src={image4} alt="Logos" className="w-16 mt-2" />
              <img src={image6} alt="Logos" className="w-16 mt-2" />
            </div>
          </div>
          <p className="p-9 font-medium text-lg text-[#5E5E5E] tracking-widest leading-relaxed capitalize">We had an engaging session at #CWW24 titled "How Asset Management Supports Decision-Making" as part of the PEPSI project. Moderated by Dr. Abdallah Hussein, the session brought together key experts, including Dr. Ayman Elsayed (Director of MED), Ms. Sonja Pans (Deltares), Dr. Moustafa Samir Moussa (Zewail City), Eng. Sayed Moustafa (Software team), and Dr. Samy Saad (HRI).

          </p>
          <AboutImageSection
          title="Key topics covered:"
            description=" The role of asset management tools in enhancing the performance of over 580 pumping stations through real-time data and predictive maintenance.
,Asset management software developed for the MED, ensuring optimal decision-making and resource management.
, A focus on capacity building and collaborative development, with engineers trained to support Egypt’s digital transformation goals in water management.
 , Insights into the future of AI, predictive maintenance, and mobile applications for enhancement of pumping stations.
"
            image={Event4}
            reverse={true}
          />
           <p className="p-9 font-medium text-lg text-[#5E5E5E] tracking-widest leading-relaxed capitalize">Also, The interactive workshops had been held to train engineers on the use of asset management software. As a next step, an Asset Management Hackathon has been announced. The main goal of the Hackathon is for groups to present case studies showing how asset management can benefit any level of management, from the General Manager up to the Chairman. Also, it’ll explore ways to improve the system to make the organization run more efficiently.
          </p>
          <img src={Event5} alt="website screen" className="w-96 ml-auto m-12 " />
          <p className="p-9 font-medium text-lg text-[#5E5E5E] tracking-widest leading-relaxed capitalize">The session concluded with strong recommendations for expanding the asset management system, aligning with Egypt's Vision 2030 and supporting sustainable water infrastructure.
          </p>
        </div>
      </div>
      <div className="bg-[#F6F6F6]">
        <div className="container py-16">
          <Description title="Progress Meeting on Dutch-Egyptian Cooperation for Water Distribution Improvement" />

          <img src={Event6} alt="Event Image" className="w-96 m-auto" />

          <div className="w-96 mx-auto mt-4 text-left">
            <p className="mb-5 text-[#5E5E5E]">July 2,2024</p>
              <img src={image4} alt="Logos" className="w-16 mt-2" />
          </div>
          <p className="p-9 font-medium text-lg text-[#5E5E5E] tracking-widest leading-relaxed capitalize">As part of the regular meetings for the Joint Cooperation for Applied Research project on water, funded by the Dutch side, one of the projects focuses on developing the water distribution system under the title: "Improvement of Water Distribution in Egypt through Enhanced Management of Water Quantities in Irrigation Channels."
          </p>
          <AboutImageSection
            description="On Tuesday, July 2, 2024, Prof. Dr. Alaa El-Din Abdeen, Vice President of the Center, met with Mr. William Olemmens, the Project Manager, along with the Dutch project team and the center’s team. The meeting aimed to discuss the progress of the project's activities carried out to date."
            image={Event7}
            reverse={true}
          />
               <AboutImageSection
            description="We are delighted at the end of 2024 to share with you a small recap of the Performance Enhancement of Pumping Stations for Irrigation & Drainage (PEPSI) project, one of the research activities within JCAR."
            image={Event8}
          />
           <p className="p-9 font-medium text-lg text-[#5E5E5E] tracking-widest leading-relaxed capitalize">Since the project's inception, PEPSI has focused on enhancement of pumping auxiliary systems by targeting optimal hydraulic design criteria, PEPSI also addressed challenges such as vibration, cavitation and water hammer, aiming to curtail energy consumption. Also, supporting asset management by aiding in the creation of a long-term maintenance and investment blueprint for pumping stations. In this video, we showcase the project's key deliverables, including workshops, field visits, training sessions, interviews, and our contributions to the events held during Cairo Water Week (CWW).

          </p>
        </div>
      </div>
      <ContactUs/>
    </>
  );
}

export default News;
