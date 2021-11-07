import React from 'react';
import "@styles/components/_label.scss"

const Label = (prop) => {
    const id = prop.id
    const text = prop.text
    return (
        <label htmlFor={id} className="label">{text}</label>
    );
}

export default Label;