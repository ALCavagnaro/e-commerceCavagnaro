import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import {CartContext} from '../Context/CartProvider';
import Greetings from '../Greetings/Greetings.jsx';

const Cart = () => {

    const {cart, total, remove, clear} = useContext(CartContext)

    if (cart.length === 0) return  <>

    <Greetings greetings = 'El carrito está vacío'/>

    </>
    else {

        return(

            <>
            <div className ='cart-gallery'>   

                {cart.map((item, key) =>
                
                
                    <div className='cart-card'>
                        <strong>{item.name}</strong>
                        <h3>Precio producto <strong>$ {item.price}</strong></h3>
                        <h3>Cantidad <strong>{item.quantity}</strong></h3>
                        <h3>Subtotal ítem <strong>$ {item.subtotal}</strong></h3>
                        <button className = 'buy-btn'onClick={()=>remove(
                            
                            item.id, 
                            item.price, 
                            item.quantity
                            
                            )}>Quitar producto</button>
                
                    </div>
                
                )}

            </div>

                <div className ='cart-container'>
                    <h3>Total <strong>${total}</strong></h3>  
                    <div className = 'cart-subcontainer'> 
                        <button className = 'buy-btn' onClick={() => clear()}>Vaciar carrito</button> 
                        <Link to ='/payment'><button className = 'buy-btn'>Comprar</button></Link> 
                    </div>
                </div>    

            </>

        )
    }



};

export default Cart