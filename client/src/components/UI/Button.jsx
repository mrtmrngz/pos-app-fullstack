import {memo} from 'react';

const Button = ({children, className, type, size="medium", onClick, htmlType="button"}) => {
    return <button onClick={onClick} type={htmlType} className={`btn ${type && type} ${className && className} ${size && size}`}>{children}</button>
};

export default memo(Button);