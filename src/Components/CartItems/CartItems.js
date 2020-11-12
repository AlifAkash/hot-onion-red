import React from 'react';

const CartItems = (props) => {
    const {name, newPrice} = props.items;
    return (
        <div>
            <h4>{name}</h4>
            <p>{newPrice}</p>
        </div>
    );
};

export default CartItems;