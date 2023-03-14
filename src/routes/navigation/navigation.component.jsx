import React from "react";
import { Outlet, Link } from "react-router-dom";

import ipwLogo from '../../assets/ipw-logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return(
    <>
      <div className="navigation-container">
        <div className="logo-nav-container">
          <Link to='/' className="logo-container">
          <img src={ipwLogo} className="logo" alt='logo'/>
          </Link>
          <div className="nav-links-container">
            <Link to='/about' className="nav-link">ABOUT</Link>
            <Link to='/locations' className="nav-link">LOCATIONS</Link>
            <Link to='/shop' className="nav-link">SHOP</Link>
          </div>
        </div>
          <Link to='login' className="login-container">
            <span>LOGIN</span>
          </Link>
      </div>
      <Outlet />
    </>
  )
};

export default Navigation;