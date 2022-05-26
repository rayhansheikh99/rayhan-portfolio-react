import React from 'react'
import "./footer.css"
// import {FaFacebookF} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">Rayhan Sheikh</a>

      <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com/rayhansheikh99" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/rayhansheikh99/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/rayhansheikh99" target="_blank" rel="noreferrer"><BsGithub/></a>
      </div>

      <div className="footer-copyright">
        <small>
          &copy; Rayhan Sheikh. All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer