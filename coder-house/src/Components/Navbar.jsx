import { Link } from "react-router-dom"
import Button from "./Button"
import CarWidget from "./CarWidget"

export default function Navbar() {

 return <>
   <div className = "NavBarContainer">
   <Link to="/"><Button text = 'Inicio'/></Link>
   <Link to="/"><Button text = 'Contacto'/></Link>
   <Link to="/"><Button text = 'Ofertas'/></Link>
   <Link to="/"><CarWidget className = 'CarWidget'/></Link>
   </div>
 </>;

}