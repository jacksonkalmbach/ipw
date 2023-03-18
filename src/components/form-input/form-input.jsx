import React from "react";
import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps}) => {
  return (
    <div className="group">
      <label className="form-input-label">LABEL</label>
      <input className="form-input" />
    </div>
  )
};

export default FormInput;