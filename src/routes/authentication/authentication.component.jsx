import React from "react";
import { useSelector } from "react-redux"
import { selectSignUpStatus } from "../../store/reducers/user/userSlice";

import SignInForm from "../../components/sign-in/sign-in.component";
import SignUpForm from "../../components/sign-up/sign-up.component";


import './authentication.styles.scss';

const Authentication = () => {

  const signUpStatus = useSelector(selectSignUpStatus)

  return(
    <div className="auth-container">
      {signUpStatus ? <SignUpForm /> : <SignInForm />}
    </div>
  )
};

export default Authentication;