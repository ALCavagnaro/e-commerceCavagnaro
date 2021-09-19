import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import {CartContext} from './Context/CacheProvider';
//import ItemCount from './ItemCount';

const Cart = () => {

    const {cart, total, remove, clear} = useContext(CartContext)

    if (cart.length === 0) return  <>

    <h2>El carrito está vacío</h2>

    </>
    else {

        return(

            <>
            <div className ='cartGallery'>   

                {cart.map((item, key) =>
                
                
                    <div className='cartCard'>
                        <strong>{item.name}</strong>
                        <h3>Precio producto <strong>$ {item.price}</strong></h3>
                        <h3>Cantidad <strong>{item.quantity}</strong></h3>
                        <h3>Subtotal ítem <strong>$ {item.subtotal}</strong></h3>
                        <button className = 'BuyButtonMain' onClick={()=>remove(
                            
                            item.id, 
                            item.price, 
                            item.quantity
                            
                            )}>Quitar producto</button>
                
                    </div>
                
                )}

            </div>

                <div className ='cartContainer'>
                    <h3>Total <strong>${total}</strong></h3>  
                    <div className = 'cartSubContainer'> 
                        <button className = 'BuyButtonMain' id='emptyCartBtn' onClick={() => clear()}>Vaciar carrito</button> 
                        <Link to ='/Payment'><button className = 'BuyButtonMain' id='emptyCartBtn'>Comprar</button></Link> 
                    </div>
                </div>    

            </>

        )
    }



};

export default Cart