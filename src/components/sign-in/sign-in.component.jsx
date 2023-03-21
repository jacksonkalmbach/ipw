import React, { useState } from "react";
import { signUpUser } from "../../store/reducers/user/userSlice.js";
import { useDispatch } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { 
  signInWithGooglePopup 
} from '../../utils/firebase/firebase.utils.js'

import Button from "../button/button.component.jsx";
import GoogleSignInBtn from "../button/google-signin-btn.jsx";

import'./sign-in.styles.scss';
import { logInUser } from "../../store/reducers/user/userAuthSlice.js";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const dispatch = useDispatch()

  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGooglePopup();
      dispatch(logInUser())
    } catch(error) {
      console.log(`Error in Google sign in, ${error}`)
    }
  }

  const handleSignUpPromptClick = () => {
    dispatch(signUpUser())
  }

  const handleForgotPassword = () => {
    console.log('Forgot password clicked')
  }

  return(
    <div className="signin-container">
      <h1 className="signin-title">Welcome Back</h1>
      <form className="signin-form">
        <div className="form-floating mb-3">
          <input 
            required 
            type="email" 
            className="form-control" 
            placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email Address</label>
        </div>
        <div className="form-floating mb-3">
          <input 
            required 
            type="password" 
            className="form-control" 
            placeholder="name@example.com" />
          <label htmlFor="floatingInput">Password</label>
        </div>
      </form>
      <span
        className="forgot-password"
        onClick={handleForgotPassword}
      >Forgot Password?</span>
      <div className="social-media-signin-web">
        <Button
        >Sign In</Button>
        <div className="signin-with-container">
          <div className="little-line" />
          <p className="or-sign-in-with">OR SIGN IN WITH</p>
          <div className="little-line" />
        </div>
        <GoogleSignInBtn
          onClick={handleGoogleSignIn}
        />
      </div>
      <div className="signin-mobile-btn">
        <Button>Sign In</Button>
      </div>
      <div className="social-media-signin-mobile">
        <div className="signin-with-container">
          <div className="little-line" />
          <p className="or-sign-in-with">OR SIGN IN WITH</p>
          <div className="little-line" />
        </div>
        <div className="social-media-signin-mobile-button-container">
          <GoogleSignInBtn 
            onClick={handleGoogleSignIn}
          />
          <button>FB</button>
        </div>
      </div>
      <div className="dont-have-account">
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