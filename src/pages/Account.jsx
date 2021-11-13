import React from 'react';

import Header from '../containers/Header';
import AccountContainer from '../containers/AccountContainer';
import FormText from '../components/FormText';
import Form from '../components/Form';
import Label from '../components/Label';

const Account = () => {
    return (
        <React.Fragment>
            <Header />
            <AccountContainer>
                <FormText title="My account"/>
                <Form>
                    <Label id="name" text="Name"/>
                    <p className="value">Camila Yakoo"</p>
                    <Label id="email" text="Email address"/>
                    <p className="value">yardsale@example.com</p>
                    <Label id="password" text="Password"/>
                    <p className="value">••••••••</p>
                    <input type="submit" value="Edit" className="secondary-button position-button" />
                </Form>
            </AccountContainer>
        </React.Fragment>
    );
}

export default Account;