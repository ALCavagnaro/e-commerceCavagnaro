import {useContext} from 'react';
import Logo from '../Logo/carrito-de-compras.png';
import {CartContext} from '../Context/CacheProvider';

function CarWidget (props) {
    
    const {cart} = useContext(CartContext);

   let totalQuantity = 0;

    for (let item of cart) {
        
        totalQuantity += item.quantity         
    }
    
    return (
        <>
        <div className='cartWidgetContainer'>
           <img src={Logo} className = 'Logo' alt="Logo"/>
           <h4 className = 'cartQuantity'>{totalQuantity}</h4>
        </div>
        </>
    )
} 

export default CarWidget