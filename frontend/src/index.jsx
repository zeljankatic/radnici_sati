import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Errorpage from './pages/Errorpage';
<<<<<<< HEAD:frontend/src/index.js

import Logingpage from './pages/Logingpage';

import RegistarPage from './pages/RegistarPage';
=======
import UnosRadnika from './pages/UnosRadnika';
import Radnici from './pages/Radnici';
import Logingpage from './pages/Logingpage';
import DetaljiRadnikapage from './pages/DetaljiRadnikapage';
import Register from './pages/Register';
>>>>>>> 1320c96a4c55346fdff7cca4b1bcbc30acb592d7:frontend/src/index.jsx

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<Errorpage/>,
  children:[
<<<<<<< HEAD:frontend/src/index.js
  
=======
    {
    path:'/unos_radnika',
    element:<UnosRadnika/>
  },
  {
    path:'/radnici',
    element:<Radnici/>
  },
>>>>>>> 1320c96a4c55346fdff7cca4b1bcbc30acb592d7:frontend/src/index.jsx
  {
    path:'/login',
    element:<Logingpage/>
  },
 
  {
<<<<<<< HEAD:frontend/src/index.js
    path:'/registar',
    element:<RegistarPage/>
=======
    path:'/radnici/:id',
    element:<DetaljiRadnikapage/>
  },
  {
    path:'/register',
    element:<Register/>
>>>>>>> 1320c96a4c55346fdff7cca4b1bcbc30acb592d7:frontend/src/index.jsx
  }
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

