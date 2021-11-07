import React from 'react';

import '@styles/components/_form.scss'

const Form = ({children}) => {
    return (
        <form action="/" className="form">
            {children}
        </form>
    );
}

export default Form;