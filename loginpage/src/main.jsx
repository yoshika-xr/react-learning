import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nodifyerr from "./components/Nodifyerr.jsx";
import '../src/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Nodifyerr />
  },
  {
    path: "/login",
    element: <Login />
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// npm install react-router-dom
