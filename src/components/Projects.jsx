import React from 'react'
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const renderProjectDescription = (descText) => {
  if (!descText) return null;
  const lines = descText.split('\n');
  return (
    <div className="mb-4">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith('•')) {
          const bulletContent = trimmed.replace(/^•\s*/, '');
          return (
            <div key={idx} className="flex items-start pl-4 my-1">
              <span className="mr-2 text-neutral-400 select-none flex-shrink-0">•</span>
              <span className="text-neutral-400 leading-relaxed">{bulletContent}</span>
            </div>
          );
        }
        return (
          <p key={idx} className="text-neutral-400 my-1 leading-relaxed">
            {line}
          </p>
        );
      })}
    </div>
  );
};

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-12 pt-8 lg:pb-16'> 
    <motion.h2 
     whileInView={{ opacity: 1, y: 0}}
     initial={{ opacity: 0, y: -100 }}
     transition={{ duration: 0.5}}
    className='my-10 text-center text-3xl font-bold lg:text-4xl'>Projects</motion.h2>
    <div>
        {PROJECTS.map ((project, index) => (
            
           <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div 
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: -100 }}
                 transition={{ duration: 1 }}
                className="w-full lg:w-1/4">
                    
                    {project.link || project.github ? (
                      <a
                        href={project.link || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img 
                          src={project.image} 
                          width={240}
                          height={150}
                          alt={project.title}
                          className="mb-6 rounded w-full max-w-[220px] lg:max-w-[240px] h-auto object-cover border border-neutral-800"
                        />
                      </a>
                    ) : (
                      <img 
                        src={project.image} 
                        width={240}
                        height={150}
                        alt={project.title}
                        className="mb-6 rounded w-full max-w-[220px] lg:max-w-[240px] h-auto object-cover border border-neutral-800"
                      />
                    )}
                </motion.div>
                <motion.div 
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: 100 }}
                 transition={{ duration: 1}}
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className='mb-2 font-semibold text-lg text-white'>{project.title}</h6>
                    {renderProjectDescription(project.description)}
                    <div className='flex flex-wrap'>
                    {project.technologies.map((tech, index) => (
                        <span key={index} className='mr-2 mt-2 lg:mt-4 rounded bg-neutral-900 px-2 py-1 text-sm
                        font-medium text-purple-800'>
                            {tech}
                        </span>
                    ))}
                    </div>
                    <div className='flex flex-wrap mt-3 gap-2'>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center gap-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white hover:text-purple-400 transition-colors'
                      > <FaGithub /> GitHub</a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-center gap-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white hover:text-purple-400 transition-colors'
                      > Live Demo <FaExternalLinkAlt /></a>
                    )}
                    </div>
                </motion.div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Projects
