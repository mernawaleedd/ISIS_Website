import BackgroundSection from "../Components/BackgroundSection";
import ServicesBg from "../assets/images/ServicesBg.png";
import AboutImageSection from "../Components/AboutImageSection";
import Software from "../assets/images/Software.png";
import Check from "../assets/images/Check.png";
import Artificial_Intelligence from "../assets/images/Artificial_Intelligence.png";
import ProjectSupport from "../assets/images/Project-Support.png";
import DigitalProduct from "../assets/images/Digital-Product.png";
import CloudSolution from "../assets/images/Cloud-Solution.png";
import ContactForm from "../Components/ContactUs";
export default function Services() {
    return (
        <>
            <div className="animate-on-scroll">
            <BackgroundSection bgImage={ServicesBg} text="Supporting your project at each stage; from initial discovery, design and development to post-production support and maintenance" title="Our Services" />
            </div>
            <div className="bg-[#ffffff] py-16 animate-on-scroll">
                <div className="container">
                    <AboutImageSection
                        title="Software Development"
                        description="Our custom software development service is where lines of code merge with creativity, resulting in applications that drive your goals forward. From conceptualisation to coding, testing, and deployment, our skilled developers craft robust and user-friendly custom software tailored to your needs."
                        image={Software}
                        reverse={true}
                    />
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Web Development</h4>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Mobile App Development</h4>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Customer Relationship Management (CRM)</h4>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Enterprise Resource Planning (ERP)</h4>
                    </div>
                    <div className="flex gap-3 px-5 mb-32 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Website Maintenance And Support</h4>
                    </div>
                </div>
            </div>
            {/* Artificial Intelligence section */}
            <div className="bg-[#F6F6F6] py-16 animate-on-scroll">
                <div className="container">
                    <AboutImageSection
                        title="Artificial Intelligence "
                        description="Artificial Intelligence
Our tailor-made artificial intelligence app development services can be customised to align with your specific requirements, allowing us to arrive at the optimal solution.
Machine Learning Model Development and Deployment
Optical Character Recognition (OCR)
Natural Language Processing (NLP) Solutions
Chatbot and Virtual Assistant Development
Computer Vision and Image Recognition
Voice and Speech Recognition Applications
Predictive Analytics and Data Forecasting
AI-driven Automation and Process Optimisation
Data Mining and Pattern Recognition
Sentiment Analysis and Opinion Mining
AI-powered IoT Solutions
AI Integration with Existing Systems"
                        image={Artificial_Intelligence}
                    />
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Machine Learning Model Development and Deployment</h4>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Optical Character Recognition (OCR)</h4>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Natural Language Processing (NLP) Solutions</h4>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Chatbot and Virtual Assistant Development</h4>
                    </div>
                    <div className="flex gap-3 px-5  py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Computer Vision and Image Recognition</h4>
                    </div>
                    <div className="flex gap-3 px-5  py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Voice and Speech Recognition Applications</h4>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Predictive Analytics and Data Forecasting</h4>
                    </div>
                    <div className="flex gap-3 px-5  py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">AI-driven Automation and Process Optimisation</h4>
                    </div>
                    <div className="flex gap-3 px-5  py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Data Mining and Pattern Recognition
                        </h4>
                    </div>
                    <div className="flex gap-3 px-5  py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Sentiment Analysis and Opinion Mining</h4>
                    </div>
                    <div className="flex gap-3 px-5  py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">AI-powered IoT Solutions</h4>
                    </div>
                    <div className="flex gap-3 px-5 mb-32 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">AI Integration with Existing Systems</h4>
                    </div>
                </div>
            </div>
            {/* Digital Product Design section */}
            <div className="bg-[#ffffff] py-16 animate-on-scroll">
                <div className="container">
                    <AboutImageSection
                        title="Digital Product Design "
                        description="We turn ideas into immersive digital experiences. Our team of innovative designers are experts at seamlessly blending aesthetics and functionality. From initial brainstorming to user-focused prototypes, we're here to transform your vision into a compelling digital experience."
                        image={DigitalProduct}
                        reverse={true}
                    />
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">User Experience Design (UX)</h4>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">User Interface Design (UI)</h4>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Design Systems</h4>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Prototyping</h4>
                    </div>
                    <div className="flex gap-3 px-5 mb-32 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Branding</h4>
                    </div>
                </div>
            </div>
            {/* Cloud Solutions & System Integration */}
            <div className="bg-[#F6F6F6] py-16 animate-on-scroll">
                <div className="container">
                    <AboutImageSection
                        title="Cloud Solutions & System Integration "
                        description="We help businesses migrate to the cloud, optimize cloud infrastructure, and integrate various software systems for smooth operations."
                        image={CloudSolution}
                    />
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Cloud Migration</h4>
                    </div>
                    <div className="flex gap-3 px-5  py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">NGINX</h4>
                    </div>
                    <div className="flex gap-3 px-5  py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Internet Information Services (IIS)</h4>
                    </div>
                    <div className="flex gap-3 px-5  py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">CyberSecurity</h4>
                    </div>
                    <div className="flex gap-3 px-5  py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Seamless Software Integration</h4>
                    </div>
                    <div className="flex gap-3 px-5 mb-32 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Integrate Solutions</h4>
                    </div>
                </div>
            </div>
            {/* Project Support */}
            <div className="bg-[#ffffff] py-16 animate-on-scroll">
                <div className="container">
                    <AboutImageSection
                        title="Project Support "
                        description="Every digital endeavour needs a strong foundation and ongoing care. Our project support service ensures your project's success at every turn. Our experienced team collaborates seamlessly to manage, validate, and fine-tune your project from inception to delivery and beyond."
                        image={ProjectSupport}
                        reverse={true}
                    />
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Technical Maintenance & Support</h4>
                    </div>
                    <div className="flex gap-3 px-5 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Project Management</h4>
                    </div>
                    <div className="flex gap-3 px-5 mb-32 py-2">
                        <img className="w-6" src={Check} alt="check" />
                        <h4 className="text-lg font-semibold text-[#0E2F40]">Quality Assurance</h4>
                    </div>
                </div>
            </div>
            <div className="animate-on-scroll">
               <ContactForm/>
               </div>
        </>
    )
};