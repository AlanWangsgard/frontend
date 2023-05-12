import React from 'react'
import ReactDOM from 'react-dom/client'
import Hello from './hello'
import Profile from './profile'
import Image from './image'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/image',
    element: <Image />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
