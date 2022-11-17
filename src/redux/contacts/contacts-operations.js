import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPhone,
  deletePhone,
  addPhone,
} from "../../shared/services/api/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (data, { rejectWithValue }) => {
    try {
      return await getPhone();
    } catch (error) {
      const { data, status } = error.response;
        const {message} = error;
        const {responseURL}= error.response.request;
        return rejectWithValue({ data, status, message,responseURL });
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts/remove",
  async (data, { rejectWithValue }) => {
    try {
      return await deletePhone(data);
    } catch (error) {
      const { data, status } = error.response;
        const {message} = error;
        const {responseURL}= error.response.request;
        return rejectWithValue({ data, status, message,responseURL });
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async (data, { rejectWithValue }) => {
    try {
      return addPhone(data);
    } catch (error) {
      const { data, status } = error.response;
        const {message} = error;
        const {responseURL}= error.response.request;
        return rejectWithValue({ data, status, message,responseURL });
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const isAdded = contacts.items.find(
        (el) => el.name.toLowerCase() === data.name.toLowerCase()
      );
      if (isAdded) {
        alert(`"${isAdded.name}" is already in your contacts`);
        return false;
      }
    },
  }
);
