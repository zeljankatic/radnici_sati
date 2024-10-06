import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navigbar from '../components/Navigbar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { LoginRegister } from '../components/LoginRegister';

function App() {
  const location = useLocation();

  return (
    <div>
      <Navigbar />
      <Outlet />
      {/* <LoginRegister pathname={location.pathname}/> */}
      <ToastContainer />
    </div>
  )
}

export default App
