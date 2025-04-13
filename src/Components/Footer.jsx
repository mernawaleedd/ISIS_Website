import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import linkedIn from '../assets/images/LinkedIn.png';
import facebook from '../assets/images/Facebook.png';

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F6] py-8 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 space-y-6 md:space-y-0">
        <div>
          <h3 className="font-semibold mb-4 text-[#0E2F40]">Explore</h3>
          <ul className="space-y-2 text-[#5E5E5E]">
            <li>Home</li>
            <li>About I.S.I.S</li>
            <li>Services</li>
            <li>Projects</li>
            <li>News</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-[#0E2F40]">Services</h3>
          <ul className="space-y-2 text-[#5E5E5E]">
            <li>Software Development</li>
            <li>Artificial Intelligence</li>
            <li>Digital Product Design</li>
            <li>Cloud Solutions & System Integration</li>
            <li>Project Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-[#0E2F40]">Contact Us</h3>
          <ul className="space-y-2 text-[#5E5E5E]">
            <li>Damietta - Nafie St next to Al Mazloum Mosque</li>
            <li>Alexandria - Al Dakhila, Al Gaesh st</li>
            <li>057 2288844</li>
            <li>Isis@Mail.Isis-Eg.Com</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4 text-sm space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-[#5E5E5E]">
          <span>Terms And Conditions</span>
          <span>Privacy Policy</span>
          <span>Security</span>
        </div>

        <span className="text-center md:text-left">© 2025 I.S.I.S | All Rights Reserved</span>

        <div className="flex justify-center space-x-4">
          <img src={linkedIn} alt="linkedin" className="w-8 h-8 md:w-12 md:h-12" />
          <img src={facebook} alt="facebook" className="w-8 h-8 md:w-12 md:h-12" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
