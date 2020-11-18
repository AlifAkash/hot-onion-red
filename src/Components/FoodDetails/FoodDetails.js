import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../FakeData/FakeData';
import './FoodDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { cartContext } from '../../App'

const FoodDetails = () => {
    const { foodKey } = useParams();
    const foodDetail = fakeData.find(fddl => fddl.key === foodKey);
    const { img, name, price, description } = foodDetail;
    const [count, setCount] = useState(0);
    const [foodCart, setFoodCart] = useContext(cartContext);

    const addCartHandler = (foodDetail) => {
        const newFoodDetail = {...foodDetail, newPrice}
        const newFoodCart = [...foodCart, newFoodDetail];
        setFoodCart(newFoodCart);
    }

    const plusBtnHandler = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const minusBtnHandler = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    let newPrice = 0;
    if (count === 0){
        newPrice =price
    }
    else{
        newPrice = count * price;
    }

    const NEWPRICE = newPrice.toFixed(2);

    return (
        <div className="FoodDetails">

            <div className="foodDescription">
                <h1>{name}</h1>
                <p>{description}</p>

                <div className="priceValueAndAddBtn">

                    <div>
                        {
                            newPrice>price ? <h2>${NEWPRICE}</h2> : <h2>${price}</h2>
                        }
                    </div>

                    <div className="plusInputMinus">
                        <button
                            onClick={plusBtnHandler}
                            className="plusBtn">
                            <FontAwesomeIcon className="icon" icon={faPlus} />
                        </button>

                        {count}

                        <button 
                            disabled={count === 0 ? true : false}
                            onClick={minusBtnHandler}
                            className="minusBtn">
                            <FontAwesomeIcon className="icon" icon={faMinus} />
                        </button>
                    </div>
                </div>

                <button
                    disabled={count < 1 ? true : false}
                    onClick={() => addCartHandler(foodDetail)}
                    className="cartAddBtn">
                    <FontAwesomeIcon className="iconBtn" icon={faUtensils} />
                add</button>

            </div>

            <div>
                <img src={img} alt="" />
            </div>

        </div>
    );
};

export default FoodDetails;