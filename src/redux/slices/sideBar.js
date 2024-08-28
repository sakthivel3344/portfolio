import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "/",
};
const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { updateCurrentPage } = sideBarSlice.actions;
export const sideBarReducer = sideBarSlice.reducer;
