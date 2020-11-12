import React from 'react';
import './Lunches.css';
import { Link } from 'react-router-dom';

const Lunches = (props) => {
    const { name, img, description, price, key } = props.lunches;
    return (
        <div className="lunches">
            <Link style={{color:"inherit", textDecoration:"none"}}
            to={"/foodDetail/"+key}>{
                <div>
                    <div>
                        <img src={img} alt="" />
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

export default Lunches;