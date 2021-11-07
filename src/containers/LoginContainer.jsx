import React from 'react';
import "@styles/components/_loginContainer.scss"

const LoginContainer = ({children}) => {
    return (
        <div className="login">
            <div className="form-container">
                {children}
            </div>
        </div>
    );
}

export default LoginContainer;