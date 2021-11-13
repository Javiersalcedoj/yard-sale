import React, { PureComponent } from 'react';

import Header from '../containers/Header'
import AccountContainer from '../containers/AccountContainer';
import MyOrdeCart from '../components/MyOrdeCart';
import ShoppingCard from '../components/ShoppingCard';

const MyOrder = () => {
    return (
        <React.Fragment>
            <AccountContainer>
                <h1 className="myOrder__title title">My order</h1>
                <MyOrdeCart backgroung="background" arrow="false"/>
                <ShoppingCard iconClose="false"/>
                <ShoppingCard iconClose="false"/>
                <ShoppingCard iconClose="false"/>
                <ShoppingCard iconClose="false"/>
            </AccountContainer>
        </React.Fragment>
    );
}

export default MyOrder;