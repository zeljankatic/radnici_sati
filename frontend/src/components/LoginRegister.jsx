import { Link } from "react-router-dom";
import LoginService from "../services/logingService";
import * as Yup from 'yup';
import { useFormik } from 'formik';

const userLoginSchema = Yup.object({
    ime: Yup.string().required('Unesite ime!!'),
    password: Yup.string().required('Unesite password!!')
});

export function LoginRegister(props) {
    const formik = useFormik({
        initialValues: {
            ime: '',
            password: ''
        },
        validationSchema: userLoginSchema,
        onSubmit: (values) => {
            LoginService.logiranjeUsera(values)
                .then(req => console.log(req))
                .catch(err => console.log(err))
    
            formik.resetForm()
        }
    });

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name]

    return (
        <div className="border shadow-md mt-8 p-4">
            <h1 className="text-xl font-semibold mb-6">{props.pathname === '/register' ? 'Registrirajte se' : 'Logirajte se'}</h1>
            <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Unesite ime"
                        id="ime"
                        name="ime"
                        className="p-2 border border-gray-300 rounded"
                        value={formik.values.ime}
                        onChange={formik.handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Unesite password"
                        className="p-2 border border-gray-300 rounded"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">{props.pathname === '/register' ? 'Registrirajte se' : 'Logirajte se'}</button>
            </form>
            {props.pathname === '/register' ? (
                <p className="mt-4 text-sm">Već ste član? <Link to="/" className="text-blue-500">Logirajte se</Link></p>
            ) : (
                <p className="mt-4 text-sm">Niste još registrirani? <Link to="/register" className="text-blue-500">Registrirajte se</Link></p>
            )}
        </div>
    )
};