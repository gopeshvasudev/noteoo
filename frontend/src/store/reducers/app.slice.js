import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSigninFormVisible: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsSigninFormVisible(state, action) {
      state.isSigninFormVisible = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setIsSigninFormVisible } = appSlice.actions;
