const AboutCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center p-6  rounded-3xl shadow-lg bg-[#ffffff] w-60 text-center hover:scale-105 transition-transform duration-300">
      {/* Icon */}
      <div className="mb-4">
        <img
          src={Icon}
          alt={title}
          className="w-16 h-16 text-blue-500 animate-move-up-down" // Apply custom animation here
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-6 text-[#0E2F40]">{title}</h3>

      {/* Description */}
      <p className="text-[#5E5E5E]">{description}</p>
    </div>
  );
};

export default AboutCard;
