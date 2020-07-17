import React from 'react';
import './LunchItems.css';
import Lunch from '../FakeData/Lunch'
import { useEffect } from 'react';
// import fakeData from '../FakeData';

const LunchItems = () => {
    const items = [...Lunch];
    const [lunch,setLunch] = useEffect(items);
    console.log(lunch);
    return (
        <div>
            <h1>This is lunch</h1>
            {/* <p>{lunch.length}</p> */}
        </div>
    );
};

export default LunchItems;