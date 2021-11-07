import React from 'react';
//el paquete que descargaste
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from '@containers/Layout';
import CreateNewPassword from '../pages/CreateNewPassword';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import CreateAccount from '../pages/CreateAccount';
import EditAccount from '../pages/EditAccount';
import Account from '../pages/Account';
import MyOrder from '../pages/MyOrder';
import MyOrders from '../pages/MyOrders';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetail from '../pages/ProductDetail';

import MenuDesktop from '../components/MenuDesktop';
//agg y crea las  nuevas paginas que estaran
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import MenuMobile from '../components/MenuMobile';
import '@styles/components/_buttons.scss';

import '@styles/Global.scss';
import EmailSend from '../pages/EmailSend';

const App = () => {
    return (
        //coloca esto para que se pueda navegar
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/create-account" component={CreateAccount} />
                    <Route exact path="/edit-account" component={EditAccount} />
                    <Route exact path="/my-account" component={Account} />
                    <Route exact path="/create-new-password" component={CreateNewPassword} />
                    <Route exact path="/password-recovery" component={PasswordRecovery}/>
                    <Route exact path="/menu-mobile" component={MenuMobile} />
                    <Route exact path="/email-send" component={EmailSend} />
                    <Route exact path="/menu-desktop" component={MenuDesktop} />
                    <Route exact path="/my-order" component={MyOrder} />
                    <Route exact path="/my-orders" component={MyOrders} />
                    <Route exact path="/shoppingCart" component={ShoppingCart} />
                    <Route exact path="/product-detail" component={ProductDetail} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;