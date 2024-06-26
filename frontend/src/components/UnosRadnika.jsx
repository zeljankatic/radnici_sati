import { useFormik } from "formik";
import RadniSatiService from "../services/radni-sati.service";
import createDateString from "../utilities/dateString";

const UnosRadnika = ({ id, className }) => {
  const formik = useFormik({
    initialValues: {
      radni_sati: "",
      datum: "",
      radnikId: id,
    },
    //validacija
    onSubmit: (values) => {
      const radniSatiService = new RadniSatiService();
      radniSatiService
        .create({ ...values, datum: createDateString(new Date(values.datum)) })
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={className}>
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
  );
};

export default UnosRadnika;
