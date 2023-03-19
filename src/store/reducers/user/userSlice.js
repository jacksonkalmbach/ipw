import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    signUp: true
  },
  reducers: {
    signInUser: state => {
      state.value = false
    },
    signUpUser: state => {
      state.value = true
    }
  }
});

export const { signInUser, signUpUser } = userSlice.actions;

export const selectSignUpStatus = state => state.user.value;

export default userSlice.reducer;