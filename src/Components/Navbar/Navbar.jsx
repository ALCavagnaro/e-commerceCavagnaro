import { Link } from "react-router-dom"
import Button from "../Button/Button.jsx"
import CarWidget from "../cartWidget/CartWidget.jsx"

export default function Navbar() {

 return <>
   <div className = "nav-container">
     <div className ='nav-btn-container'>
      <Link to="/e-commerceCavagnaro"><Button className = 'btn-nav' text = 'Inicio'/></Link>
      <Link to="/mujer"><Button className = 'btn-nav' text = 'Mujer'/></Link>
      <Link to="/hombre"><Button className = 'btn-nav' text = 'Hombre'/></Link>
     </div>
     <Link to="/cart"><CartWidget className = 'cart-widget'/></Link>
   </div>
 </>;

}