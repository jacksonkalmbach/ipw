import React, { useState } from "react";
import { 
  signInWithGooglePopup 
} from '../../utils/firebase/firebase.utils.js'

import Button from "../button/button.component.jsx";
import GoogleSignInBtn from "../button/google-signin-btn.jsx";
// import FormInput from "../form-input/form-input.jsx";

import'./sign-in.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleGoogleSignIn = async () => {
    const userObject = await signInWithGooglePopup();
    const {user: {displayName}} = userObject;
    console.log(`Hello ${displayName}`)
  }

  const handleSignUpPromptClick = () => {
    console.log('sign up clicked')
  }

  const handleForgotPassword = () => {
    console.log('Forgot password clicked')
  }

  return(
    <div className="signin-container">
      <h1 className="signin-title">Sign In</h1>
      <form className="signin-form">
        <label>email</label>
        <input />
        <label>password</label>
        <input />
      </form>
      <span
        className="forgot-password"
        onClick={handleForgotPassword}
      >Forgot Password?</span>
      <div className="social-media-signin-web">
        <Button>Sign In</Button>
        <GoogleSignInBtn
          onClick={handleGoogleSignIn}
        />
      </div>
      <div className="signin-mobile-btn">
        <Button>Sign In</Button>
      </div>
      <div className="social-media-signin-mobile">
        <p>---- OR SIGN IN WITH ----</p>
        <div className="social-media-signin-mobile-button-container">
          <GoogleSignInBtn 
            onClick={handleGoogleSignIn}
          />
          <button>FB</button>
        </div>
      </div>
      <div>
        <p>
          Don't have an account?
          <span 
            className="sign-up-prompt"
            onClick={handleSignUpPromptClick}
            > Sign Up
            </span>
        </p>
      </div>
    </div>
  )
};

export default SignInForm;