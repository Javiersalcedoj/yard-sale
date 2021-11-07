import React from 'react';

import "@styles/components/_inputs.scss"
const Input = (prop) => {
    const type = prop.type;
    const id = prop.id;
    const placeholder = prop.placeholder;

    return (
        <input type={type} name id={id} className="input" placeholder={placeholder} />
    );
}

export default Input;