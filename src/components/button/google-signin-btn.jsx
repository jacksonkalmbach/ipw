import React from "react";

import './google-signin-btn.scss';

const GoogleSignInBtn = ({onClick}) => {
  return(
    <div type='button' className="google-btn" onClick={onClick}>
      <div className="google-icon-wrapper">
        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt='google-icon'/>
      </div>
      <p className="btn-text"><b>Sign in with Google</b></p>
    </div>
  )
};

export default GoogleSignInBtn;