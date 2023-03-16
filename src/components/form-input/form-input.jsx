import React from "react";

const FormInput = ({ label, ...otherProps}) => {
  return (
    <>
    <input className="input" label={label} {...otherProps}>

    </input>
    </>
  )
};

export default FormInput;