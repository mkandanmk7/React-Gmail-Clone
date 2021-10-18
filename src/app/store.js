import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import mailReducer from "../features/mailSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    mail: mailReducer,
  },
});
