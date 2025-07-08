import React from 'react';
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from 'react-icons/fa';

const Experiences = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:pb-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='mt-20 mb-10 lg:mb-20 text-center text-4xl'
      >
        Experiences
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className='mb-1 font-semibold'>{experience.role}</h6>
              <h6 className='mb-1'>{experience.company}</h6>
              <h6 className='mb-4'>{experience.date}</h6>
              <p className='mb-4 text-neutral-400 whitespace-pre-line'>{experience.job}</p>
              
              <div className='flex flex-wrap'>
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className='mr-2 mt-2 lg:mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
