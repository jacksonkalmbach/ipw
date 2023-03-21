import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  signUpWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { signInUser } from "../../store/reducers/user/userSlice";

import Button from "../button/button.component";

import'./sign-up.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {

  const dispatch = useDispatch();

  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await signUpWithEmailAndPassword(email, password);
      console.log('sign up successful');
      resetFormFields();
    } catch(error) {
      console.log(`${error}, error in sign up with email and password`)
    }
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSignInPromptClick = () => {
    dispatch(signInUser());
  }

  return(
    <div className="signup-container">
      <h1 className="signup-title">Sign up</h1>
      <form className="signup-form">
      <div className="form-floating mb-3">
          <input 
            required 
            type="text"
            onChange={handleChange} 
            className="form-control" 
            placeholder="ex. John Smith" />
          <label htmlFor="floatingInput">Display Name</label>
        </div>
        <div className="form-floating mb-3">
          <input 
            required 
            type="email" 
            // value={email} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email Address</label>
        </div>
        <div className="form-floating mb-3">
          <input 
            required 
            type="password" 
            // value={password} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="name@example.com" />
          <label htmlFor="floatingInput">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input 
            required 
            type="password" 
            // value={confirmPassword}
            onChange={handleChange} 
            className="form-control" 
            placeholder="name@example.com" />
          <label htmlFor="floatingInput">Confirm Password</label>
        </div>
        <Button
          onSubmit={handleSubmit}
        >Create Account</Button>
      </form>
      <div className="already-have-account">
        <p>
          Already have an account?
          <span 
            className="sign-in-prompt"
            onClick={handleSignInPromptClick}
            > Sign In
            </span>
        </p>
      </div>
    </div>
  )
};

export default SignUpForm;