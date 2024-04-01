import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navigbar() {
const navitems =[
    {
       path: '/unos_radnika',
       icon:'',
       label:'Unos radnika'
    },
    {
        path: '/home',
        icon:'',
        label:'Home'
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
     }
]

  return (
    <div className='border my-[30px] bg-slate-400 rounded-lg'>
   <nav className='container mx-auto mt-[30px]'>
    <div className='flex justify-between items-center h-full'>
    <Link className='mx-[120px] my-[40px] uppercase border bg-slate-300 px-[16px]
    py-[8px] rounded-xl  text-amber-950' to='/home'>Evidencija radnih sati radnika</Link>
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
   </div>
  )
}

export default Navigbar