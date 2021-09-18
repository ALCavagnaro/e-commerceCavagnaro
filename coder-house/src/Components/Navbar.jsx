import { Link } from "react-router-dom"
import Button from "./Button"
import CarWidget from "./CarWidget.jsx"

export default function Navbar() {

 return <>
   <div className = "NavBarContainer">
     <div className ='navBarbuttonContainer'>
      <Link to="/"><button className = 'buttonNavbar'>Inicio</button></Link>
      <Link to="/Mujer"><button className = 'buttonNavbar'>Mujer</button></Link>
      <Link to="/Hombre"><button className = 'buttonNavbar'>Hombre</button></Link>
     </div>
     <Link to="/Cart"><CarWidget className = 'CarWidget'/></Link>
   </div>
 </>;

}