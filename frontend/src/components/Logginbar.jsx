import React from 'react'
import { Link } from 'react-router-dom'

function Logginbar() {
  return (
        <div className='bg-slate-400 mb-12'>
          <nav className='container mx-auto px-10'>
            <div className='flex justify-between items-center h-full'>
              <Link className='mx-30 my-10 uppercase border bg-slate-300 px-4 py-2 rounded-xl text-amber-950' to='/home'>Evidencija radnih sati radnika</Link>
              <Link to ='/login'> <h1 className='border bg-yellow-300 rounded-lg px-4 py-2' >Logirajte se</h1></Link>
          </div>
        </nav>
       </div>
  )
}

export default Logginbar