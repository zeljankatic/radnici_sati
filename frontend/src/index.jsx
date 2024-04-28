import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Errorpage from './pages/Errorpage';
import UnosRadnika from './pages/UnosRadnika';
import Radnici from './pages/Radnici';
import Logingpage from './pages/Logingpage';
import DetaljiRadnikapage from './pages/DetaljiRadnikapage';
import Register from './pages/Register';

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<Errorpage/>,
  children:[
    {
    path:'/unos_radnika',
    element:<UnosRadnika/>
  },
  {
    path:'/radnici',
    element:<Radnici/>
  },
  {
    path:'/login',
    element:<Logingpage/>
  },
  {
    path:'/radnici/:id',
    element:<DetaljiRadnikapage/>
  },
  {
    path:'/register',
    element:<Register/>
  }
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

