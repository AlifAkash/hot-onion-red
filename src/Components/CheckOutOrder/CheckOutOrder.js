import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../App';
import Cart from '../Cart/Cart';
import "./CheckOutOrder.css";

const CheckOutOrder = () => {
    const [foodCart] = useContext(cartContext); 
    return (
        <div className="CheckOut">
        <div className="info-container">
            <h3>Edit delivery details</h3>
            <hr/>
            <form action="submit">
                <input type="text" placeholder="Delivery Process" value=""/>
                <br/>
                <input type="text" placeholder="Road No" value=""/>
                <br/>
                <input type="text" placeholder="Flat, Suit or Floor" value=""/>
                <br/>
                <input type="text" placeholder="Business Name" value=""/>
                <br/>
                <input type="text" placeholder="Add delivery instructions" value=""/>
                <br/>
                <input type="button" className="button" value="Save & continue"/>
            </form>
        </div>
        <div className="preview-container">
            <Cart foodCart={foodCart}></Cart>
        </div>
        </div>
    );
};

export default CheckOutOrder;