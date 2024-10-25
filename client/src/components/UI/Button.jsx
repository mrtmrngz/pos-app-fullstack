import {memo} from 'react';

const Button = ({children, className, type, size="medium", onClick, htmlType="button", disabled}) => {
    return <button onClick={onClick} disabled={disabled} type={htmlType} className={`btn ${type && type} ${className && className} ${size && size}`}>{children}</button>
};

export default memo(Button);