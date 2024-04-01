import { useFormik } from 'formik'
import React from 'react'
import LoginService from '../services/logingService'
import * as Yup from 'yup'

function Logingpage() {
   
  const formik=useFormik({
    initialValues:{
      ime:'',
      password:''
    },
     validationSchema: Yup.object({
      ime:Yup.string().required('Unesite ime !!'),
      password:Yup.string().required('Unesite password !!')
      
     }),
    onSubmit:(values)=>{
      LoginService.logiranjeUsera(values)
      .then(req => console.log(values))
      .catch(err => console.log(err))
      console.log(values)
      formik.resetForm()
    }
  })
  
  const showError= (name)=> formik.errors[name]
&& formik.touched[name]  && formik.errors[name]

  return (
    <div className='mt-[50px]'>
      <h2 className='font-bold text-center uppercase'>Logirajte se </h2>
      <form onSubmit={formik.handleSubmit} 
      className='w-[40%] mt-[50px] border-2 border-yellow-300 flex flex-col rounded-lg items-center mx-auto'>
        <div className='flex flex-col'>
        <label className='text-[18px] my-[10px]'>Unesite ime :
        <span className=' px-[10px] text-[15px] text-red-500'>{showError('ime')}</span></label>
        <input 
        type='text' 
        name='ime'
        value = {formik.values.ime} 
        onChange={formik.handleChange}
        placeholder='Unesite ime:'
        className='border border-blue-400 rounded-lg  placeholder:text-[16px] px-[14px]'></input>
              </div>
        <div className='flex flex-col'>     
       <label className='text-[18px] my-[10px]'>Unesite password :
       <span className='px-[10px] text-[14px] text-red-500'>{showError('password')}</span></label>
        <input type='password'
         name='password'
         value={formik.values.password}
         onChange={formik.handleChange}
         placeholder='Unesite password:'
        className='border border-blue-500 rounded-lg px-[14px] placeholder:text-[16px]'></input>
</div> 
        <button type='submit' className='text-white bg-blue-500 border my-[15px] px-[30px]
        rounded-lg'>Login</button>
        
      </form>
    </div>
  )
}

export default Logingpage