import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigbar from './components/Navigbar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <div>
     
      <Navigbar/>
      <Outlet/>
      <ToastContainer/>

    </div>
  )
}

export default App
