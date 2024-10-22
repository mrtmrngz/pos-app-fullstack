import {useField} from "formik";

const CustomInput = ({label, htmlFor, imageSection=false, ...props}) => {

    const [field, meta, helpers] = useField(props)

    return (
        <div className="flex flex-col gap-y-1.5">
            <label htmlFor={htmlFor} className="flex items-center gap-x-1">
                {label} <span className="text-danger">*</span>
            </label>
            <input className="w-full" {...field} {...props} />
            {((meta.error && meta.touched) && (!imageSection)) && (
                <span className="text-sm text-danger">{meta.error}</span>
            )}
        </div>
    );
};

export default CustomInput;