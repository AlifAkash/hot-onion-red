import React from 'react';
import './Dinners.css';
import { Link } from 'react-router-dom';

const Dinners = (props) => {
    const {name, img, description, price, key} = props.dinners;
    return (
        <div className="dinners">
            <Link style={{color:"inherit", textDecoration:"none"}}
            to={"/foodDetail/"+key}>{ 
                <div>
                    <div>
                        <img src={img} alt=""/>
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <h6>{description}</h6>
                        <h4>${price}</h4>
                    </div>
                </div>
            }</Link>
        </div>
    );
};

export default Dinners;