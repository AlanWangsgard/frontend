import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home'
import Account from './account'
import Image from './image'
import Login from './login'
import CreatePost from './createPost'
import CreateUser from './createUser'
import EditPost from './editPost'
import EditUser from './editProfile'
import '../css/style.css'
import Profile from './profile'
import Search from './search'
import Fyp from './fyp'

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
    path: '/account',
    element: <Account />
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
  },
  {
    path: '/editPost/:postId',
    element: <EditPost />
  },
  {
    path: '/editUser/:userName',
    element: <EditUser />
  },
  {
    path: '/profile/:userName',
    element: <Profile />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/fyp',
    element: <Fyp />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
