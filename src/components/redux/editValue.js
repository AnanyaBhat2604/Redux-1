import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const editValue = createSlice({
  name: "editVal",
  initialState,
  reducers: {
    editVal: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { editVal } = editValue.actions;

export default editValue;
