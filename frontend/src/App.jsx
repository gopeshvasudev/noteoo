import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

import useRefreshTokenHandler from "./hooks/useRefreshTokenHandler";

const App = () => {
  useRefreshTokenHandler(8 * 1000);

  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
};

export default App;
