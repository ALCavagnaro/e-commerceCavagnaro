import { Link } from "react-router-dom"
import Button from "../Button/Button.jsx"
import CarWidget from "../carWidget/CarWidget.jsx"

export default function Navbar() {

 return <>
   <div className = "NavBarContainer">
     <div className ='navBarbuttonContainer'>
      <Link to="/"><Button className = 'buttonNavbar' text = 'Inicio'/></Link>
      <Link to="/Mujer"><Button className = 'buttonNavbar' text = 'Mujer'/></Link>
      <Link to="/Hombre"><Button className = 'buttonNavbar' text = 'Hombre'/></Link>
     </div>
     <Link to="/Cart"><CarWidget className = 'CarWidget'/></Link>
   </div>
 </>;

}