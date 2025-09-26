import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router=createBrowserRouter({
  path:"/",
  element:<Home />
},
{
path:"/login",
element:<Login />
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


// npm install react-router-dom