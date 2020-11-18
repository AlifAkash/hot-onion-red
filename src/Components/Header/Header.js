import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import logo from '../../hot-onion-restaurant-resources/logo2.png';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory()
    const handleLog = () => {
        history.replace("/login");
    }
    return (
        <div className="Header">
            <div className="logo-container">
                <img src={logo} alt=""/>
            </div>
            <div className="cart-logIn-logOut-container">
                <FontAwesomeIcon className="icon" icon={faUtensils} />
                <button onClick={handleLog}>Log in</button>
                <button onClick={handleLog}>Log out</button>
            </div>
        </div>
    );
};

export default Header;