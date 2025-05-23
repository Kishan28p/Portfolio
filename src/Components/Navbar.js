import React from 'react'
import Img from './Images/logo.png'
import Resume from './Documents/resumeOg_kishan.pdf';

function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#hero">
                    <img className='logo' src={Img} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#about">About</a>
                    <a className="nav-link" href="#projects">Projects</a>
                    <a className="nav-link" href="#contacts">Contact</a>
                    <a className="nav-link" href={Resume} download={Resume}>Resume</a>
                </div>
                </div>
            </div>
        </nav>
    
  )
}

export default Navbar