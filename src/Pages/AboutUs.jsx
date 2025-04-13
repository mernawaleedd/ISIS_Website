import AboutUsbg from "../assets/images/AboutUsbg.png";
import BackgroundSection from "../Components/BackgroundSection";
import Description from "../Components/Description";
import AboutImageSection from "../Components/AboutImageSection";
import About1 from "../assets/images/About1.png";
import About2 from "../assets/images/About2.png";
import WhyChooseUs from "../Components/WhyChosseUs";
import AboutCardImage from "../assets/images/AboutCardImage.png";
import AboutUsDesImg from "../assets/images/AboutUS-description.png";
import Layer_1 from "../assets/images/Layer_1.png";
import Vector from "../assets/images/Vector.png";
import Icons from "../assets/images/Icons.png";
import AboutCard from "../Components/AboutCard";
import Tool1 from "../assets/images/Tools/tool1.png";
import Tool2 from "../assets/images/Tools/tool2.png";
import Tool3 from "../assets/images/Tools/tool3.png";
import Tool4 from "../assets/images/Tools/tool4.png";
import Tool6 from "../assets/images/Tools/tool6.png";
import Tool7 from "../assets/images/Tools/tool7.png";
import Tool8 from "../assets/images/Tools/tool8.png";
import Tool9 from "../assets/images/Tools/tool9.png";
import Tool10 from "../assets/images/Tools/tool10.png";
import Tool11 from "../assets/images/Tools/tool11.png";
import Tool12 from "../assets/images/Tools/tool12.png";
import Tool13 from "../assets/images/Tools/tool13.png";
import Tool14 from "../assets/images/Tools/tool14.png";
import Tool15 from "../assets/images/Tools/tool15.png";
import Tool16 from "../assets/images/Tools/tool16.png";
import Tool17 from "../assets/images/Tools/tool17.png";
import Tool18 from "../assets/images/Tools/tool18.png";
import Tool20 from "../assets/images/Tools/tool20.png";
import Tool21 from "../assets/images/Tools/tool21.png";
import Tool22 from "../assets/images/Tools/tool22.png";
import Tool23 from "../assets/images/Tools/tool23.png";
import Tool24 from "../assets/images/Tools/tool24.png";
import Tool25 from "../assets/images/Tools/tool25.png";
import Tool26 from "../assets/images/Tools/tool26.png";
import Plus from "../assets/images/Plus.png";
import minus from "../assets/images/minus.png";
import Frequently from "../Components/Frequently";
function AboutUs() {
  const values = [
    {
      title: "Innovation",
      description: "Pioneering the future with advanced technology and AI-driven solutions.",
    },
    {
      title: "Collaboration",
      description: "Fostering teamwork within our company and strong partnerships with our clients.",
    },
    {
      title: "Security",
      description: "Ensuring robust, secure, and high-performance solutions.",
    },
    {
      title: "Integrity",
      description: "Conducting business with transparency, ethics, and trust.",
    },
  ];
  const cards = [
    {
      title: "Innovation",
      description: "Pioneering the future with advanced technology and AI-driven solutions.",
      icon: AboutCardImage,
    },
    {
      title: "Collaboration",
      description: "Fostering teamwork within our company and strong partnerships with our clients.",
      icon: AboutCardImage,
    },
    {
      title: "Security",
      description: "Ensuring robust, secure, and high-performance solutions.",
      icon: AboutCardImage,
    },
    {
      title: "Integrity",
      description: "Conducting business with transparency, ethics, and trust.",
      icon: AboutCardImage,
    },
  ];
  return (
    <>
      <BackgroundSection bgImage={AboutUsbg} text="I Help You develop software solution for your business" title="About I.S.I.S?"  />
      <div className="container mx-auto px-4">
        <div className="my-32">
          <Description
            title="We build robust software solutions with highly creative and dedicated offshore teams!"
            description="Founded in 2012, ISIS (Integrated Solutions for Industrial Services) has been delivering advanced digital solutions for over ten years. With a team of 11–50 skilled professionals, we specialize in custom software, AI-powered automation, enterprise solutions, cybersecurity, and cloud integration—with a strong focus on industrial services."
          />
          <img
            className="mx-auto w-96 my-16"
            src={AboutUsDesImg}
            alt="About Card"
          />
          <Description
            description="Our expertise spans multiple departments, including Frontend Development, Backend Development, AI Development, Sales, IT & Cybersecurity, Digital Product Design (UI/UX), and Technical Support. This well-rounded structure allows us to develop scalable, secure, and high-performance applications that drive efficiency and innovation across industries."
          />
        </div>
        <AboutImageSection 
        title="Our Mission" 
        description="To be a global leader in AI-powered industrial solutions, transforming businesses with smart, secure, and efficient digital technologies." 
        image={About2}
        reverse={true} 
      />
        <AboutImageSection 
        title="Our Vision" 
        description="We empower businesses with intelligent, data-driven solutions that enhance efficiency, reduce costs, and improve operational performance. By integrating AI, automation, and cybersecurity, we create cutting-edge systems that help industries succeed in an evolving digital world." 
        image={About1} 
      />
        <AboutImageSection image1={About1} image2={About2} />
      </div>

      <WhyChooseUs />
      <section className="container mx-auto px-4 my-28">
        <Description title="I.S.I.S Values" />
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {cards.map((card, index) => (
            <AboutCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </section>
      <div className="bg-[#F6F6F6]">
  <div className="container mx-auto p-6 md:p-16 lg:p-28">
    <Description title="People are the key to success" />
    <div className="flex flex-col gap-12 mt-16 p-3">
      {/* Card 1 - Left */}
      <div className="flex justify-start">
        <div className="bg-[#ffffff] rounded-3xl shadow-md p-8 max-w-2xl flex gap-3 w-full sm:w-auto">
          <div className="w-72">
            <img src={Layer_1} alt="Layer_1" />
          </div>
          <p className="text-[#5E5E5E] leading-relaxed font-semibold">
          At I.S.I.S, we firmly believe that the strength of our team lies in the unique talents and skills of each individual. That's why we invest a great deal of time in carefully selecting and hiring the best industry talent, enabling us to secure unmatched value for our clients while fostering a thriving workplace where team members can truly flourish.
          </p>
        </div>
      </div>

      {/* Card 2 - Right */}
      <div className="flex justify-end">
        <div className="bg-[#ffffff] rounded-3xl shadow-md p-8 max-w-2xl flex gap-3 w-full sm:w-auto">
          <div className="w-72">
            <img src={Icons} alt="Icons" />
          </div>
          <p className="text-[#5E5E5E] leading-relaxed font-semibold">
          At I.S.I.S, we are committed to building a culture of innovation, collaboration, and excellence. By empowering our team with the latest tools, continuous learning opportunities, and a supportive work environment. This dedication not only drives our success but also enables us to deliver exceptional solutions that exceed our clients’ expectations. 
          </p>
        </div>
      </div>

      {/* Card 3 - Left */}
      <div className="flex justify-start">
        <div className="bg-[#ffffff] rounded-3xl shadow-md p-8 max-w-2xl flex gap-3 w-full sm:w-auto">
          <div className="w-72">
            <img src={Vector} alt="Vector" />
          </div>
          <p className="text-[#5E5E5E] leading-relaxed font-semibold">
          At I.S.I.S, we are dedicated to creating a dynamic and inspiring workplace where talent thrives, ideas flourish, and innovation drives progress. By embracing diversity And fostering teamwork. we build a strong foundation for both individual and collective success. Our passion for excellence ensures that we consistently deliver outstanding results for our clients.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-[#ffffff] py-32 p-6">
    <Description title="Technology and tools used in I.S.I.S projects" />
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 container mx-auto p-6">
      <img src={Tool1} alt="tool" />
      <img src={Tool2} alt="tool" />
      <img src={Tool3} alt="tool" />
      <img src={Tool4} alt="tool" />
      <img src={Tool6} alt="tool" />
      <img src={Tool7} alt="tool" />
      <img src={Tool8} alt="tool" />
      <img src={Tool9} alt="tool" />
      <img src={Tool10} alt="tool" />
      <img src={Tool11} alt="tool" />
      <img src={Tool12} alt="tool" />
      <img src={Tool13} alt="tool" />
      <img src={Tool14} alt="tool" />
      <img src={Tool15} alt="tool" />
      <img src={Tool16} alt="tool" />
      <img src={Tool17} alt="tool" />
      <img src={Tool18} alt="tool" />
      <img src={Tool20} alt="tool" />
      <img src={Tool21} alt="tool" />
      <img src={Tool22} alt="tool" />
      <img src={Tool23} alt="tool" />
      <img src={Tool24} alt="tool" />
      <img src={Tool25} alt="tool" />
      <img src={Tool26} alt="tool" />
    </div>
  </div>
</div>

<div className="bg-[#ffffff]">
  <Description title="Frequently asked questions" />
  <div className="px-6 container mt-16 md:mt-28">
    {/* FAQ items */}
    <div className="m-3">
      <Frequently
        plusIcon={Plus}
        minusIcon={minus}
        iconBgColor="bg-[#24698F]"
        iconOpenBgColor="bg-[#ffffff]"
        text="What Industries And Businesses Do You Collaborate With?"
        description="We partner with industrial service providers, manufacturing firms, government organizations, and enterprises that require advanced maintenance management (CMMS), risk-based asset management (EAM), AI-driven automation, and cybersecurity solutions. Our expertise spans multiple sectors where operational efficiency and security are critical."
      />
    </div>
    <div className="m-3">
      <Frequently
        plusIcon={Plus}
        minusIcon={minus}
        iconBgColor="bg-[#24698F]"
        iconOpenBgColor="bg-[#ffffff]"
        text="How Do You Ensure The Confidentiality And Security?"
        description="Security is at the core of everything we build. We implement enterprise-grade encryption, strict access controls, and advanced security measures such as firewall protection (Sophos), secure cloud environments, and compliance-driven policies to safeguard client data and maintain regulatory standards."
      />
    </div>
    <div className="m-3">
      <Frequently
        plusIcon={Plus}
        minusIcon={minus}
        iconBgColor="bg-[#24698F]"
        iconOpenBgColor="bg-[#ffffff]"
        text="What Is The Ideal Team Size For Handling A Project?"
        description="The required team size varies based on the project's scale and complexity. A customized digital solution may involve:
Project Manager – Oversees planning and execution.
CMMS/EAM Specialists – Optimize maintenance and asset management workflows.
AI Engineers – Develop intelligent automation solutions.
Software Developers (Frontend & Backend) – Implement system architecture.
UI/UX Designers – Ensure seamless user interactions.
Cybersecurity Experts – Maintain system integrity and protection.
Quality Assurance (QA) Specialists – Conduct testing and performance validation."
      />
    </div>
    <div className="m-3">
      <Frequently
        plusIcon={Plus}
        minusIcon={minus}
        iconBgColor="bg-[#24698F]"
        iconOpenBgColor="bg-[#ffffff]"
        text="How Do You Ensure Successful Project Execution?"
        description="We follow a structured methodology to ensure project success:
✔ Needs Assessment – Understanding business objectives and technical requirements.
✔ Agile Development Approach – Delivering solutions in phases with continuous improvements.
✔ Performance Testing – Ensuring reliability and scalability before deployment.
✔ Regular Client Collaboration – Keeping clients involved at every stage.
✔ Post-Deployment Support – Providing ongoing maintenance and optimization."
      />
    </div>
    <div className="m-3">
      <Frequently
        plusIcon={Plus}
        minusIcon={minus}
        iconBgColor="bg-[#24698F]"
        iconOpenBgColor="bg-[#ffffff]"
        text="Do You Rely On Third-Party Outsourcing For Development?"
        description="No, we maintain complete in-house control over development, security, and project execution. This guarantees high-quality standards, confidentiality, and seamless collaboration throughout the project lifecycle."
      />
    </div>
    <div className="m-3">
      <Frequently
        plusIcon={Plus}
        minusIcon={minus}
        iconBgColor="bg-[#24698F]"
        iconOpenBgColor="bg-[#ffffff]"
        text="Do You Provide Technical Support And Maintenance After Project Completion?"
        description="Yes, we offer long-term support, system upgrades, and technical maintenance services to ensure optimal performance, security, and adaptability of our solutions."
      />
    </div>
    <div className="m-3">
      <Frequently
        plusIcon={Plus}
        minusIcon={minus}
        iconBgColor="bg-[#24698F]"
        iconOpenBgColor="bg-[#ffffff]"
        text="What Technologies pPower your Solutions?"
        description="Our technology stack is built for scalability, security, and AI-driven efficiency, including:
Programming & Frameworks: Python, JavaScript, Node.js, React, .NET
Database & Analytics: SQL Server, Power BI, Stimulsoft
AI & Automation: Ollama, machine learning models
Security & Infrastructure: SCADA, Sophos Firewall, NGINX, IIS"
      />
    </div>
    <div className="m-3 mb-16">
      <Frequently
        plusIcon={Plus}
        minusIcon={minus}
        iconBgColor="bg-[#24698F]"
        iconOpenBgColor="bg-[#ffffff]"
        text="What’s The First Step In Working With You?"
        description="The process begins with a consultation session where we assess your needs, recommend a tailored solution, and outline a roadmap for implementation. Contact us to schedule a discovery call and explore how we can optimize your business operations."
      />
    </div>
  </div>
</div>

    </>
  );
}

export default AboutUs;
