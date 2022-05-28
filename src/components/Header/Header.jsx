import React from 'react'
import Cta from './Cta'
import "./header.css"
import ME from "../../assets/rayhan1.png"
import HeaderSocials from './HeaderSocials'
import 'animate.css';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5 className="animate__animated animate__fadeInLeft">Hello I'm</h5>
        <h1 className="animate__animated animate__bounce animate__delay-2s animate__repeat-2">Rayhan Sheikh</h1>
        <h5 className="text-light">Junior Fullstack Developer</h5>
        <Cta/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="my-pic" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header