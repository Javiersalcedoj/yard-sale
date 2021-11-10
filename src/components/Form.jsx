import React from 'react';

import '@styles/components/_form.scss'

const Form = ({children}, prop)=> {
    const ref = prop.ref
    return (
        <form action="/" className="form" ref={ref}>
            {children}
        </form>
    );
}

export default Form;