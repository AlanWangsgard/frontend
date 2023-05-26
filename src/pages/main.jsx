import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home'
import Profile from './profile'
import Image from './image'
import Login from './login'
import CreatePost from './createPost'
import CreateUser from './createUser'
import '../css/style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/image',
    element: <Image />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/createPost',
    element: <CreatePost />
  },
  {
    path: '/createUser',
    element: <CreateUser />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
