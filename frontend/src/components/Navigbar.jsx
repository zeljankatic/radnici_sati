import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiUser } from "react-icons/hi";

function Navigbar() {
const navitems =[
    {
       path: '/unos_radnika',
       icon:'',
       label:'Unos radnika'
    },
     {
        path: '/radnici',
        icon:'',
        label:'Radnici'
     },
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
   </div>
  )
}

export default Navigbar