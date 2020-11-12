import React from 'react';
import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
    const foodCart = props.foodCart;
    console.log(foodCart);
    const SubTotal = foodCart.reduce((total, items) => total + items.newPrice, 0);

    const tax = 5.00;
    const delivery = 2.00;

    const Total = SubTotal + tax + delivery;

    return (
        <div>
            <h3>Order Summary</h3>
            <hr />
            {
                foodCart.map(items => <CartItems key={items.key} items={items}></CartItems>)
            }
            <p>Items Ordered: {foodCart.length}</p>
            <p>SubTotal : {SubTotal}</p>
            <p>Tax : {tax}</p>
            <p>Delivery Fee : {delivery}</p>
            <p>Total : {Total}</p>
        </div>
    );
};

export default Cart;