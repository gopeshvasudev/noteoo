import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNotes: [],
  favouriteNotes: [],
  singleNote: {},
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

    setNote(state, action) {
      state.singleNote = action.payload;
    },
  },
});

export default noteSlice.reducer;
export const { setAllNotes, setFavouriteNotes, setNote } = noteSlice.actions;
