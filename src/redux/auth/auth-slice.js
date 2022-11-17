import { createSlice } from "@reduxjs/toolkit";
import {
  signupUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "./auth-operations";

export const initialState = {
  user: {},
  token: "",
  isLogin: false,
  loading: false,
  error: null,
};

const panding = (store) => ({
  ...store,
  loading: true,
  error: null,
});

const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: payload.message,
});

const authSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [signupUser.pending]: panding,
    [signupUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      token: payload.token,
      isLogin: true,
      user: payload.user,
    }),
    [signupUser.rejected]: rejected,

    [loginUser.pending]: panding,
    [loginUser.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      token: payload.token,
      isLogin: true,
      user: payload.user,
    }),
    [loginUser.rejected]: rejected,

    [logoutUser.pending]: panding,
    [logoutUser.fulfilled]: () => initialState,
    [logoutUser.rejected]: rejected,

    [getCurrentUser.pending]: panding,
    [getCurrentUser.rejected]: () => initialState,
    [getCurrentUser.fulfilled]: (store, { payload }) => {
      if (payload.token) {
        return {
          ...store,
          loading: false,
          isLogin: true,
          user: payload.user,
          token: payload.token
        };
      }
      return {
        ...store,
        loading: false,
        isLogin: true,
        user: payload,
      };
    },
  },
});

export default authSlice.reducer;
