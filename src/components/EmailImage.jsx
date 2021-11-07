import React from 'react';

import email from '@icons/email.svg';

import '@styles/components/_emailImage.scss';

const EmailImage = () => {
    return (
        <div className="email-image">
            <img src={email} alt="email" />
        </div>
    );
}

export default EmailImage;