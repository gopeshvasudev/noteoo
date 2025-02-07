import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSigninFormVisible: true,
  isSidebarCollapsed: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsSigninFormVisible(state, action) {
      state.isSigninFormVisible = action.payload;
    },

    setIsSidebarCollapsed(state) {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    },
  },
});

export default appSlice.reducer;
export const { setIsSigninFormVisible, setIsSidebarCollapsed } =
  appSlice.actions;
