import React from "react";
import { Link } from "react-router-dom";

import './button.styles.scss';

const BUTTON_TYPES = {
  base: '',
  inverted: 'inverted',
  sidenavbase: 'sidenav-base',
  sidenavinverted: 'sidenav-inverted',
  signin: 'sign-in',
  google: 'google'
}

const Button = ({ children, buttonType = 'base', to, ...otherProps }) => {
  const buttonClassName = `button-container ${BUTTON_TYPES[buttonType]}`;
  return(
    <Link to={to} {...otherProps} className={buttonClassName}>
      {children}
    </Link>
  )
}

export default Button;
