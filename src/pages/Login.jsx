import React from 'react';

import LoginContainer from '../containers/LoginContainer';
import Logos from '../components/Logos'
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/input';

const Login = () => {
    return (
        <LoginContainer>
            <Logos />
            <Form>
                <Label id="email" text="Email address"/>
                <Input type="email" id="email" placeholder="camilayokii@gamil.com"/>
                <Label id="password" text="Password"/>
                <Input type="password" id="password" placeholder="••••••••"/>
                <input type="submit" value="Log in" className=" primary-button" />
                <a href="/">Forgot my password</a>
            </Form>
            <button class="secondary-button position-button">Sign up</button>
        </LoginContainer>
    );
}

export default Login;