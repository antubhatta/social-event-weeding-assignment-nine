import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Register from './Pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import ErrorPage from './Components/ErrorPage';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './Components/PrivateRoute';
import About from './Pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('../wedding.json')
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader:()=>fetch('../wedding.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path:"/about",
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:"/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
