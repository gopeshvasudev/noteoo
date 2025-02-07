import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/app.slice";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
