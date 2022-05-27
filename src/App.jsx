import React, {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './index.css'
import { css } from "@emotion/react";

const override = css
`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`;

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  },[])
  return (
    <div>
      {
        loading ?
        <ClimbingBoxLoader color={"#F37A24"} loading={loading} css={override} size={30} />
        :
      <div>
       <Header/>
       <Nav/>
       <About/>
       <Experience/>
       <Services/>
       <Portfolio/>
       <Testimonials/>
       <Contact/>
       <Footer/>
      </div>
      }

    </div>
  )
}

export default App