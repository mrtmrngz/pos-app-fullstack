import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const registerValidation = yup.object().shape({
    email: yup.string()
        .email("Please enter a valid email address!")
        .required("Email field is required!"),
    password: yup.string()
        .min(5, "Password field must be at least 5 characters")
        .matches(passwordRules, {
            message: "The password field must contain at least one uppercase letter, one lowercase letter, and one number."
        })
        .required("Password field is required!"),
    passwordAgain: yup.string()
        .oneOf([yup.ref('password')], "Passwords do not match")
        .required("Password Verification field is required!")
})

export const loginValidation = yup.object().shape({
    email: yup.string()
        .email("Please enter a valid email address!")
        .required("Email field is required!"),
    password: yup.string()
        .min(5, "Password field must be at least 5 characters")
        .matches(passwordRules, {
            message: "The password field must contain at least one uppercase letter, one lowercase letter, and one number."
        })
        .required("Password field is required!")
})