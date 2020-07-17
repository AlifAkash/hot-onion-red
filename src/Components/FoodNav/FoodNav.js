import React from 'react';
import './FoodNav.css';

const FoodNav = () => {
    return (
        <nav className="FoodNav">
            <a href="breakfast">Breakfast</a>
            <a href="lunch">Lunch</a>
            <a href="dinner">Dinner</a>
        </nav>
    );
};

export default FoodNav;