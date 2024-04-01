import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import UserService from '../services/userService'
import { toast } from 'react-toastify'
import { useNavigation } from 'react-router-dom'





function UnosRadnika() {

    const navigation = useNavigation()

    const formik = useFormik({

        initialValues:{
            ime:'',
            prezime:''
        },
        validationSchema: Yup.object({
            ime: Yup.string().required ('Morate upisati ime'),
            prezime:Yup.string().required('Morate upisati prezime')

        }),

        
        
        onSubmit:(values)=>{
            console.log(values)
            UserService.unosUsera(values)
            .then(res =>{
                if(res.status === 201){
              toast.success('Radnik je uspjesno upisan u bazu !')
            //   setTimeout( ()=>navigation('/home'),2000)
                }
            })
            .catch(err => console.log(err))
            formik.resetForm();
        }
    })

    const showError = (name)=>formik.errors[name]
    && formik.touched[name] && formik.errors[name]

  return (
    <div className='mt-[50px]'>
        <h2 className='text-center mt-[0px] text-blue-600 font-bold uppercase'>Forma za unos radnika</h2>
        <form onSubmit={formik.handleSubmit} 
        className='border-2 border-yellow-500 w-[50%] mt-[40px]
        flex flex-col bg-slate-200 items-center rounded-xl px-[20px] mx-auto'>
           <div className='flex flex-col'> 
            <label className='mt-[20px] text-[17px]'>Unesite ime :<span className='text-[13px] text-red-500 px-[16px]'>{showError('ime')}</span></label>
            <input 
            type='text' 
            name="ime"
            value={formik.values.ime}
            onChange={formik.handleChange} 
            placeholder='Unesite ime'
            className='border border-yellow-100 mt-[15px] rounded-lg px-[16px] py-[5px]'></input>
            </div>
        <div className='flex flex-col'>
            <label className='mt-[10px] text-[17px] '>Unesite prezime :<span className='text-[13px] text-red-500 px-[16px]'>{showError('prezime')}</span></label>
            <input 
            type='text' 
            name="prezime" 
            value={formik.values.prezime}
            onChange={formik.handleChange} 
            placeholder='Unesite prezime'className='mt-[10px] rounded-lg px-[16px] py-[5px]'></input>
         </div>
            <button type='submit' className='border my-[30px]  bg-blue-500 text-white px-[20px]
             rounded-xl py-[6px]'>Spremi</button>
        </form>
    </div>
  )
}

export default UnosRadnika