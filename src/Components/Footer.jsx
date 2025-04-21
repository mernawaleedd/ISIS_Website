import React from 'react';
import { NavLink } from 'react-router-dom';
import facebook from "../assets/images/facebook.png";
import linkedIn from "../assets/images/linkedIn.png";
const Footer = () => {
  return (
    <footer className="bg-[#F6F6F6] pt-8 px-4 md:px-16">
      {/* Top part with Links */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 space-y-6 md:space-y-0">
        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-4 text-[#0E2F40]">Explore</h3>
          <ul className="space-y-2 text-[#5E5E5E]">
            <li className='py-1'>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'text-[#0E2F40] font-semibold' : 'hover:text-[#24698F]'
                }
              >
                Home
              </NavLink>
            </li>
            <li className='py-1'>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? 'text-[#0E2F40] font-semibold' : 'hover:text-[#24698F]'
                }
              >
                About I.S.I.S
              </NavLink>
            </li>
            <li className='py-1'>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  isActive ? 'text-[#0E2F40] font-semibold' : 'hover:text-[#0E2F40]'
                }
              >
                Services
              </NavLink>
            </li>
            <li className='py-1'>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  isActive ? 'text-[#0E2F40] font-semibold' : 'hover:text-[#0E2F40]'
                }
              >
                Projects
              </NavLink>
            </li>
            <li className='py-1'>
              <NavLink 
                to="/news" 
                className={({ isActive }) => 
                  isActive ? 'text-[#0E2F40] font-semibold' : 'hover:text-[#0E2F40]'
                }
              >
                News
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
  <h3 className="font-semibold mb-4 text-[#0E2F40]">Services</h3>
  <ul className="space-y-2 text-[#5E5E5E]">
    <a href="#software-development"><li className='py-1 cursor-pointer hover:text-[#24698F] transition'>Software Development</li></a>
    <a href="#artificial-intelligence"><li className='py-1 cursor-pointer hover:text-[#24698F] transition'>Artificial Intelligence</li></a>
    <a href="#digital-product-design"><li className='py-1 cursor-pointer hover:text-[#24698F] transition'>Digital Product Design</li></a>
    <a href="#cloud-solutions"><li className='py-1 cursor-pointer hover:text-[#24698F] transition'>Cloud Solutions & System Integration</li></a>
    <a href="#project-support"><li className='py-1 cursor-pointer hover:text-[#24698F] transition'>Project Support</li></a>
  </ul>
</div>


 {/* Contact Us */}
<div>
  <h3 className="font-semibold mb-4 text-[#0E2F40]">Contact Us</h3>
  <ul className="space-y-2 text-[#5E5E5E]">
    <a href="#damietta"><li className='py-1 cursor-pointer hover:text-[#24698F] transition'>Damietta - Nafie St next to Al Mazloum Mosque</li></a>
    <a href="#alexandria"><li className='py-1 cursor-pointer hover:text-[#24698F] transition'>Alexandria - Al Dakhila, Al Gaesh st</li></a>
    <a href="#phone"><li className='py-1 cursor-pointer hover:text-[#24698F] transition'>057 2288844</li></a>
    <a href="#email"><li className='py-1 cursor-pointer hover:text-[#24698F] transition'>Isis@Mail.Isis-Eg.Com</li></a>
  </ul>
</div>

      </div>

      {/* Social icons */}
      <div className="flex justify-end mb-4">
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <div className="w-12 hover:transition-transform duration-500 transform hover:scale-110">
            <img src={facebook} alt="facebook" />
            </div>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="w-12 hover:transition-transform duration-300 transform hover:scale-110">
              <img src={linkedIn} alt="linkedIn" />
            </div>
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <hr className="border-t border-gray-300 mb-6" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-[#5E5E5E] text-sm pb-6 space-y-4 md:space-y-0">
        <div className="flex space-x-4">
          <p>Terms And Conditions</p>
          <p>Privacy Policy</p>
          <p>Security</p>
        </div>
        <p>© 2025 I.S.I.S | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
