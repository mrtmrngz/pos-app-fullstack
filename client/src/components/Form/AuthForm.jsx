import {memo} from 'react'
import {Form, Formik} from "formik";
import CustomInput from "./CustomInput.jsx";
import {Link} from "react-router-dom";
import Button from "../UI/Button.jsx";

const AuthForm = ({type="register", handleSubmit, formInitialValues, validationSchema, loading}) => {

    return (
        <Formik
            initialValues={formInitialValues}
            onSubmit={(values, actions) => {
                handleSubmit(values, actions)
            }}
            validationSchema={validationSchema}
        >

            {({values}) => (
                <Form className="border p-5 border-border-color rounded w-[300px] sm:w-[400px] flex flex-col gap-y-3">

                    <h1 className="text-center">{type !== "register" ? "Login" : "Sign Up"}</h1>

                    <CustomInput label="Email" name="email" type="email" htmlFor="email" id="email" placeholder="Enter Your Email" />

                    <CustomInput label="Password" name="password" type="password" htmlFor="password" id="password" placeholder="Enter Your Password" />

                    {type === "register" && (
                        <CustomInput label="Password Verification" name="passwordAgain" type="password" htmlFor="passwordAgain" id="passwordAgain" placeholder="Enter Your Password Again" />
                    )}

                    <Button disabled={loading} htmlType="submit" type="primary" className="!w-full !m-0 !my-2">
                        {type !== "register" ? "Login" : "Sign Up"}
                    </Button>

                    {type !== "register" ? (
                        <span className="text-sm text-center">Don't Have an Account Yet? <Link to="/register" className="text-blue-500">Sign Up Now</Link> </span>
                    ) : (
                        <span className="text-sm text-center">Do you have an account? <Link to="/login" className="text-blue-500">Log In Now</Link> </span>
                    )}
                </Form>
            )}

        </Formik>
    );
};

export default memo(AuthForm);