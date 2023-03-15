import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import ipwLogo from '../../assets/ipw-logo.svg';
import Button from "../../components/button/button.component";

import './navigation.styles.scss';

const Navigation = () => {
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const toggleSideNav = () => {
    setSideNavVisible(!sideNavVisible);
  };

  const closeSideNav = (e) => {
    e.stopPropagation();
    setSideNavVisible(false);
  };

  return (
    <>
      <div
        className={`overlay ${sideNavVisible ? "is-visible" : ""}`}
        onClick={closeSideNav}
      ></div>
      <div className="navigation-container">
        <div className="logo-nav-container">
          <Link to="/" className="logo-container">
            <img src={ipwLogo} className="logo" alt="logo" />
          </Link>
          <div className="nav-links-container">
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
            <Link to="/locations" className="nav-link">
              LOCATIONS
            </Link>
            <Link to="/shop" className="nav-link">
              SHOP
            </Link>
          </div>
        </div>
        <Link to="login" className="login-container">
          <span>LOGIN</span>
        </Link>
        <div className="hamburger-container" onClick={toggleSideNav}>
          <span>&#9776;</span>
        </div>
      </div>
      <div
        className={`side-nav ${sideNavVisible ? "is-visible" : ""}`}
        onClick={toggleSideNav}
      >
        <span className="close-icon" onClick={closeSideNav}>
          &times;
        </span>
        <Link to="/about" className="nav-link">
          ABOUT
        </Link>
        <Link to="/locations" className="nav-link">
          LOCATIONS
        </Link>
        <Link to="/shop" className="nav-link">
          SHOP
        </Link>
        <div className="get-started-nav">
          <h3 className="get-started-header">Ready to start playing? Become an IPW member to start reserving courts.
            <Link className="learn-more" to='/about'> 
              <span> Learn more</span>
            </Link>
          </h3>
          <div className="buttons-container">
            <Button
              to='/login'
              buttonType="sidenavbase"
            >SIGN UP
            </Button>
            <Button
              to='/login'
              buttonType="sidenavinverted"
            >SIGN IN
            </Button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;