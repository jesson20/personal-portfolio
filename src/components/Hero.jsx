import React, { useState, useEffect } from 'react';
import profile1 from "../assets/jessonGraduate.jpeg";
import profile2 from "../assets/jessonBarong.jpeg";
import profile3 from "../assets/jessonBarongSit.jpeg";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const images = [profile1, profile2, profile3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-24 pb-12 border-b border-neutral-900 lg:pt-32 lg:pb-20">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <motion.img
              key={currentImageIndex} // trigger animation on image change
              className="rounded-2xl mt-6 w-52 h-52 lg:w-80 lg:h-80 object-cover border border-neutral-800 shadow-xl"
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              src={images[currentImageIndex]}
              alt="profilePic"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 pb-4 lg:pb-8 pt-6 lg:pt-0">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h3
              variants={container(0.5)}
              whileInView="visible"
              initial="hidden"
              className="text-lg font-light tracking-tight text-neutral-400 mt-2 lg:text-xl"
            >
              Hello world,
            </motion.h3>
            <motion.h1
              variants={container(0.8)}
              whileInView="visible"
              initial="hidden"
              className="pb-2 text-4xl font-bold tracking-tight mt-1 lg:text-6xl text-center lg:text-left text-white"
            >
              I'm Jesson!
            </motion.h1>
            <motion.span
              variants={container(1)}
              whileInView="visible"
              initial="hidden"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl lg:text-2xl font-semibold tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.div
              variants={container(1.2)}
              whileInView="visible"
              initial="hidden"
              className="mt-6 flex items-center justify-center gap-5"
            >
              <a
                href="https://www.linkedin.com/in/jesson-maurice-antiporda-bb5617278/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin className="text-2xl lg:text-3xl" />
              </a>
              <a
                href="https://github.com/jesson20"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <FaGithub className="text-2xl lg:text-3xl" />
              </a>
              <a
                href="https://www.facebook.com/jessonmaurice.antiporda"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <FaFacebook className="text-2xl lg:text-3xl" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
