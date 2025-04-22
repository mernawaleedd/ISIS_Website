import Description from "../Components/Description";
import ProjectDetailesBg from "../assets/images/ProjectDetailesBg.png";
import ClientLogo from "../assets/images/MedLogo.png";
import ProjectDetailesImg from "../assets/images/ProjectDetailesImg.png";
import ContactUs from "../Components/ContactUs";
import ProjectCard from "../Components/ProjectCard";
import MedLogo from "../assets/images/MedLogo.png";
import MED from "../assets/images/MED.png";
import Button from "../Components/MainButton";
import BackgroundSection from "../Components/BackgroundSection";
const ProjectDetailes = () => {
    const cardsData = [
        {
            description: "MED - Mechanical And Electrical Department",
            logo: MedLogo,
            image: MED,
        },
    ];
    return (
        <>
            <div className="container py-16 animate-on-scroll">
                <div className="mt-32">
                <Description title="MED" description="Mechanical and Electrical Department" />
                </div>
                <img src={ProjectDetailesBg} alt="Project Screen" className="m-auto w-[500px] animate-on-scroll" />
                <h3 className="p-2 mb-9 font-semibold text-3xl text-[#0E2F40] animate-on-scroll">Project Overview</h3>
                <p className="p-2 tracking-wide leading-relaxed text-xl text-[#5E5E5E] capitalize animate-on-scroll">
                    MED is a Computerized Maintenance Management System (CMMS) used for managing the
                    maintenance of assets and equipment in companies and organizations. This system helps
                    users track asset quality, schedule maintenance, analyze efficiency, predict failures,
                    and manage spare parts and other critical functions to ensure asset sustainability and
                    technical efficiency.
                </p>
            </div>

            <div className="bg-[#FBFBFB] py-32 animate-on-scroll">
                <div className="max-w-4xl mx-auto text-[#5E5E5E]">
                    {/* Client */}
                    <div className="grid grid-cols-1 md:grid-cols-2 py-4 border-b animate-on-scroll">
                        <div className="font-semibold text-left ">Client</div>
                        <div className="text-right">
                            <img src={ClientLogo} alt="Client Logo" className="w-32 h-auto ml-auto" />
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 py-4 border-b animate-on-scroll">
                        <div className="font-semibold text-left">Timeline</div>
                        <div className="text-right">2023, 6 months</div>
                    </div>

                    {/* Platform */}
                    <div className="grid grid-cols-1 md:grid-cols-2 py-4 border-b animate-on-scroll ">
                        <div className="font-semibold text-left">Platform</div>
                        <div className="text-right">Web</div>
                    </div>

                    {/* Industry */}
                    <div className="grid grid-cols-1 md:grid-cols-2 py-4 border-b animate-on-scroll">
                        <div className="font-semibold text-left">Industry</div>
                        <div className="text-right">Ministry Of Water Resources Irrigation</div>
                    </div>

                    {/* Technology */}
                    <div className="grid grid-cols-1 md:grid-cols-2 py-4 border-b animate-on-scroll">
                        <div className="font-semibold text-left">Technology</div>
                        <div className="flex flex-wrap gap-2 justify-end text-right">
                            {["Html", "CSS", "Java", "React.js", "Node JS", "SQL", "Python"].map((tech, index) => (
                                <span key={index} className="bg-[#F6F6F6] text-sm px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 py-4 border-b animate-on-scroll">
                        <div className="font-semibold text-left">Services</div>
                        <div className="flex flex-wrap gap-2 justify-end text-right">
                            {[
                                "Software Development",
                                "Digital Product Design",
                                "Project Support",
                                "Artificial Intelligence",
                            ].map((service, index) => (
                                <span key={index} className="bg-[#F6F6F6] text-sm px-5 py-3 rounded-full animate-on-scroll">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="container py-16 animate-on-scroll">
                <h3 className="p-2 mb-9 font-semibold text-3xl text-[#0E2F40] animate-on-scroll">The Client</h3>
                <p className="p-2 tracking-wide leading-relaxed text-xl text-[#5E5E5E] capitalize mb-16 animate-on-scroll">
                    The Department of Mechanics and Electricity is one of Egypt’s oldest government entities, originating from the Royal Workshops established by Muhammad Ali Pasha in the early 19th century. Initially focused on blacksmithing, casting, and construction, it evolved under Ismail Pasha’s rule and became the Department of Mechanics in 1905.
                    Renamed in 1925, it played a vital role in Egypt’s industrial and infrastructure development.
                </p>
                <img src={ProjectDetailesImg} alt="Project Detailes Img" className="animate-on-scroll" />
                <h3 className="p-2 mb-9 font-semibold text-3xl text-[#0E2F40] mt-16 animate-on-scroll">The Result</h3>
                <p className="p-2 tracking-wide leading-relaxed text-xl text-[#5E5E5E] capitalize animate-on-scroll">
                    ISIS successfully delivered the MED system, a comprehensive asset management solution designed to streamline operations and enhance efficiency. By integrating predictive maintenance, real-time monitoring, and advanced reporting, the system empowers organizations to optimize asset performance and reduce operational risks. With a user-friendly interface and seamless data accessibility, the MED system ensures informed decision-making, enabling businesses to achieve greater reliability, cost-effectiveness, and long-term sustainability in asset management.
                </p>
            </div>
            <div className="bg-[#F6F6F6] py-32 animate-on-scroll">
                <h3 className="p-2 mb-9 font-semibold text-3xl text-[#0E2F40] mt-16 container">More Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center container">
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

                <div className="flex justify-center mt-16 animate-on-scroll">
                    <Button label="View More" />
                </div>
            </div>
            <div className="animate-on-scroll">
            <ContactUs />
            </div>
        </>
    );
};

export default ProjectDetailes;
