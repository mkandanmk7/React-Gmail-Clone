import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mailId: null,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,

  // gives actions
  reducers: {
    setMailId: (state, action) => {
      state.mailId = action.payload; //load all user data
      console.log(state);
    },
  },
});

export const { setMailId } = mailSlice.actions;

export const selectMailId = (state) => state.mail.mailId;

export default mailSlice.reducer;
