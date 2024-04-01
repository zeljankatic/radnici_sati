import React from 'react'
import { Link } from 'react-router-dom'

function Logginbar() {
  return (
  
        <div className='border my-[30px] bg-slate-400 rounded-lg'>
          <nav className='container mx-auto mt-[30px]'>
            <div className='flex justify-between items-center h-full'>
     <Link className='mx-[120px] my-[40px] uppercase border bg-slate-300 px-[16px]
     py-[8px] rounded-xl  text-amber-950' to='/home'>Evidencija radnih sati radnika</Link>
              <Link to ='/login'> <h1 className='border bg-yellow-300 rounded-lg px-[16px] py-[7px] m' >Logirajte se</h1></Link>
          </div>
        </nav>
       </div>
    
  )
}

export default Logginbar