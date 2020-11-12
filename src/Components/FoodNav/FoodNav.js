import React from 'react';
import { NavLink } from 'react-router-dom';
import './FoodNav.css';

const FoodNav = () => {
    return (
        <ul className="FoodNav">
            <NavLink to="/breakfast" activeClassName="active"> Breakfast</NavLink>
            <NavLink to="/lunch" activeClassName="active">Lunch</NavLink>
            <NavLink to="/dinner" activeClassName="active">Dinner</NavLink>
        </ul>
    );
};

export default FoodNav;