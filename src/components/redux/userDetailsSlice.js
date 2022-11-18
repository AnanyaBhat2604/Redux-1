import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUserDetailsAsync = createAsyncThunk(
  "userDetails/getUserDetailsAsync",
  async () => {
    const response = await fetch("http://localhost:5000/userDetails");
    // console.log(response);
    if (response.ok) {
      const userDetails = await response.json();
      return { userDetails };
    }
  }
);

export const addUserDetailsAsync = createAsyncThunk(
  "userDetails/addUserDetailsAsync",
  async (payload) => {
    const response = await fetch("http://localhost:5000/userDetails", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(payload.data),
    });
    if (response.ok) {
      const userDetail = await response.json();
      return { userDetail };
    }
  }
);

export const updateUserDetailsAsync = createAsyncThunk(
  "userDetails/updateUserDetailsAsync",
  async (payload) => {
    const response = await fetch(
      `http://localhost:5000/userDetails/${payload.id}`,
      {
        method: "PATCH",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ id: payload.id, title: payload.title }),
      }
    );
    // console.log(response);
    if (response.ok) {
      // const userDetail = await response.json();
      return { id: payload.id, title: payload.title };
    }
  }
);

export const deleteUserDetailsAsync = createAsyncThunk(
  "userDetails/deleteUserDetailsAsync",
  async (payload) => {
    const response = await fetch(
      `http://localhost:5000/userDetails/${payload.id}`,
      {
        method: "DELETE",
      }
    );
    // console.log(response);
    if (response.ok) {
      return { id: payload.id };
    }
  }
);

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: [
    { id: 1, title: "aaa" },
    { id: 2, title: "bbb" },
    { id: 3, title: "ccc" },
  ],
  edit: "false",

  reducers: {
    showEdit: (state) => {
      state.edit = "true";
    },
  },
  extraReducers: {
    [getUserDetailsAsync.pending]: (state, action) => {
      console.log("fetching data..");
    },
    [getUserDetailsAsync.fulfilled]: (state, action) => {
      console.log("fetched data successfully..");
      return action.payload.userDetails;
    },
    [addUserDetailsAsync.fulfilled]: (state, action) => {
      console.log("added data successfully..");
      state.push(action.payload.userDetail);
    },
    [updateUserDetailsAsync.fulfilled]: (state, action) => {
      console.log("Updated data successfully..", action.payload);

      // return state.push((action.payload.userDetail) => userDetails.id !== action.payload.id);
      // return (state[action.payload.id] = action.payload);
      // state.push(action.payload.userDetail);
      const index = state.findIndex((user) => user.id === action.payload.id);
      state[index].title = action.payload.title;
      console.log("index", state[index]);

      // state[index] = action.payload.userDetail;
    },
    [deleteUserDetailsAsync.fulfilled]: (state, action) => {
      console.log("Deleted data successfully..");
      return state.filter(
        (userDetails) => userDetails.id !== action.payload.id
      );
    },
  },
});

export const { addUserDetails, deleteUserDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
