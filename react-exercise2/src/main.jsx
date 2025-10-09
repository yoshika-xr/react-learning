import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Carddata from './components/Carddata.jsx'
import Cardcreate  from './components/Cardcreate.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:< Carddata />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
