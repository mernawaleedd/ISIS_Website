import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import BackgroundSection from "../Components/BackgroundSection";
import ContactBg from "../assets/images/ContactBg.png";
import Envelope from "../assets/images/Envelope.png";
import MapPin from "../assets/images/MapPin.png";
import PhoneCall from "../assets/images/PhoneCall.png";
import ContactUs from "../Components/ContactUs";
import Frequently from "../Components/Frequently";
import Description from "../Components/Description";
import Plus from "../assets/images/Plus.png";
import minus from "../assets/images/minus.png";
import Map from "../Components/Map";
function ContactPage() {
  return (
    <>
    <div className="animate-on-scroll">
      <BackgroundSection
        bgImage={ContactBg}
        text="We Would Be Happy To Meet You And Learn All About Your Business"
        title="Contact Us Today!"
        textColor="#ffffff"
      />
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto py-16 px-4 grid gap-8 md:grid-cols-3 animate-on-scroll">
        {/* Address Card */}
        <div id="alexandria" className="bg-[#ffffff] rounded-xl shadow-md p-8 text-center space-y-4">
          <div className="flex justify-center">
          <img src={MapPin} alt="MapPin" className="bg-[#24698F] rounded-full p-2" />
          </div>
          <h3 className="text-2xl font-bold text-[#0E2F40]">Address</h3>
          <p className="text-[#5E5E5E]">
            <p className="p-2">Damietta - Nafie St next to Al Mazloum Mosque.</p>
           <p className="p-2">Alexandria - Al Dakhila, Al Gaesh st.</p>
          </p>
        </div>

        {/* Call Us Card */}
        <div id="phone" className="bg-[#ffffff] rounded-3xl shadow-md p-8 text-center space-y-4">
          <div className="flex justify-center">
            <img src={PhoneCall} alt="PhoneCall" className="bg-[#24698F] rounded-full p-2" />
          </div>
          <h3 className="text-2xl font-bold text-[##0E2F40]">Call Us</h3>
          <p className="text-[#5E5E5E]">
            <p className="p-2">057 22 888 44</p>
           <p className="p-2">0155 572 0405</p>
          </p>
        </div>

        {/* Mail Card */}
        <div id="email" className="bg-[#ffffff] rounded-xl shadow-md p-8 text-center space-y-4">
          <div className="flex justify-center">
          <img src={Envelope} alt="Envelope" className="bg-[#24698F] rounded-full p-2" />
          </div>
          <h3 className="text-2xl font-bold text-[#0E2F40]">Mail</h3>
          <p className="text-[#5E5E5E]">
            <p className="p-2">info@mail.isis-eg.com</p>
           <p className="p-2">sales@mail.isis-eg.com</p>
          </p>
        </div>
      </div>
      <div className="animate-on-scroll">
      <ContactUs/>
      </div>
      <div id="damietta" className="animate-on-scroll">
      <Map/>
      </div>
      <div className="bg-[#ffffff] animate-on-scroll py-32">
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

export default ContactPage;
