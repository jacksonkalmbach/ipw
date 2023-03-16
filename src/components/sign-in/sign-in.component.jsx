import React, { useState } from "react";
import { 
  signInWithGooglePopup 
} from '../../utils/firebase/firebase.utils.js'

import Button from "../button/button.component.jsx";
import GoogleSignInBtn from "../button/google-signin-btn.jsx";
import FormInput from "../form-input/form-input.jsx";

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

  return(
    <div className="signin-container">
     
      <Button>Sign In</Button>
      <GoogleSignInBtn
        onClick={handleGoogleSignIn}
      />
    </div>
  )
};

export default SignInForm;