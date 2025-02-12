import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNotes: [],
  favouriteNotes: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setAllNotes(state, action) {
      state.allNotes = action.payload;
    },

    setFavouriteNotes(state, action) {
      state.favouriteNotes = action.payload;
    },
  },
});

export default noteSlice.reducer;
export const { setAllNotes, setFavouriteNotes } = noteSlice.actions;
