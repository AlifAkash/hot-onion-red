import React, { useContext } from 'react';
import './MainOrderBtn.css';
import { Link } from 'react-router-dom';
import { cartContext, userContext } from '../../App';

const MainOrderBtn = () => {
    const [foodCart]= useContext(cartContext);
    const [loggedInUser]= useContext(userContext);
    return (
        <div className="MainOrderBtn">
            <Link to="/CheckOutOrder/">
                {
                    <button
                        disabled={foodCart.length === 0 ? true : false} 
                        className="mainBtn"
                    >Checkout your food</button>
                }
            </Link>
        </div>
    );
};

export default MainOrderBtn;