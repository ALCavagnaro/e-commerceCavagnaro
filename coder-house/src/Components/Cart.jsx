import React, {useContext} from 'react'
import {CartContext} from './Context/CacheProvider';

const Cart = () => {

    const {cart, total, remove, clear} = useContext(CartContext)

    if (cart.length === 0) return  <>

    <h2>El carrito está vacío</h2>

    </>
    else {

        return(

            <>
            <div className ='PhotoGallery'>   

                {cart.map((item, key) =>
                
                
                    <div className='card'>
                        <strong>{item.name}</strong>
                        <h3>Precio producto $ {item.price}</h3>
                        <h3>Cantidad {item.quantity}</h3>
                        <h3>Subtotal ítem $ {item.subtotal}</h3>
                        <button className = 'BuyButtonMain' onClick={()=>remove(
                            
                            item.id, 
                            item.price, 
                            item.quantity
                            
                            )}>Quitar producto</button>
                
                    </div>
                
                )}

            </div>

                <div className ='cartContainer'>

                    <button className = 'BuyButtonMain' id='emptyCartBtn' onClick={() => clear()}>Vaciar carrito</button>

                    <strong>Total</strong> <h3>${total}</h3>
                
                </div>    

            </>

        )
    }

};

export default Cart