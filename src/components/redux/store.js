import { configureStore } from "@reduxjs/toolkit";
import editSlice from "./editSlice";
import editValue from "./editValue";
import userDetailsReducer from "./userDetailsSlice";

export const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer,
    edit: editSlice.reducer,
    editVal: editValue.reducer,
  },
});
