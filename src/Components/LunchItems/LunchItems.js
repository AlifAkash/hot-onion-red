import React, { useState } from 'react';
import './LunchItems.css';
import fakeData from '../FakeData/FakeData';
import Lunches from '../Lunches/Lunches';

const LunchItems = () => {
    const items = fakeData.filter(fd=> fd.categories === "lunch");
    const [lunches,setLunches] = useState(items);
    return (
        <div>
            <div className="items-container">
                {
                    lunches.map(lnch => <Lunches lunches={lnch}></Lunches>)
                }
            </div>
        </div>
    );
};

export default LunchItems;