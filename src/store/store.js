import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./reducers/user/userAuthSlice";
import userReducer from './reducers/user/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    userAuth: userAuthSlice,
  },
});

export default store;