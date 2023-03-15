import React from "react";

import './button.styles.scss';

const BUTTON_TYPES = {
  base: 'button-container',
  inverted: 'button-container inverted',
}

const Button = ({ children, buttonType = 'base', ...otherProps }) => {
  const buttonClassName = BUTTON_TYPES[buttonType];
  return(
    <div {...otherProps} className={buttonClassName}>
      {children}
    </div>
  )
}

export default Button;
