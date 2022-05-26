import React from 'react'
import "./portfolio.css"
import img1 from "../../assets/img1.png"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-img port-img">
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className="btn" target="_blank">GitHub</a>
          <a href="#" target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img port-img">
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className="btn" target="_blank">GitHub</a>
          <a href="#" target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img port-img">
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className="btn" target="_blank">GitHub</a>
          <a href="#" target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img port-img">
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className="btn" target="_blank">GitHub</a>
          <a href="#" target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img port-img">
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className="btn" target="_blank">GitHub</a>
          <a href="#" target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img port-img">
          </div>
          <h3>Portfolio Title</h3>
          <div className="portfolio-item-cta">
          <a href="#" className="btn" target="_blank">GitHub</a>
          <a href="#" target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio