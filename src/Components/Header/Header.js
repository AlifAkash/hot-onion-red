import React from 'react';
import logo from '../../hot-onion-restaurant-resources/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="logo-container">
                <img src={logo} alt=""/>
            </div>
            <div className="cart-logIn-logOut-container">
                <button>Log in</button>
                <button>Log out</button>
            </div>
        </div>
    );
};

export default Header;