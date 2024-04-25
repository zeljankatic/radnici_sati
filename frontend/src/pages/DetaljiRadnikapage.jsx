import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UnosPodatakaRadnika from '../services/unosPodatakRadnika'
import {useFormik} from 'formik'
import PrenosBazaRadniSati from '../services/prenosBazaRadniSati'
import * as Yup from 'yup';

function DetaljiRadnikapage() {
    const {id} = useParams()
    const izradnik = false;
    const [radnik, setRadnik] = useState({})
//     useEffect(()=>{
//       if(izradnik) return;
//       UnosPodatakaRadnika.podaciRadnika(id)
//       .then(res => {setRadnik(res.data)})
//       .catch(err => console.log(err))
// console.log('')
//     },)

  

    const formik = useFormik ({
      initialValues:{
        radni_sati:'',
        datum:'',
        sifra:`${parseInt(id)}`
},
    //validacija   
       
onSubmit :(values) =>{
  console.log(values)
  PrenosBazaRadniSati.prenosBazaSati(values)
   .then(res => console.log(res.data))
   .catch(err => console.log(err))
  formik.resetForm()
}
    })
   
    
  return (
    <div className=''>
        <h1 className='uppercase text-center mt-[40px]'>Unos podataka za radnika 
         <span className='border mx-[20px] bg-blue-300 px-[16px] rounded-lg  '>{radnik.ime} {radnik.prezime}</span></h1>
        <form onSubmit={formik.handleSubmit} className='w-[50%] border bg-yellow-200 mt-[40px] rounded-lg mx-[280px]'>
          <div className='flex flex-col '>
            <label className='mx-[180px] mt-[40px]'>Unesite radne sate</label>
            <input type='number'
            name='radni_sati'
            value={formik.values.radni_sati}
            onChange={formik.handleChange}
           placeholder='Unesite radne sate'
            className='border rounded-lg px-[30px] mx-[140px] mt-[10px]'></input>

             <div className='flex flex-col '>
            <label className='mt-[15px] mx-[180px]'>Unesite datum</label>
            <input type='date'
            name='datum'
            value={formik.values.datum}
            onChange={formik.handleChange}
            className='border rounded-lg px-[30px] mx-[140px] mt-[10px]'></input>
           
            </div>
            <button type='submit' className='border bg-blue-400 rounded-lg text-white py-[6px] mx-[140px] my-[40px]
            '>Unesite  podatke</button>
            </div>
        </form>
        
    </div>
  )
}

export default DetaljiRadnikapage