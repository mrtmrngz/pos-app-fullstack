import AuthForm from "../components/Form/AuthForm.jsx";
import {loginValidation} from "../Validations/AuthValidation.js";
import {useAuth} from "../Context/index.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import apiRequest from "../libs/apiRequest.js";

const LoginPage = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const {updateUser} = useAuth()
    const navigate = useNavigate()

    const formInitialValues = {
        email: "",
        password: ""
    }


    const handleSubmit = async (values, actions) => {
        setLoading(true)
        setError("")

        try {
            const res = await apiRequest.post('/auth/login', {email: values.email, password: values.password})

            updateUser(res.data)

            navigate('/')

        }catch (err) {
            setError(err.response.data.error)
        }finally {
            setLoading(false)
        }
    }

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            {error && <span className="text-danger text-lg p-5 text-center w-[300px] sm:w-[400px]">{error}</span>}
            <AuthForm loading={loading} type="login" handleSubmit={handleSubmit} formInitialValues={formInitialValues} validationSchema={loginValidation} />
        </div>
    );
};

export default LoginPage;