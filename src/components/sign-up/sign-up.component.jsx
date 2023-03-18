import React, { useState } from "react";

import {
  signUpWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import'./sign-up.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {

  
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

  return(
    <div className="signup-container">
      <h1>Sign up with email and password</h1>
      <form 
        className="signup-form"
        onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input 
          required
          type='text'
          onChange={handleChange}
          name="displayName"
          value={displayName}  
        />
        <label>Email Address</label>
        <input 
          required
          type='email'
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input 
          required
          type='password'
          onChange={handleChange}
          name="password"
          value={password}
          />
        <label>Confirm Password</label>
        <input
         required
         type='password'
         onChange={handleChange}
         name="confirmPassword"
         value={confirmPassword}
         />
        <button 
          type="submit"
          >Sign Up
        </button>
      </form>
    </div>
  )
};

export default SignUpForm;