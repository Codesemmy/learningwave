import React from 'react'
/*import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";*/
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className="home-banner-container">
        

        
        <div className="home-text-section">
          <h2 className="primary-heading">
          Elevate Performance. Empower Learners.
          </h2>
          <p className="primary-text">
          We build smart learning solutions from strategy to delivery <br/> Unlock potential and drive real impact.
          </p>
          <button className="secondary-button">
         Get Started 
          </button>
        </div>
        

      </div>
    </div>
  )
}

export default Home