import React from 'react';
import './style.css';

const Button = ({disabled, onClick, text, type}) => {

    return <button
    className="btn"
    disabled={disabled}
    onClick={onClick}
    type={type}
        >
        {text}
        </button>

};

Button.defaultProps = {
    onClick: null,
    disabled: false
};

export default Button;
