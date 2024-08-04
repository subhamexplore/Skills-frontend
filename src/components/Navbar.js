import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import img1 from '../assets/images/navbar-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-15 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 mx-[9vw] my-[3vmax]" id="navbar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link to="https://www.zairza.co.in/" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
            <img src={img1} className="h-8" alt="navbarlogo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <NavLink to="/register" className="text-black no-underline bg-blue-50 hover:bg-violet-300 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer">Register</NavLink>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden" 
              aria-controls="navbar-cta" 
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
        </div>
        
        <div className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
          <ul className="flex flex-col font-semibold text-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link to="section2" spy={true} smooth={true} offset={-100} duration={500} className="nav-links block text-white rounded hover:bg-gray-900  md:bg-transparent cursor-pointer">Process</Link>
            </li>
            <li>
              <Link to="section3" spy={true} smooth={true} offset={-80} duration={500} className="nav-links block text-white rounded hover:bg-gray-900  md:bg-transparent cursor-pointer">Timeline</Link>
            </li>
            <li>
              <Link to="section4" spy={true} smooth={true} offset={-50} duration={500} className="nav-links block text-white rounded hover:bg-gray-900  md:bg-transparent cursor-pointer">Perks</Link>
            </li>
            <li>
              <Link to="section5" spy={true} smooth={true} offset={-100} duration={500} className="nav-links block text-white rounded hover:bg-gray-900  md:bg-transparent cursor-pointer">Explore Domains</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
