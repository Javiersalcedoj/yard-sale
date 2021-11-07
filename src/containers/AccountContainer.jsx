import React from 'react';
import '@styles/components/_accountContainer.scss'

const AccountContainer = ({children}) => {
    return (
        <div className="account">
            <div className="account-container">
                {children}
            </div>
        </div>
    );
}

export default AccountContainer;