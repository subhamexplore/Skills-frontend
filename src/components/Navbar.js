import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import img1 from '../assets/images/navbar-logo.png';
import { GrMenu } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Use the current location to determine if the user is on a profile route

  useEffect(() => {
    const checkScrollTop = () => {
      if (document.documentElement.scrollTop > 50) { 
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('scroll', checkScrollTop);

    return () => {
      document.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const handleNavigation = (section) => {
    navigate('/', { state: { section } });
  };

  const handleLogout = () => {
    console.log("Logging out");
    navigate('/signin');
  };

  return (
    <div className="w-full fixed z-50">
      <nav className="h-15 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 mx-[9vw] my-[3vmax]" id="navbar">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-3">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                <img src={img1} className="h-8" alt="navbarlogo" />
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {!location.pathname.includes('/profile') && (
                <NavLink to="/register" className="text-black no-underline bg-blue-50 hover:bg-violet-300 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer">Register</NavLink>
              )}

              {location.pathname.includes('/profile') && (
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 flex items-center gap-1">
                  Logout <BiLogOut className="text-lg"/>
                </button>
              )}
          </div>
          <button 
             onClick={() => setIsMenuOpen(!isMenuOpen)} 
            type="button" 
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-6xl text-white rounded-lg md:hidden" 
            aria-controls="navbar-cta" 
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <GrMenu />
          </button>
          
          <div className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
            <ul className="flex flex-col font-semibold text-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <button onClick={() => handleNavigation('section2')} className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer">Process</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('section3')} className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer">Timeline</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('section4')} className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer">Perks</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('section5')} className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer">Explore Domains</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('section6')} className="nav-links block text-white rounded hover:bg-gray-900 md:bg-transparent cursor-pointer">FAQs</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
