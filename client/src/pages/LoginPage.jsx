import AuthForm from "../components/Form/AuthForm.jsx";
import {loginValidation} from "../Validations/AuthValidation.js";

const LoginPage = () => {

    const formInitialValues = {
        email: "",
        password: ""
    }


    const handleSubmit = (values, actions) => {
        alert("login")
    }

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <AuthForm type="login" handleSubmit={handleSubmit} formInitialValues={formInitialValues} validationSchema={loginValidation} />
        </div>
    );
};

export default LoginPage;