import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Errorpage from './pages/Errorpage';

import Logingpage from './pages/Logingpage';

import RegistarPage from './pages/RegistarPage';

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  errorElement:<Errorpage/>,
  children:[
  
  {
    path:'/login',
    element:<Logingpage/>
  },
 
  {
    path:'/registar',
    element:<RegistarPage/>
  }
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

