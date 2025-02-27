import React from 'react'
import aboutIcon from "./Images/aboutIcon.jpg";
import './About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <>

        <motion.div
            className='about-container'
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.5}}
            viewport={{amount:0.5}}
        >
        
        <h2 className='about-title'>ABOUT</h2>
        <div className='about-content'>
            <motion.img 
                className='about-img'
                src={aboutIcon}
                initial= {{ opacity:0, x:-100}}
                whileInView= {{ opacity:1, x:0}}
                transition= {{ duration: 0.5}}
                viewport={{ amount: 0.5}}
            />
            <ul className='about-items'>
                <li className='about-item'>
                    <div>
                        <h3>Python-Fullstack Developer</h3>
                        <p>I'm a full-stack developer specializing in Django and React. I build scalable backends with Django and create dynamic, responsive frontends with React. Passionate about delivering efficient and user-friendly web applications.</p>
                    </div>
                </li>
                
            </ul>
        </div>
        </motion.div>
        

    </>
  )
}

export default About