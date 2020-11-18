import React from 'react';
import "./CartItems.css";

const CartItems = (props) => {
    const { name, newPrice, img, key } = props.items;

    const handleRemove = props.handleRemove;

    return (
        <div className="cartItemsReview">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <p>{newPrice}</p>
            </div>
            <div>
                <button onClick={()=>handleRemove(key)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItems;