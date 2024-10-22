import {useField} from "formik";

const CustomSelect = ({label, htmlFor, data, selectTitle, ...props}) => {

    const [field, meta] = useField(props)

    return (
        <div className="flex flex-col gap-y-1.5">
            <label htmlFor={htmlFor} className="flex items-center gap-x-1">
                {label} <span className="text-danger">*</span>
            </label>

            <select className="border border-border-color focus:outline-none focus:border-text-color h-9 pl-2" {...field} {...props} >
                <option value="">{selectTitle}</option>
                {data.map((item) => (
                    <option key={item.key} value={item.key}>{item.value}</option>
                ))}
            </select>

            {(meta.error && meta.touched) && (
                <span className="text-sm text-danger">{meta.error}</span>
            )}
        </div>
    );
};

export default CustomSelect;