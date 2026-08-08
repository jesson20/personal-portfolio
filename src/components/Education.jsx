import React from 'react';
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:pb-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='mt-20 mb-10 lg:mb-20 text-center text-4xl'
      >
        Education
      </motion.h2>

      <div>
        {EDUCATION.map((edu, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className='mb-1 font-semibold text-lg flex items-center gap-2'>
                <FaGraduationCap className="text-purple-400" /> {edu.degree}
              </h6>
              <h6 className='mb-1 text-neutral-300'>{edu.institution} - {edu.location}</h6>
              <h6 className='mb-4 text-neutral-400'>{edu.date}</h6>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
