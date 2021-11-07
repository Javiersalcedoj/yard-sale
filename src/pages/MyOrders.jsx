import React from 'react';

import Header from '../containers/Header'
import AccountContainer from '../containers/AccountContainer';
import MyOrdeCart from '../components/MyOrdeCart';

const MyOrders = () => {
    return (
        <React.Fragment>
            <Header />
            <AccountContainer>
                <h1 class="myOrder__title title">My orders</h1>
                <MyOrdeCart backgroung="" arrow="true"/>
                <MyOrdeCart backgroung="" arrow="true"/>
                <MyOrdeCart backgroung="" arrow="true"/>
            </AccountContainer>
        </React.Fragment>
    );
}

export default MyOrders;