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
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
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
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT  */}

        <article className="service">
          <div className="service-head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon"></BiCheck>
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services