import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchBg from './Components/SearchBg/SearchBg';
import FoodNav from './Components/FoodNav/FoodNav';
import LunchItems from './Components/LunchItems/LunchItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBg></SearchBg>
      <FoodNav></FoodNav>
      <LunchItems></LunchItems>
    </div>
  );
}

export default App;
