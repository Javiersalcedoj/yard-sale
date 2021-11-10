import React from 'react';
import FormText from '../components/FormText';
import Logos from '../components/Logos'
import LoginContainer from '../containers/LoginContainer';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';

const title = 'Create new password';
const subtitle = 'Enter a new password for your account';

const CreateNewPassword = () => {
    return (
        <LoginContainer>
            <Logos />
            <FormText title={title} subtitle={subtitle}/>
            <Form>
                <Label id="password" text="Password"/>
                <Input type="password" id="password" placeholder="••••••••"/>
                <Label id="new-password" text="Re-enter password"/>
                <Input type="password" id="new-password" placeholder="••••••••"/>
                <input type="submit" value="Confirm" className=" primary-button" />
            </Form>
        </LoginContainer>
    );
}

export default CreateNewPassword;