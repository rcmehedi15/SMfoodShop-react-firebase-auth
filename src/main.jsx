import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './components/Home';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage';
import EachJob from './components/Chef/chefDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: () => fetch(`http://localhost:5000/`)
      },

  
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/jobdetails/:jobId',
        element: <EachJob />,
        loader: () => fetch('http://localhost:5000/')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
