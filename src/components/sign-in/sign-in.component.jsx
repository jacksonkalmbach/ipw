import React from "react";

import Button from '../button/button.component'

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils.js'

import'./sign-in.styles.scss';

const SignIn = () => {

  const handleGoogleSignIn = async () => {
    const user = await signInWithGooglePopup();
    console.log(user)
  }

  return(
    <>
      <h1>Sign In</h1>
      <Button
        onClick={handleGoogleSignIn}
        >Sign in with Google
      </Button>
    </>
  )
};

export default SignIn;