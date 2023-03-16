import React from "react";
import { 
  signInWithGooglePopup 
} from '../../utils/firebase/firebase.utils.js'

// import Button from '../button/button.component'
import GoogleSignInBtn from "../button/google-signin-btn.jsx";

import'./sign-in.styles.scss';

const SignIn = () => {

  const handleGoogleSignIn = async () => {
    const userObject = await signInWithGooglePopup();
    const {user: {displayName}} = userObject;
    console.log(`Hello ${displayName}`)
  }

  return(
    <>
      <h1>Sign In</h1>
      <GoogleSignInBtn
        onClick={handleGoogleSignIn}
      />
    </>
  )
};

export default SignIn;