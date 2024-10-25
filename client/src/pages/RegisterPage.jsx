import AuthForm from "../components/Form/AuthForm.jsx";
import {registerValidation} from "../Validations/AuthValidation.js";
import {useAuth} from "../Context/index.js";
import {useRef, useState} from "react";
import apiRequest from "../libs/apiRequest.js";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const formInitialValues = {
        email: "",
        password: "",
        passwordAgain: ""
    }

    const handleSubmit = async (values, actions) => {

        setLoading(true)
        setError("")

        const registeredValues = {
            email: values.email,
            password: values.password
        }

        try {

            const res = await apiRequest.post('/auth/register', registeredValues)

            navigate('/login')

        }catch (err) {
            console.log(err.response.data.error)
            setError(err.response.data.error)
        }finally {
            setLoading(false)
        }
    }

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            {error && <span className="text-danger text-lg p-5 text-center w-[300px] sm:w-[400px]">{error}</span>}
            <AuthForm loading={loading} handleSubmit={handleSubmit} formInitialValues={formInitialValues} validationSchema={registerValidation} />
        </div>
    );
};

export default RegisterPage;