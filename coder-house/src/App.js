import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import Greetings from './Components/Greetings';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import CacheProvider from './Components/Context/CacheProvider';
import Cart from './Components/Cart';

import {
  BrowserRouter,
  Switch,
  Route

} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <>
      <CacheProvider>
      <Navbar/>
      <Greetings className = 'Greetings' greetings = "¡Sale Off! Aprovechá las últimas ofertas"/>
      <Switch>
          <Route path="/" exact>
            <ItemListContainer/>
          </Route>
          <Route path="/:category/:id" exact>
            <ItemDetailContainer />
          </Route>
          <Route path="/:category" exact>
            <ItemListContainer/>
          </Route>
      </Switch>
      <Cart/>
      </CacheProvider>
        </>
    </BrowserRouter>
  );
}

export default App;

