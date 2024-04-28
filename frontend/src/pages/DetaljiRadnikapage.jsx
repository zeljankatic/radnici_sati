import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import RadniSatiService from "../services/radni-sati.service";
import RadniciService from "../services/radnici.service";

function DetaljiRadnikapage() {
  const { id } = useParams();
  const [radnik, setRadnik] = useState({});

  useEffect(() => {
    const radniciService = new RadniciService();
    radniciService
      .getOne(id)
      .then((res) => {
        setRadnik(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const formik = useFormik({
    initialValues: {
      radni_sati: "",
      datum: "",
      radnikId: id,
    },
    //validacija
    onSubmit: (values) => {
      const radniSatiService = new RadniSatiService();
      console.log(values);
      radniSatiService
        .create(values)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
      formik.resetForm();
    },
  });

  return (
    <div className="">
      <h1 className="uppercase text-center mt-[40px]">
        Unos podataka za radnika
        <span className="border mx-[20px] bg-blue-300 px-[16px] rounded-lg">
          {radnik.ime} {radnik.prezime}
        </span>
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="w-[50%] border bg-yellow-200 mt-[40px] rounded-lg mx-[280px]"
      >
        <div className="flex flex-col ">
          <label className="mx-[180px] mt-[40px]">Unesite radne sate</label>
          <input
            type="number"
            name="radni_sati"
            value={formik.values.radni_sati}
            onChange={formik.handleChange}
            placeholder="Unesite radne sate"
            className="border rounded-lg px-[30px] mx-[140px] mt-[10px]"
          ></input>

          <div className="flex flex-col">
            <label className="mt-[15px] mx-[180px]">Unesite datum</label>
            <input
              type="date"
              name="datum"
              value={formik.values.datum}
              onChange={formik.handleChange}
              className="border rounded-lg px-[30px] mx-[140px] mt-[10px]"
            ></input>
          </div>
          <button
            type="submit"
            className="border bg-blue-400 rounded-lg text-white py-[6px] mx-[140px] my-[40px]
            "
          >
            Unesite podatke
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetaljiRadnikapage;
