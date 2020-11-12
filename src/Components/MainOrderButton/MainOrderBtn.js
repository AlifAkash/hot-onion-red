import React, { useContext } from 'react';
import './MainOrderBtn.css';
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';

const MainOrderBtn = () => {
    const [foodCart]= useContext(cartContext);
    return (
        <div className="MainOrderBtn">
            <Link to="/CheckOutOrder/">
                {
                    <button 
                        disabled={foodCart.length === 0 ? true : false} className="mainBtn"
                    >Checkout your food</button>
                }
            </Link>
        </div>
    );
};

export default MainOrderBtn;