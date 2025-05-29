import BackgroundSection from "../Components/BackgroundSection";
import ServicesBg from "../assets/images/ServicesBg.png";
import AboutImageSection from "../Components/AboutImageSection";
import Software from "../assets/images/Software.png";
import Artificial_Intelligence from "../assets/images/Artificial_Intelligence.png";
import DigitalProduct from "../assets/images/Digital-Product.png";
import CloudSolution from "../assets/images/Cloud-Solution.png";
import ContactForm from "../Components/ContactUs";
import CheckList from "../Components/checkList";

export default function Services() {
    return (
        <>
            <div className="animate-on-scroll">
                <BackgroundSection
                    bgImage={ServicesBg}
                    text="Supporting your project at each stage; from initial discovery, design and development to post-production support and maintenance"
                    title="Our Services"
                />
            </div>

            {/* Software Development */}
            <div id="software-development" className="bg-[#ffffff] py-16 animate-on-scroll">
                <div className="container">
                    <AboutImageSection
                        title="Software Development"
                        description="Our custom software development service is where lines of code merge with creativity, resulting in applications that drive your goals forward. From conceptualisation to coding, testing, and deployment, our skilled developers craft robust and user-friendly custom software tailored to your needs."
                        image={Software}
                        reverse={true}
                    />
                    <CheckList items={[
                        "Web Development",
                        "Mobile App Development",
                        "Customer Relationship Management (CRM)",
                        "Enterprise Resource Planning (ERP)",
                        "Website Maintenance And Support"
                    ]} />
                </div>
            </div>

            {/* Artificial Intelligence */}
            <div id="artificial-intelligence" className="bg-[#F6F6F6] py-16 animate-on-scroll">
                <div className="container">
                    <AboutImageSection
                        title="Artificial Intelligence"
                        description="Our tailor-made artificial intelligence app development services can be customised to align with your specific requirements, allowing us to arrive at the optimal solution."
                        image={Artificial_Intelligence}
                    />
                    <CheckList items={[
                        "Machine Learning Model Development and Deployment",
                        "Optical Character Recognition (OCR)",
                        "Natural Language Processing (NLP) Solutions",
                        "Chatbot and Virtual Assistant Development",
                        "Computer Vision and Image Recognition",
                        "Voice and Speech Recognition Applications",
                        "Predictive Analytics and Data Forecasting",
                        "AI-driven Automation and Process Optimisation",
                        "Data Mining and Pattern Recognition",
                        "Sentiment Analysis and Opinion Mining",
                        "AI-powered IoT Solutions",
                        "AI Integration with Existing Systems"
                    ]} />
                </div>
            </div>

            {/* Digital Product Design */}
            <div id="digital-product-design" className="bg-[#ffffff] py-16 animate-on-scroll">
                <div className="container">
                    <AboutImageSection
                        title="Digital Product Design"
                        description="We turn ideas into immersive digital experiences. Our team of innovative designers are experts at seamlessly blending aesthetics and functionality. From initial brainstorming to user-focused prototypes, we're here to transform your vision into a compelling digital experience."
                        image={DigitalProduct}
                        reverse={true}
                    />
                    <CheckList items={[
                        "User Experience Design (UX)",
                        "User Interface Design (UI)",
                        "Design Systems",
                        "Prototyping",
                        "Branding"
                    ]} />
                </div>
            </div>

            {/* Cloud Solutions & System Integration */}
            <div id="cloud-solutions" className="bg-[#F6F6F6] py-16 animate-on-scroll">
                <div className="container">
                    <AboutImageSection
                        title="Cloud Solutions & System Integration"
                        description="We help businesses migrate to the cloud, optimize cloud infrastructure, and integrate various software systems for smooth operations."
                        image={CloudSolution}
                    />
                    <CheckList items={[
                        "Cloud Migration",
                        "NGINX",
                        "Docker & Kubernetes",
                        "API Development & Integration",
                        "Microservices Architecture",
                        "DevOps Implementation"
                    ]} />
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-16 animate-on-scroll">
                <div className="container">
                    <ContactForm />
                </div>
            </div>
        </>
    );
}
