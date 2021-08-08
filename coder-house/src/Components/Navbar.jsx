import Button from "./Button"
import CarWidget from "./CarWidget"

export default function Navbar() {

 return <>
   <div className = "NavBarContainer">
   <Button text = 'Inicio'/>
   <Button text = 'Contacto'/>
   <Button text = 'Ofertas'/>
   <CarWidget className = 'CarWidget'/>
   </div>
 </>;

}