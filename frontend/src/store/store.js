import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./reducers/app.slice";
import tokenReducer from "./reducers/token.slice";
import noteReducer from "./reducers/note.slice";

const store = configureStore({
  reducer: {
    app: appReducer,
    token: tokenReducer,
    note: noteReducer,
  },
});

export default store;
