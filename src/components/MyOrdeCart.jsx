import React, { PureComponent } from 'react';

import '@styles/components/_myOrderCart.scss';
import imgArrow from '@icons/flechita.svg';

const MyOrdeCart = (prop) => {
    const classCart = 'myOrderCart ' + prop.backgroung;
    const myorders = prop.arrow;
    return (
        <div className={classCart}>
            <div className={myorders + '__div'}>
                <p className="myOrderCart__date">04.25.21</p>
                <p className="myOrderCart__articles">6 aricles</p>
            </div>
            <p className="myOrderCart__prices">$560.00 <span className={myorders + '__span'}><img src={imgArrow} alt="arrow" /></span></p>
        </div>
    );
}


export default MyOrdeCart;