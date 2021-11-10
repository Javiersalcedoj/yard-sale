import React from 'react';
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
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import MenuMobile from '../components/MenuMobile';
import EmailSend from '../pages/EmailSend';

import AppContext from '../context/AppContext';
//importamos lo que hicmos para poder luego poder usarlo
import useInitialState from '../hooks/useInitialState';

import '@styles/components/_buttons.scss';
import '@styles/Global.scss';

const App = () => {
    //creamos una constante y esto sera igual al costum hooks contodo lo que retorna 
    const initialState = useInitialState();
    return (
        //y lo compartimos al value
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login } />
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
        </AppContext.Provider>
    );
}

export default App;