import React from "react";
import { Toaster } from "react-hot-toast";

import useRefreshTokenHandler from "./hooks/useRefreshTokenHandler";
import Body from "./components/Body";

const App = () => {
  useRefreshTokenHandler(8 * 1000);

  return (
    <>
      <Toaster />
      <Body />
    </>
  );
};

export default App;
