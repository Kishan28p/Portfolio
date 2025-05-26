import React from 'react'
import Img from "./Images/hero.jpg"
import { Typewriter } from 'react-simple-typewriter'


function Hero() {
  return (
    <>
      <div className='hero-container hero-container-fluid'>
          <div className='hero-content'>
              <h1 className='hero-title'>

                Hi I'm {' '}
                <span className='typing-text'>
                  <Typewriter
                  words={['Kishan', 'a Web Developer!']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={200}
                  deleteSpeed={100}
                  delaySpeed={1000}
                  />
                </span>
                </h1>   
          </div>
          {/* <div className='btn-container'>
            <button className='contact-btn '><a href="kishankumarp228@gmail.com" type='button'></a>Contact</button>  
        </div> */}
          <img src={Img} className="hero-img" alt="" />
          
      </div>
    
    </>
  )
}

export default Hero

