import React from 'react';

import "@styles/components/_formText.scss";

const FormText = (prop) => {
    const title = prop.title;
    const subtitle = prop.subtitle;
    return (
        <React.Fragment>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
        </React.Fragment>
    );
}

export default FormText;