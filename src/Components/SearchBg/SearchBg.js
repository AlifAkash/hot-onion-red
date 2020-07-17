import React from 'react';
import './SearchBg.css';

const SearchBg = () => {
    return (
        <div className="SearchBg">
            <div className="search">
                <h1>Best foods waiting for your belly</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Search food items"></input>
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default SearchBg;