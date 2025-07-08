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
      <nav className="bg-black  rounded-3xl border border-gray-500 top-0 left-0 w-full mb-96 flex items-center justify-between fixed px-8 py-3 lg:px-60 lg:py-4">
        <div className="flex flex-shrink-0 items-center">
          <h6 className="flex items-center gap-2 font-bold text-lg lg:text-4xl hover:text-indigo-900 duration-500">
            <a href="#Intro" className="flex items-center gap-2">
              <img
                src={Logo}
                alt="JMA Logo"
                className="w-12 lg:w-16 hover:opacity-80 duration-500"
              />
              JMA
            </a>
          </h6>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex items-center justify-center gap-4 mr-5 text-2xl">
            <a className=" hover:text-indigo-900 duration-500" href="#About">About</a>
            <a className=" hover:text-indigo-900 duration-500" href="#Experiences">Experiences</a>
             <a className=" hover:text-indigo-900 duration-500" href="#Projects">Projects</a>
            <a className=" hover:text-indigo-900 duration-500" href="#TSkills">Skills</a>
            <a className=" hover:text-indigo-900 duration-500" href="#Contact">Contacts</a>
            <a className="flex items-center gap-1 hover:text-indigo-900 duration-500" href="https://drive.google.com/file/d/1gZEK8TB4yX1EjJBjjewgxfyzvouTNVpt/view?usp=sharing" target="_blank"
               rel="noopener noreferrer">Resume <FaExternalLinkAlt /></a>
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
        <ul className="md:hidden flex flex-col items-center fixed top-14 left-0 w-full backdrop-filter backdrop-blur border rounded-lg shadow-lg py-2">
          <li className="py-2">
            <a href="#About" className=" block text-center w-full" onClick={toggleMenu}>About</a>
          </li>
          <li className="py-2">
            <a href="#TSkills" className=" block text-center w-full" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="py-2">
            <a href="#Projects" className=" block text-center w-full" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="py-2">
            <a href="#Contact" className=" block text-center w-full" onClick={toggleMenu}>Contacts</a>
          </li>
          <li className="py-2">
            <a href="https://drive.google.com/file/d/1YoSjwMHYgbgnaKpoaGO_i9Ys4qfjDqeV/view?usp=sharing" target="_blank"
               rel="noopener noreferrer" className=" flex items-center gap-1 w-full">Resume <FaExternalLinkAlt /> </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
