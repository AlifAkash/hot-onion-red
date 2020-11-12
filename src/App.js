import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchBg from './Components/SearchBg/SearchBg';
import FoodNav from './Components/FoodNav/FoodNav';
import LunchItems from './Components/LunchItems/LunchItems';
import MainOrderBtn from './Components/MainOrderButton/MainOrderBtn';
import DinnerItems from './Components/DInnerItems/DinnerItems';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NotFound from './Components/NotFound404/NotFound';
import BreakfastItems from './Components/BreakfastItems/BreakfastItems';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import { createContext } from 'react';
import CheckOutOrder from './Components/CheckOutOrder/CheckOutOrder';

export const cartContext = createContext();

function App() {

  const [foodCart, setFoodCart] = useState([]);
  return (
    <div className="App">
      <cartContext.Provider value={[foodCart, setFoodCart]}>
      <Router>
        <Header></Header>
        <SearchBg></SearchBg>
        <FoodNav></FoodNav>
        <Switch>
          <Route exact path="/">
            <LunchItems></LunchItems>
          </Route>
          <Route path="/lunch">
            <LunchItems></LunchItems>
          </Route>
          <Route path="/dinner">
            <DinnerItems></DinnerItems>
          </Route>
          <Route path="/breakfast">
            <BreakfastItems></BreakfastItems>
          </Route>
          <Route path="/foodDetail/:foodKey">
            <FoodDetails></FoodDetails>
          </Route>
          <Route path="/checkOutOrder">
            <CheckOutOrder></CheckOutOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <MainOrderBtn></MainOrderBtn>
      </Router>
      </cartContext.Provider>
    </div>
  );
}

export default App;
