import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isSignedIn: false
  },
  reducers: {
    userSignIn: state => {
      state.value = true
    },
    userSignOut: state => {
      state.value = false
    }
  }
});

export const { userSignIn, userSignOut } = userSlice.actions;

export default userSlice.reducer;