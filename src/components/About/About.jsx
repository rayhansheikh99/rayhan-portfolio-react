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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, sequi velit atque labore laboriosam exercitationem amet nesciunt et provident, unde tempora, inventore a in esse quo non. Facilis, iste fuga.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About