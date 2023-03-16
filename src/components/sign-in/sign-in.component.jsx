import React from "react";

import Button from '../button/button.component'

import'./sign-in.styles.scss';

const SignIn = () => {

  const handleGoogleSignIn = () => {
    console.log('google sign in')
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