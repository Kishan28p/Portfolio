import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css'; 


import capify from './Projects/capify.png';
import dblog from './Projects/dblog.png';
import book from './Projects/bookproject.png';


function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projectData = [
    {
      title: 'Capify : Caption Generating tool',
      description: 'Capify uses AI to generate smart image captions. It features user login and registration, offering 2 free caption trials for guests and unlimited access for registered users.',
      tools : 'Django | React.js',
      img: capify
    },
    {
      title: 'Dblog – Simple Blogging System',
      description: ' A Django project where users can sign up, log in, and create, edit, or delete their blog posts. Users can also view other blogs and add comments. It includes login authentication and profile image upload.',
      tools : 'Django | HTML | CSS | Bootstrap',
      img: dblog
    },
    {
      title:'Kawaii Manga Mart',
      description: 'A Django project where users can register, log in, and browse manga books. Users can add items to their cart and check out.  Admins can manage books and handle a To-Do list with add, edit, and delete options. Includes login and admin/user access control.',
      tools : 'Django | HTML | CSS | Bootstrap',
      img: book
    },
 
  ];

  return (
    <motion.div 
      className="project-container"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}  
      exit={{ opacity: 0, y: -50 }} 
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.3 }} 
    >
      <motion.h2 
        className="project-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
      >
        PROJECTS
      </motion.h2>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ amount: 0.3 }} 
          >
            <img src={project.img} alt={project.title} 
            onClick={()=>{
              setSelectedImage(project.img)
            }}
            />
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <p className='tools'>{project.tools}</p>
          </motion.div>
        ))}
      </div>
      {selectedImage && (
        <div className='image-modal' onClick={()=>setSelectedImage(null)}>
          <img src={selectedImage} alt='img'></img>
        </div>
      )}
    </motion.div>
  );
}

export default Projects;
