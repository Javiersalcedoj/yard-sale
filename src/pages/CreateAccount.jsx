import React from 'react';

import Header from '../containers/Header';
import AccountContainer from '../containers/AccountContainer';
import FormText from '../components/FormText';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/input';

const CreateAccount = () => {
    return (
        <React.Fragment>
            <Header />
            <AccountContainer>
                <FormText title="My account"/>
                <Form>
                    <Label id="name" text="Name"/>
                    <Input type="text" id="name" placeholder="Camila Yakoo"/>
                    <Label id="email" text="Email address"/>
                    <Input type="email" id="email" placeholder="camilayokii@gamil.com"/>
                    <Label id="password" text="Password"/>
                    <Input type="password" id="password" placeholder="••••••••"/>
                    <input type="submit" value="Create" className=" primary-button position-button" />
                </Form>
            </AccountContainer>
        </React.Fragment>
    );
}

export default CreateAccount;