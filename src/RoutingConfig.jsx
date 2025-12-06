import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LandingPage from './LandingPage/LandingPage'
import Login from './LandingPage/Accounts/Login'
import Layout from './Layout'
import DashboardPage from './Dashboard/DashboardPage'
import SignUp from './LandingPage/Accounts/SignUp'
import ProtectedRoute from './ProtectRoute'
import ProductTable from './ProductTable/ProductTable'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
         path: "/",
         element: <LandingPage />,
      },
      {
        path: "/login",
        element:<Login/>,
      },
       {
        path: "/signup",
        element:<SignUp/>,
      },  
       {
        path: "/dashboard",
        element:<ProtectedRoute><DashboardPage/></ProtectedRoute>,
      },
      {
        path: "/product-table",
        element:<ProtectedRoute><ProductTable/></ProtectedRoute>,
      }, 
       
    ]
  }
])
const RoutingConfig = () => {
  return (
    <>
     <RouterProvider router={router}/>   
    </>
  )
}

export default RoutingConfig
