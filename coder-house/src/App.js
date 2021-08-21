import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import Greetings from './Components/Greetings';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {
  BrowserRouter,
  Switch,
  Route

} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
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
        <ItemDetailContainer/>
      </>
    </BrowserRouter>
  );
}

export default App;

