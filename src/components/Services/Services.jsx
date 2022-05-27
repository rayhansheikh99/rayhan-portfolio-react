import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'
 
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Web Design</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Fully Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>User-Friendly Custom Design</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Slider Image Functionality </p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Functional Contact Form</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>E-Commerce Functionality</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DESIGN  */}

        <article className="service">
          <div className="service-head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Single Page Application in React js</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Real-time Web Apps in React</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>E-commerce Website for Your Business</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Responsive Design for PC, Mobile, Tablet</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Remove Bugs from React Application</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONTEND DEVELOPMENT  */}

        <article className="service">
          <div className="service-head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>New API Development in Node.js</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Modification in Existing APIs</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>I Use Express.js as a NodeJS Framework</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p> Create Database Using MongoDB</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Unlimited Revision Until You Are Satisfied.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services