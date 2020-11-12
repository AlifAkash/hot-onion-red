import React, { useState } from 'react';
import './DinnerItems.css';
import fakeData from '../FakeData/FakeData';
import Dinners from '../Dinners/Dinners';

const DinnerItems = () => {
    const items = fakeData.filter(fd=> fd.categories === "dinner");
    const [dinners, setDinner] = useState(items);
    return (
        <div className="items-container">
            {
                dinners.map(dnrs => <Dinners 
                    dinners={dnrs}
                    ></Dinners>)
            }
        </div>
    );
};

export default DinnerItems;