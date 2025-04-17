import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const BgWithAnimation = ({ bgImage }) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5,
      }
    );
  }, []);

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

      <div className="absolute inset-0 flex flex-col justify-center items-start px-16 text-left">
        <h1
          className="text-4xl font-bold text-[#0E2F40] leading-snug space-y-2"
          ref={textRef}
        >
          <span className="text-[#24698F]">I</span>ntegrated{" "}
          <span className="text-[#24698F]">S</span>olution{" "}
          <span className="text-[#24698F]">F</span>or
          <br />
          <span className="text-[#24698F]">I</span>ndustrial{" "}
          <span className="text-[#24698F]">S</span>ervices
        </h1>
      </div>
    </div>
  );
};

export default BgWithAnimation;
