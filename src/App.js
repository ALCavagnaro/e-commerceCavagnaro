import React from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {CartState} from './Components/Context/CacheProvider';
import Cart from './Components/Cart/Cart';
import Payment from './Components/Payment/Payment';

import {
  BrowserRouter,
  Switch,
  Route

} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <>
      <CartState>
        <Navbar/>
        <Switch>
            <Route path="/e-commerceCavagnaro" exact>
              <ItemListContainer/>
            </Route>
            <Route path="/cart" exact>
              <Cart/>
            </Route>
            <Route path="/payment" exact>
              <Payment/>
            </Route>
            <Route path="/:category/:id" exact>
              <ItemDetailContainer />
            </Route>
            <Route path="/:category" exact>
              <ItemListContainer/>
            </Route>
        </Switch>
      </CartState>
        </>
    </BrowserRouter>
  );
}

export default App;

