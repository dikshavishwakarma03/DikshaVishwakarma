
import { motion } from 'framer-motion';
import React from 'react';  

import html from '../assets/img/html.svg' 
import css from '../assets/img/css.svg' 
import js from '../assets/img/js.svg' 
import react from '../assets/img/react.svg' 
import nextjs from '../assets/img/nextjs.svg' 
import tailwind from '../assets/img/tailwind.svg' 
import bootstrap from '../assets/img/bootstrap.svg' 
import sql from '../assets/img/sql.svg' 
import java from '../assets/img/java.svg' 

import { i } from 'framer-motion/client';

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: (
        
        <a href="https://html.com/" target="_blank" rel="noopener noreferrer">
  <img className="h-20 w-20" src={html} alt="CSS Logo" />
</a>
      )
    },
    {
      name: "CSS",
      logo: (
        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
  <img className="h-20 w-20" src={css} alt="CSS Logo" />
</a>
      )
    },
    {
      name: "JavaScript",
      logo: (
        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
        <img className="h-20 w-20" src={js} alt="CSS Logo" />
      </a>
      )
    },
    {
      name: "React",
      logo: (
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <img className="h-20 w-20" src={react} alt="CSS Logo" />
      </a>
      )
    },
    {
      name: "Next.js",
      logo: (
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        <img className="h-20 w-20" src={nextjs} alt="CSS Logo" />
      </a>
      )
    },
    {
      name: "Tailwind CSS",
      logo: (
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
        <img className="h-20 w-20" src={tailwind} alt="CSS Logo" />
      </a>
      )
    },
    {
      name: "Bootstrap",
      logo: (
        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
        <img className="h-20 w-20" src={bootstrap} alt="CSS Logo" />
      </a>
      )
    },
    {
      name: "SQL",
      logo: (
        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
        <img className="h-20 w-20" src={sql} alt="CSS Logo" />
      </a>
      )
    },
    {
      name: "Java",
      logo: (
        <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer">
        <img className="h-20 w-20" src={java} alt="CSS Logo" />
      </a>
      )
    }
  ];

  return (
    <div className="bg-[rgb(10,25,47)] pt-24 min-h-screen" id="skills">
      <h1 className="text-[rgb(100,255,218)] ml-36 text-4xl mb-16 hover:underline">02. Skills</h1>
      
      <div className="max-w-7xl mx-auto px-2 sm:grid-cols-2 lg:grid-cols-4" >
        <div className="flex flex-wrap justify-center items-center gap-32  ">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 2, scale: 0.5 }}
              animate={{ opacity: 2, scale:1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity
                }}
                className="p-4 rounded-full bg-[rgb(17,34,64)] group-hover:bg-[rgb(25,45,80)] 
                           transition-colors duration-300 flex items-center justify-center
                           shadow-lg group-hover:shadow-[rgb(100,255,218)]/20"
              >
                {skill.logo}
              </motion.div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="absolute -bottom-11 left-1/2 transform -translate-x-1/2 
                           text-gray-300 font-medium text-xl whitespace-nowrap "
              > {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
