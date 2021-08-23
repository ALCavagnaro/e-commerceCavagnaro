import { Link } from "react-router-dom"
import Button from "./Button"
import CarWidget from "./CarWidget.jsx"

export default function Navbar() {

 return <>
   <div className = "NavBarContainer">
   <Link to="/"><Button text = 'Inicio'/></Link>
   <Link to="/Mujer"><Button text = 'Mujer'/></Link>
   <Link to="/Hombre"><Button text = 'Hombre'/></Link>
   <Link to="/"><CarWidget className = 'CarWidget'/></Link>
   </div>
 </>;

}