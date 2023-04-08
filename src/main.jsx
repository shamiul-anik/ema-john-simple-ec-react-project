import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './components/Layout/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Review from './components/Review/Review';
import Login from './components/Login/Login';
import { cartItemsLoader } from './utilities/cartItemsLoader';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartItemsLoader
      },
      {
        path: "/review",
        element: <Review></Review>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
