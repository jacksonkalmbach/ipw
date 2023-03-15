import React from "react";

import pickelImg from '../../assets/paddle-balls.jpg';
import Button from '../button/button.component.jsx'
import HomeAbout from "../home-about/home-about.component";

import './hero-page.styles.scss';

const HeroPage = () => {
  return(
    <div className="home-container">
      <div className="hero-page-container">
      <div className="title-container">
        <h1 className="title">Indoor Pickleball World</h1>
        <h3 className="tagline">We have a new arrival in our collection. It's the perfect piece to add to your collection!</h3>
        <div className="home-buttons-container">
          <Button
            to='/login'
          >Register
          </Button>
          <Button
            buttonType='inverted'
            to='/locations'
            >
              Explore
            </Button>
        </div>
      <HomeAbout />
      </div>
      <div className="images-container">
        <img className='home-image' src={pickelImg} alt='pickle'/>
        <img className='home-image' src={pickelImg} alt='pickle'/>
        <img className='home-image' src={pickelImg} alt='pickle'/>
        <img className='home-image' src={pickelImg} alt='pickle'/>
      </div>
      </div>
    </div>
  )
};

export default HeroPage;