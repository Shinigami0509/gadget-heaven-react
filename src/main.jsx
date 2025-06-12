import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import GadgetDetails from './components/GadgetDetails/GadgetDetails.jsx';
import { gadgetLoader } from '../src/utility/loader.js';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        loader: () => gadgetLoader() 
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/gadgets/:product_id',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => gadgetLoader() 
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
