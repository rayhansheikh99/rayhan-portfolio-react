import React from 'react'
import "./about.css"
import ME from '../../assets/rayhan2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>

            <article className='about-card'>
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          Dedicated web developer with creating custom websites through React and NodeJS. Proficient in HTML, CSS, JavaScript, also modern libraries and frameworks. Strong collaboration skills. I love to learn about new technologies and Programming Concepts.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About