import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Authenticate = lazy(() => import("./pages/Authenticate.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/authenticate",
    element: (
      <Suspense fallback={<h1>Loading....</h1>}>
        <Authenticate />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
