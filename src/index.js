import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import DetailProduct from './components/Product/DetailProduct';
import { Context } from './Context/Contex';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>    
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <Product />,
      },
     
      {
        path: "/detail-product/:id",
        element: <DetailProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ]
    ,
    
  },
  {
    path: "/login",
    element: <Login />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Context> <RouterProvider router={router} /></Context>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();