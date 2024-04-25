import { useFormik } from 'formik'
import React from 'react'
import LoginService from '../services/logingService'
import * as Yup from 'yup'

const userLoginSchema = Yup.object({
  ime: Yup.string().required('Unesite ime !!'),
  password: Yup.string().required('Unesite password !!')
});

function Logingpage() {
  const formik = useFormik({
    initialValues: {
      ime:'',
      password:''
    },
    validationSchema: userLoginSchema,
    onSubmit: (values) => {
      LoginService.logiranjeUsera(values)
      .then(req => console.log(req))
      .catch(err => console.log(err))

      formik.resetForm()
    }
  })
  
  const showError= (name)=> formik.errors[name]
    && formik.touched[name] && formik.errors[name]

  return (
    <div className=''>
      <h2 className='font-bold text-center uppercase'>Logirajte se</h2>
      <form
        onSubmit={formik.handleSubmit}
        className='w-[40%] mt-[50px] border-2 border-yellow-300 flex flex-col rounded-lg items-center mx-auto'
      >
        <div className='flex flex-col'>
          <label className='text-lg my-2' for="ime">
            <span>Unesite ime:</span>
            <span className='px-2 text-4 text-red-500'>{showError('ime')}</span>
          </label>
          <input
            type='text'
            name='ime'
            id='ime'
            value = {formik.values.ime}
            onChange={formik.handleChange}
            placeholder='Unesite ime:'
            className='border border-blue-400 rounded-lg placeholder:text-base px-4 py-1'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-[18px] my-[10px]' for="password">
            <span>Unesite password:</span>
            <span className='px-2 text-4 text-red-500'>{showError('password')}</span>
          </label>
          <input
            type='password'
            name='password'
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder='Unesite password:'
            className='border border-blue-400 rounded-lg placeholder:text-base px-4 py-1'
          />
        </div>
        <button type='submit' className='text-white bg-blue-500 border my-4 px-8 py-2 rounded-lg'>Login</button>
      </form>
    </div>
  )
}

export default Logingpage