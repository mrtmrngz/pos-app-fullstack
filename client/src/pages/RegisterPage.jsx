import AuthForm from "../components/Form/AuthForm.jsx";
import {registerValidation} from "../Validations/AuthValidation.js";

const RegisterPage = () => {

    const formInitialValues = {
        email: "",
        password: "",
        passwordAgain: ""
    }

    const handleSubmit = (values, actions) => {
        alert("register")
    }

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <AuthForm handleSubmit={handleSubmit} formInitialValues={formInitialValues} validationSchema={registerValidation} />
        </div>
    );
};

export default RegisterPage;