import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    edit: (state) => {
      state.value = "edit";
    },
    noEdit: (state) => {
      state.value = "";
    },
    // editValue: (state, action) => {
    //   state.value = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { edit, noEdit } = editSlice.actions;

export default editSlice;
