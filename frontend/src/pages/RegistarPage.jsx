import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

// eslint-disable-next-line react-hooks/rules-of-hooks
const formik = useFormik({
    initialValues:{
        name:'',
        prezime:'',
        email:'',
        password:''

    },
    validationSchema:Yup.object({
        name:Yup.string().required('Unesite ime !!'),

    }),
onSubmit:(values)=>{
    console.log(values)
    formik.resetForm();
}

})
function RegistarPage() {
  return (
    <div className='wy-[50px]'>
        <h1 className='text-center uppercase font-bold'>registracija radnika </h1>
        <form onSubmit={formik.handleSubmit} className='w-[40%] mt-[40px] border-2 border-blue-500 mx-auto
        flex flex-col items-center rounded-md '>
<div className='flex flex-col'>
    <label className='text-[14px] my-[10px]'>Unesite ime :</label>
    <input 
    type='text'
    name='name'
    placeholder='Unesite Ime :'
    value={formik.values.name}
    onChange={formik.handleChange}
    className='border border-blue-400 rounded-lg  placeholder:text-[16px] px-[14px]'></input>
</div>
<div className='flex flex-col'>
    <label className='text-[14px] my-[10px]'>Unesite prezime :</label>
    <input
    type ='text'
    name='prezime'
    placeholder='Unesite Prezime :'
    value={formik.values.prezime}
    onChange={formik.handleChange}
    className='border border-blue-400 rounded-lg  placeholder:text-[16px] px-[14px]'  ></input>
</div>
<div className='flex flex-col'>
    <label className='text-[14px] my-[10px]'>Unesite e-mail :</label>
    <input 
    type='email'
    name='email'
    placeholder='Unesite e-mail'
    value={formik.values.email}
    onChange={formik.onChange}
    className='border border-blue-400 rounded-lg  placeholder:text-[16px] px-[14px]'></input>
</div>
<div className='flex flex-col'>
    <label className='text-[14px] my-[10px]'>Unesite password :</label>
    <input 
    type='text'
    name='password'
    placeholder='Unesite password :'
    value={formik.values.password}
    onChange={formik.handleChange}
    className='border border-blue-400 rounded-lg  placeholder:text-[16px] px-[14px]'></input>
</div>
<button type ='submit' className='uppercase border bg-blue-600 text-white 
my-[20px] rounded-md px-[10px]'>Registracija</button>
        </form>

    </div>
  )
}

export default RegistarPage