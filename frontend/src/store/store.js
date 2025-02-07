import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./reducers/app.slice";
import tokenReducer from "./reducers/token.slice";

const store = configureStore({
  reducer: {
    app: appReducer,
    token: tokenReducer,
  },
});

export default store;
