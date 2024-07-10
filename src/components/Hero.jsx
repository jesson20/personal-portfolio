import React from 'react'
import profilePic from "../assets/jessonProfile.jpg";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";


const container = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay},
    },
});

const Hero = () => {
  return (
    <div className="mt-28 border-b border-neutral-900 pb-4 lg:mt-48">
        <div className="flex flex-wrap">
            <div className=" w-full lg:w-1/2">
            <div className="flex justify-center">
                    <motion.img 
                    className='rounded-full lg:rounded-2xl mt-10 max-w-36 lg:max-w-lg'
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1, delay: 0 }}
                    src={profilePic} alt="profilePic" />
                </div>
            </div>
            <div className="w-full lg:w-1/2 pb-8 lg:pb-32 pt-0 lg:pt-10">

            <div className="flex flex-col items-center lg:items-start pb-10 ">
                    <motion.h3 
                    variants={container(0.5)}
                    whileInView="visible"
                    initial="hidden"
                    className="text-xl text-left font-thin tracking-tight mt-4
                    lg:mt-28 lg:text-2xl">Hello world, </motion.h3>
                    <motion.h1 
                    variants={container(0.8)}
                    whileInView="visible"
                    initial="hidden"
                    className="pb-2 text-5xl text-center font-thin tracking-tight mt-1
                     lg:text-8xl lg:text-left">I'm Jesson!</motion.h1>

                    <motion.span 
                    variants={container(1)}
                    whileInView="visible"
                    initial="hidden"
                    className="bg-gradient-to-r from-pink-300 
                    via-slate-500 to-purple-500 bg-clip-text text-xl lg:text-2xl 
                    tracking-tight text-transparent">Web Developer</motion.span> 
                    <motion.div 
                    variants={container(1.2)}
                    whileInView="visible"
                    initial="hidden"
                    className="mt-2 flex items-center justify-center gap-4 lg:pb-60">
        <a
          href="https://www.linkedin.com/in/jesson-maurice-antiporda-bb5617278/"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <FaLinkedin className="text-xl lg:text-2xl" />
        </a>
        <a
          href="https://github.com/jesson20"
          target="_blank"
          rel="noopener noreferrer"

        >
          <FaGithub className="text-xl lg:text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/jessonmaurice.antiporda"
          target="_blank"
          rel="noopener noreferrer"
        
        >
          <FaFacebook className="text-xl lg:text-2xl"/>
        </a>
      </motion.div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Hero
