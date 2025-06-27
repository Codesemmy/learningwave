import React from 'react'
/*import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";*/
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className="home-banner-container" id="Home">
        

        
        <div className="home-text-section">
          <h2 className="primary-heading" style={{ lineHeight: "1.2" }}>
          Elevate Performance. Empower Learners.
          </h2>
          <p className="primary-text">
          We transforming learning through evidence-based designs and digital innovations.
          </p>
          <a href="https://docs.google.com/forms/d/1_e-vhBhLIERDgFU6BCgBarIncixx_irAakeqoXaW5Fs/edit" target="_blank" rel="noopener noreferrer"><button className="secondary-button" id="Get">
         Get Started 
          </button></a>

        </div>
        

      </div>
    </div>
  )
}

export default Home