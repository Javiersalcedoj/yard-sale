import React from 'react';

import FormText from '../components/FormText';
import Logos from '../components/Logos'
import LoginContainer from '../containers/LoginContainer';
import EmailImage from '../components/EmailImage';

const title = 'Emai has been sent!';
const subtitle = 'Please check your inbox for instructions on how to reset the plassword'

const EmailSend = () => {
    return (
        <LoginContainer>
            <Logos />
            <FormText title={title} subtitle={subtitle}/>
            <EmailImage />
            <button className="primary-button">Login</button>

            <a href="/"> <span>Didn't receive the email? </span>Back to Log in</a>
                      
        </LoginContainer>
    );
}

export default EmailSend;