import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;

                        if (cart.length) {
                            return (
                                <React.Fragment>
                                    <div className="container">
                                        <Title name="yout" title="cart" />
                                    </div>
                                    <CartColumns />
                                    <CartList value={value}/>
                                    <CartTotals value={value} history={this.props.history} />
                                </React.Fragment>
                            )
                        }

                        return (
                            <>
                                <EmptyCart />
                            </>
                        )
                    }}
                </ProductConsumer>
            </section>
        )
    }
}