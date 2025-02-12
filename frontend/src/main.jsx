import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";

const Home = lazy(() => import("./pages/Home.jsx"));
const Authenticate = lazy(() => import("./pages/Authenticate.jsx"));
const CreateNote = lazy(() => import("./pages/CreateNote.jsx"));
const FavouriteNotes = lazy(() => import("./pages/FavouriteNotes.jsx"));

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
      {
        path: "/note/create",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <CreateNote />
          </Suspense>
        ),
      },
      {
        path: "/authenticate",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Authenticate />
          </Suspense>
        ),
      },
      {
        path: "/note/favourite",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <FavouriteNotes />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
