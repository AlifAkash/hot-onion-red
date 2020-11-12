import React, { useState } from 'react';
import './BreakfastItems.css';
import Breakfasts from '../Breakfasts/Breakfasts';
import fakeData from '../FakeData/FakeData';

const BreakfastItems = () => {
    const items = fakeData.filter(fd=> fd.categories === "breakfast");
    const [breakfasts, setBreakfasts] = useState(items);

    return (
        <div>
            <div className="items-container">
            {
                breakfasts.map(brfs => <Breakfasts breakfasts={brfs}></Breakfasts>)
            }
            </div>
        </div>
    );
};

export default BreakfastItems;