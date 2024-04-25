import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Errorpage from './pages/Errorpage';
import UnosRadnika from './pages/UnosRadnika';
import Radnici from './pages/Radnici';
import Homepages from './pages/Homepages';
import Logingpage from './pages/Logingpage';
import DetaljiRadnikapage from './pages/DetaljiRadnikapage';

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<Errorpage/>,
  children:[
    {
     path:'/home',
     element:<Homepages/>
    },
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
  }
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

