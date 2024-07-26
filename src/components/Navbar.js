import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../assets/images/navbar-logo.png';

const Navbar = () => {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-15 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 mx-[9vw] my-[3vmax]" id="navbar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link to="https://www.zairza.co.in/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={img1} className="h-8" alt="navbarlogo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-black bg-blue-50 hover:bg-violet-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Register</button>
            {/* Toggle button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700" 
              aria-controls="navbar-cta" 
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
        </div>
        {/* Conditional rendering based on screen size and menu state */}
        <div className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
          <ul className="flex flex-col font-semibold text-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <Link to='#' id="nav-links" className="block text-white rounded hover:bg-gray-900  md:bg-transparent">Process</Link>
            </li>
            <li>
              <Link to='#' id="nav-links" className="block text-white rounded hover:bg-gray-900  md:bg-transparent ">Timeline</Link>
            </li>
            <li>
              <Link to='#' id="nav-links" className="block text-white rounded hover:bg-gray-900  md:bg-transparent">Perks</Link>
            </li>
            <li>
              <Link to='#' id="nav-links" className="block text-white rounded hover:bg-gray-900  md:bg-transparent">Explore Domains</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
