import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact/Contact.jsx'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About.jsx'
import Users from './Components/Users/Users.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>

      }
    ]
  },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
