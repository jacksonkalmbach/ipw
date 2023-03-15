import React from "react";

import pickelImg from '../../assets/paddle-balls.jpg';
import Button from "../../components/button/button.component";

import './home.styles.scss';

const Home = () => {
  return(
    <div className="home-container">
      <div className="title-container">
        <h1 className="title">Indoor Pickleball World</h1>
        <h3 className="tagline">We have a new arrival in our collection. It's the perfect piece to add to your collection!</h3>
        <div className="home-buttons-container">
          <Button
          >Register
          </Button>
          <Button
            buttonType='inverted'
            >
              Explore
            </Button>
        </div>
      </div>
      <div className="images-container">
        <img className='home-image' src={pickelImg} alt='pickle'/>
        <img className='home-image' src={pickelImg} alt='pickle'/>
        <img className='home-image' src={pickelImg} alt='pickle'/>
        <img className='home-image' src={pickelImg} alt='pickle'/>
      </div>
    </div>
  )
};

export default Home;