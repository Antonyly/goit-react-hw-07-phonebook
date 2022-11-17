import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signup,
  login,
  logout,
  getCurrent,
} from "../../shared/services/api/auth";

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      return await signup(data);
    } catch (error) {
      const { data, status } = error.response;
      const { message: messageForUser } = error.response.data;
      const { message } = error;
      return rejectWithValue({ message, messageForUser, data, status });
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      return await login(data);
    } catch (error) {
      const { data, status } = error.response;
      const { message } = error;
      return rejectWithValue({ data, status, message });
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await logout();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await getCurrent(auth.token);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
