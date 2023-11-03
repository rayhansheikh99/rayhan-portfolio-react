import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-img bishwo-img"></div>
          <h3>Bishworang (E-commerce)</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://bishworang.website/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img book-img"></div>
          <h3>Book Store (Online Book Store)</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://bookstore.ebitans.com/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img ebitans-img"></div>
          <h3>eBitans (Service)</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://ebitans.com/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img cars-img"></div>
          <h3>Best Car (Online Store)</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/rayhansheikh99/best-car"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Client
            </a>
            <a
              href="https://github.com/rayhansheikh99/best-car-server"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Server
            </a>
            <a
              href="https://best-car99.web.app/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img blog-img"></div>
          <h3>RS Blog (Blog Site)</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/rayhansheikh99/tech-blog-client"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Client
            </a>
            <a
              href="https://github.com/rayhansheikh99/tech-blog-server"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Server
            </a>
            <a
              href="https://tech-blogbd.web.app"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img fly-img"></div>
          <h3>Fly BD (Travel Agency)</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/rayhansheikh99/Fly-Bd-Client"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Client
            </a>
            <a
              href="https://github.com/rayhansheikh99/Fly-Bd-Server"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Server
            </a>
            <a
              href="https://flybd-5aa65.web.app/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img watch-img"></div>
          <h3>Watch World (Online Store)</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/rayhansheikh99/watch-world-client"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Client
            </a>
            <a
              href="https://github.com/rayhansheikh99/watch-world-server"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Server
            </a>
            <a
              href="https://watch-world-d78c9.web.app/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img hajj-img"></div>
          <h3>Hajj Trip (Travel Agency)</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/rayhansheikh99/hajj-trip-client"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Client
            </a>
            <a
              href="https://github.com/rayhansheikh99/hajj-trip-server"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Server
            </a>
            <a
              href="https://hajj-trip.web.app/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img tm-img"></div>
          <h3>TM BD (Health Care)</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/rayhansheikh99/DP-Doctor"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://tmbd.netlify.com/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
