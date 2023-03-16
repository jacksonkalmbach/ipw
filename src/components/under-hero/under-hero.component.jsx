import React from "react";
import pickleImg from '../../assets/pickleball-colorful.png';
import './under-hero.styles.scss';

const UnderHero = () => {
  return(
    <div className="under-hero-container">
      <img className="under-hero-img" src={pickleImg} alt='pickle'/>
      <div className="under-hero-text-container">
        <h2 className="under-hero-title">LOREM IPSUM</h2>
        <p className="under-hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
};

export default UnderHero;
