import React from 'react';
import Cart from '../Cart/Cart';
import "./CheckOutOrder.css";

const CheckOutOrder = () => { 
    return (
        <div className="CheckOut">
        <div className="info-container">
            <h3>Edit delivery details</h3>
            <hr/>
            <form action="">
                <input type="text" placeholder="Delivery Process" />
                <br/>
                <input type="text" placeholder="Road No" />
                <br/>
                <input type="text" placeholder="Flat, Suit or Floor"/>
                <br/>
                <input type="text" placeholder="Business Name" />
                <br/>
                <input type="text" placeholder="Add delivery instructions" />
                <br/>
                <input type="button" className="button" value="Save & continue" />
            </form>
        </div>
        <div className="preview-container">
            <Cart></Cart>
        </div>
        </div>
    );
};

export default CheckOutOrder;