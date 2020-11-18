import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../App';
import CartItems from '../CartItems/CartItems';

const Cart = () => {
    const [foodCart, setFoodCart] = useContext(cartContext);
    console.log(foodCart);
    const subTotal = foodCart.reduce((total, items) => total + items.newPrice, 0);
    const SUBTOTAL = subTotal.toFixed(2);

    const handleRemove = (key) => {
        console.log("çlicked", key);
        const newFoodCart = foodCart.filter(items => items.key !== key)
        setFoodCart(newFoodCart);
    }

    const tax = 5.00;
    const delivery = 2.00;

    const total = subTotal + tax + delivery;
    const TOTAL = total.toFixed(2);

    return (
        <div>
            <h3>Order Summary</h3>
            <hr />
            {
                foodCart.map(items => <CartItems key={items.key} items={items} handleRemove={handleRemove}></CartItems>)
            }
            <p>Items Ordered: {foodCart.length}</p>
            <p>SubTotal : {SUBTOTAL}</p>
            <p>Tax : {tax}</p>
            <p>Delivery Fee : {delivery}</p>
            <p>Total : {TOTAL}</p>
        </div>
    );
};

export default Cart;