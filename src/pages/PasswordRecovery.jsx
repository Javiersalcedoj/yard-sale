import React from 'react';

import LoginContainer from '../containers/LoginContainer';
import Logos from '../components/Logos'
import FormText from '../components/FormText';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/input';

const title = 'Password recovery';
const subtitle = 'Inform the email address used to create your account'
const PasswordRecovery = () => {
    return (
        <LoginContainer>
            <Logos />
            <FormText title={title} subtitle={subtitle} />
            <Form>
                <Label id='email' text='Email address'/>
                <Input type="email" id="email" placeholder="camilayokii@gamil.com"/>
                <input type="submit" value="Submit" className=" primary-button" />
                <a href="/">Back to Log in</a>
            </Form>
        </LoginContainer>
    );
}

export default PasswordRecovery;