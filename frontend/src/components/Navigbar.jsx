import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiUser } from "react-icons/hi";

function Navigbar() {
const navitems =[
  
    {
       path: '/registar',
       icon:'',
       label:'Registar'
    },
<<<<<<< HEAD
  
=======
     {
        path: '/radnici',
        icon:'',
        label:'Radnici'
     },
>>>>>>> 1320c96a4c55346fdff7cca4b1bcbc30acb592d7
     {
        path:'/login',
        icon:'',
        label:'Login'
     },
     {
         icon: <HiUser className='text-amber-950 text-2xl'/>,
         label:'Korisnik'
     }
]

  return (
<<<<<<< HEAD
    <div className='border my-[30px] bg-slate-400 rounded-lg'>
   <nav className='container mx-auto mt-[30px]'>
    <div className='flex justify-between items-center h-full'>
    <Link className='mx-[120px] my-[40px] uppercase border bg-slate-300 px-[16px]
    py-[8px] rounded-xl  text-amber-950' to='/'>Evidencija radnih sati radnika</Link>
<ul className='flex gap-5'>
    {navitems.map((nav,index)=>{
        return <li className='' key={index}>
            <NavLink className='bg-red-600 text-white px-[16px] py-[8px] rounded-xl' 
            to={nav.path}>{nav.label}</NavLink>
            </li>
    })}
</ul>
</div>
   </nav>
=======
    <div className='shadow'>
      <nav className='container mx-auto py-3'>
         <div className='flex justify-between items-center h-full'>
            <Link className='uppercase border shadow-sm p-2 rounded' to='/'>Evidencija radnih sati radnika</Link>
            <ul className='flex gap-5'>
               {navitems.map((nav,index) => {
                  return (
                     <li className='' key={index}>
                        {nav.path ? 
                           (
                              <NavLink className='border shadow-sm p-2 rounded block' to={nav.path}>{nav.label}</NavLink>
                           ) : (
                              <div className='flex gap-2 border shadow-sm p-2 rounded'>
                                 <p>{nav.label}</p>
                                 {nav.icon}
                              </div>
                           )
                        }
                     </li>
                  )}
               )}
            </ul>
         </div>
      </nav>
>>>>>>> 1320c96a4c55346fdff7cca4b1bcbc30acb592d7
   </div>
  )
}

export default Navigbar