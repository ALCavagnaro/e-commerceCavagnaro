import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from "./Components/ItemCount";

function App() {
  return (
    <>
     <Navbar/>
     <ItemListContainer greetings = "Aprovechá la oferta de remeras. Sólo quedan 5 en stock"/>
     <ItemCount/>
    </>
  );
}

export default App;

