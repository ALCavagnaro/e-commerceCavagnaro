import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import Greetings from './Components/Greetings';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from "./Components/ItemCount";

function App() {
  return (
    <>
     <Navbar/>
     <Greetings className = 'Greetings' greetings = "¡Sale Off! Aprovechá las últimas ofertas"/>
     <ItemCount stock='5'/>
     <ItemListContainer/>
    </>
  );
}

export default App;

