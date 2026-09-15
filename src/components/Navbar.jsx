import React, { useState } from 'react';
import { FaExternalLinkAlt, FaMoon, FaSun } from 'react-icons/fa';
import Logo from "../assets/JMAlogo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <div>
      <nav className="bg-black/90 backdrop-blur-md border-b border-neutral-800 fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 lg:px-20 lg:py-4">
        <div className="flex flex-shrink-0 items-center">
          <h6 className="flex items-center gap-2 font-bold text-lg lg:text-2xl hover:text-indigo-400 duration-300">
            <a href="#Intro" className="flex items-center gap-2">
              <img
                src={Logo}
                alt="JMA Logo"
                className="w-8 lg:w-10 hover:opacity-80 duration-300"
              />
              JMA
            </a>
          </h6>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex items-center justify-center gap-6 text-sm lg:text-base font-medium">
            <a className="hover:text-indigo-400 transition-colors duration-300" href="#About">About</a>
            <a className="hover:text-indigo-400 transition-colors duration-300" href="#Experiences">Experiences</a>
            <a className="hover:text-indigo-400 transition-colors duration-300" href="#Projects">Projects</a>
            <a className="hover:text-indigo-400 transition-colors duration-300" href="#Education">Education</a>
            <a className="hover:text-indigo-400 transition-colors duration-300" href="#TSkills">Skills</a>
            <a className="hover:text-indigo-400 transition-colors duration-300" href="#Contact">Contacts</a>
            <a className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors duration-300" href="https://drive.google.com/file/d/1GXCDHf12ZUEn9Fy146S5IvqFkpW7J_PN/view?usp=sharing" target="_blank"
               rel="noopener noreferrer">Resume <FaExternalLinkAlt className="text-xs" /></a>
          </ul>
         
          <div className="md:hidden ml-6 mr-2 mt-1">
            <button className="" onClick={toggleMenu}>
              {isMenuOpen ? (
                // Close (X) button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  className="w-6 h-7"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  className="w-6 h-7"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
        
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center fixed top-16 left-0 w-full bg-black/95 backdrop-blur-lg border-b border-neutral-800 shadow-xl py-4 z-40">
          <li className="py-2">
            <a href="#About" className="block text-center w-full hover:text-indigo-400" onClick={toggleMenu}>About</a>
          </li>
          <li className="py-2">
            <a href="#Experiences" className="block text-center w-full hover:text-indigo-400" onClick={toggleMenu}>Experiences</a>
          </li>
          <li className="py-2">
            <a href="#Projects" className="block text-center w-full hover:text-indigo-400" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="py-2">
            <a href="#Education" className="block text-center w-full hover:text-indigo-400" onClick={toggleMenu}>Education</a>
          </li>
          <li className="py-2">
            <a href="#TSkills" className="block text-center w-full hover:text-indigo-400" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="py-2">
            <a href="#Contact" className="block text-center w-full hover:text-indigo-400" onClick={toggleMenu}>Contacts</a>
          </li>
          <li className="py-2">
            <a href="https://drive.google.com/file/d/1GXCDHf12ZUEn9Fy146S5IvqFkpW7J_PN/view?usp=sharing" target="_blank"
               rel="noopener noreferrer" className="flex items-center gap-1.5 justify-center w-full text-indigo-400 hover:text-indigo-300">Resume <FaExternalLinkAlt className="text-xs" /> </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
