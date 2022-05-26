import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      {/* END OF FRONTEND SECTION  */}

        <div className="experience-backend">
        <h3>Backend Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <div>
                <h4>ExpressJS</h4>
                <small>Intermediate</small>
              </div>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience