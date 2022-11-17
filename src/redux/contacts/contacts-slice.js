import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, removeContact, addContact } from "./contacts-operations";

const initialState = {
  items: [],
  loading: false,
  error: null
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

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [fetchContacts.pending]: panding,
    [fetchContacts.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: payload,
    }),
    [fetchContacts.rejected]: rejected,

    [addContact.pending]: panding,
    [addContact.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: [...store.items, payload],
    }),
    [addContact.rejected]: rejected,

    [removeContact.pending]: panding,
    [removeContact.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: store.items.filter((el) => el.id !== payload),
    }),
    [removeContact.rejected]: rejected,
  },
});

export default contactsSlice.reducer;
