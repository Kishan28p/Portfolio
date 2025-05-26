import React from 'react'
import './Contact.css';
function Contact() {
  return (
     <footer className="footer-contact">
      <div className="footer-container">
        <h2 className="footer-title">Contact</h2>
        <div className="footer-details">
          <p>Email: <a href="mailto:kishankumarp228@gmail.com">kishankumarp228@gmail.com</a></p>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/kishan-kumar-p" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Kishan28p" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
