import { createSlice } from '@reduxjs/toolkit'

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    isLoggedIn: false
  },
  reducers: {
    logOutUser: state => {
      state.isLoggedIn = false
    },
    logInUser: state => {
      state.isLoggedIn = true
    }
  }
});

export const { logInUser, logOutUser } = userAuthSlice.actions;

export const selectLogInStatus = state => state.userAuth.isLoggedIn;

export default userAuthSlice.reducer;
