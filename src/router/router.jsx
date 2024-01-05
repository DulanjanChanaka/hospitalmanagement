import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/layout'
import Home from '../pages/home'
import Clinic from '../pages/clinic'
import Info from '../pages/info'
import About from '../pages/about'


const router = createBrowserRouter([
    {
        path:"/",
        Component:Layout,
        children: [{
            index:true,
            Component:Home,

        },
        {
            path:"clinic",
            Component:Clinic,
        },
        {
            path:"info",
            Component:Info,
        },
        {
            path:"about",
            Component:About
        }
           

        ]
    }
])

const Router = () => {
  return <RouterProvider router={router}/>
}

export default Router