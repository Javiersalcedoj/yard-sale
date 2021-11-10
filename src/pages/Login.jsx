import React, { useRef } from 'react';

import LoginContainer from '../containers/LoginContainer';
import Logos from '../components/Logos'

import '@styles/components/_form.scss'

const Login = () => {
    const form =  useRef (null);

    const handleSubmit = () => {
        //agg esto
        event.preventDefault();
        
        const formData = new FormData (form.current);

        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data)
    }

    return (
        <LoginContainer>
            <Logos />
            <form action="/" className="form" ref={form}>
                <label htmlFor="email" className="label">Email address</label>
                <input type="text" name="email" id="email" placeholder="camilayokii@gamil.com" className="input" />

                <label htmlFor="password" className="label">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="input" />

                <button onClick={handleSubmit} className="primary-button">Log in</button>
                <a href="/">Forgot my password</a>
            </form>
            <button class="secondary-button position-button">Sign up</button>
        </LoginContainer>
    );
}

export default Login;



{/* <form action="/" className='form' ref={form}>
                <Label id="email" text="Email address"/>
                <Input type="email" id="email" placeholder="camilayokii@gamil.com"/>
                <Label id="password" text="Password"/>
                <Input type="password" id="password" placeholder="••••••••"/>
                <button className=" primary-button" onClick={handleSubmit}>Log in</button>
                <a href="/">Forgot my password</a>
            </form>
            {/* </Form> */}
            {/* <Form ref={form}>
                <Label id="email" text="Email address"/>
                <Input type="email" id="email" placeholder="camilayokii@gamil.com"/>
                <Label id="password" text="Password"/>
                <Input type="password" id="password" placeholder="••••••••"/>
                <button className=" primary-button" onClick={handleSubmit}>Log in</button>
                <a href="/">Forgot my password</a>
            </Form> */} 