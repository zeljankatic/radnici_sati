import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RadniciService from '../services/radnici.service';

function Radnici() {

  const [data, setData]=useState([])

  useEffect(() => {
    const radniciService = new RadniciService();
    radniciService.getAll()
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  },[])
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-cyan-900">
        <table className="shadow-2xl font-[Poppins] border-2 border-cyan-200 w-6/12
        oveerflower-hiden">
          <thead className="text-white">
            <tr>
              <th className="py-3 bg-cyan-800">IN</th>
              <th className="py-3 bg-cyan-800">Ime</th>
              <th className="py-3 bg-cyan-800">Prezime</th>
              <th className="py-3 bg-cyan-800">Radni sati</th>
              <th className="py-3 bg-cyan-800">Datum</th>
            </tr>
          </thead>
          <tbody className="text-center text-cyan-900">
            {data.map(student => 
              <Link to={`/radnici/${student.id}`}>
                <tr className="duration-300 cursor-pointer bg-cyan-200 hover:scale-105 ">
                  <td className="px-6 py-3" >{student.id}</td>
                  <td className="px-6 py-3">{student.ime}</td>
                  <td className="px-6 py-3">{student.prezime}</td>
                  <td className="px-6 py-3">{student.radni_sati}</td>
                  <td className="px-6 py-3">{student.datum}</td>
                </tr>
              </Link>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Radnici