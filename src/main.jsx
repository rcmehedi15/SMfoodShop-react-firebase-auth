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
import ChefProvider from './ChefProvider/ChefProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Account from './components/Account/Account';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: () => fetch(`https://smfoodshop-server.vercel.app`)
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
        path: '/profile',
        element: <PrivateRoute><Account></Account></PrivateRoute>
      },
      {
        path: '/FoodDetails/:jobId',
        element: <PrivateRoute><EachJob /></PrivateRoute>,
        loader: () => fetch(`https://smfoodshop-server.vercel.app`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChefProvider><RouterProvider router={router} /></ChefProvider>
  </React.StrictMode>,
)
