import {useContext} from 'react';
import Logo from '../../../Statics/Logo/carrito-de-compras.png';
import {CartContext} from '../Context/CartProvider';

function CarWidget (props) {
    
    const {cart} = useContext(CartContext);

   let totalQuantity = 0;

    for (let item of cart) {
        
        totalQuantity += item.quantity         
    }
    
    return (
        <>
        <div className='cart-widget-container'>
           <img src={Logo} className = 'Logo' alt="Logo"/>
           <h4 className = 'cart-qty'>{totalQuantity}</h4>
        </div>
        </>
    )
} 

export default CarWidget