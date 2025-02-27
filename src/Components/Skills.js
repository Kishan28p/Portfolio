

import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

import css from './Skills/css.png';
import django from './Skills/django.png';
import html from './Skills/html.png';
import react from './Skills/react.png';
import python from './Skills/pythonicon.png';

function Skills() {
  return (
    <motion.div 
      className="skill-container"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}  
      exit={{ opacity: 0, y: -50 }} 
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.3 }} 
    >
      <motion.h2 
        className="skill-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
      >
        SKILLS
      </motion.h2>

      <div className="skill-content">
        {[ 
          { img: python, name: "Python" },
          { img: django, name: "Django" },
          { img: html, name: "HTML" },
          { img: css, name: "CSS" },
          { img: react, name: "React.js" }
        ].map((skill, index) => (
          <motion.div 
            key={index}
            className="skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ amount: 0.3 }} 
          >
            <div className="skill">
              <div className="skill-image">
                <img src={skill.img} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
