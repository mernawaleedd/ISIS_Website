import React from "react";
import Typing from "react-typing-effect";

const BgWithAnimation = ({ bgImage }) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-90"></div>
      {/* Typing Text aligned to the left */}
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 text-left">
        <Typing
          text={["Integrated Solution For Industrial Services"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
          className="text-4xl font-bold text-[#0E2F40] px-16"
        />
      </div>
    </div>
  );
};

export default BgWithAnimation;
