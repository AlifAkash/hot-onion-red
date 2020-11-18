import React from 'react';
import "./Footer.css";
import logo from "../../hot-onion-restaurant-resources/logo.png";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="upperContainer">
                <div className="upperImage">
                    <img src={logo} alt="" />
                </div>
                <div className="upperText">
                    <div>
                        <p><small>Copyright @2020 online food</small></p>
                    </div>
                    <div className="upperSecond">
                        <p>Privacy</p>
                        <p>Terms of use</p>
                        <p>Pricing</p>
                    </div>
                </div>
            </div>
            <div className="lowerContainer">
                <div className="lowerFirst">
                    <p>About food</p>
                    <p>Read our blog</p>
                    <p>sign up to delivery</p>
                    <p>Add your restaurant</p>
                </div>
                <div className="lowerSecond">
                    <p>Get help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurant near me</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;