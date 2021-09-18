import {react, useContext, useState} from 'react';
import Logo from './Logo/carrito-de-compras.png';
import {CartContext} from './Context/CacheProvider';

function CarWidget (props) {
    
    const {cart} = useContext(CartContext);

   // let [quantity, setQuantity] = useState(0)

   let totalQuantity = 0;

    for (let item of cart) {
        console.log('item', item.quantity)
        totalQuantity += item.quantity         
    }

    console.log(totalQuantity);
    
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