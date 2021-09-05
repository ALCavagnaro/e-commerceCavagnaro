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

                {cart.map((item, key)=>
                
                <>
                <div className='card'>
                    {key=item.id}
                    <h2>{item.name}</h2>
                    <h3>Precio producto $ {item.price}</h3>
                    <h3>Cantidad {item.quantity}</h3>
                    <h3>Subtotal ítem $ {item.subtotal}</h3>
                    <button className = 'BuyButtonMain' onClick={()=>remove(
                        
                        item.id, 
                        item.price, 
                        item.quantity
                        
                        )}>Quitar producto</button>

                        {console.log('cart', cart)}
                </div>
                </>

                
                )}

                <div className='card'>

                    <h3>Total $ {total}</h3>
                    <button className = 'BuyButtonMain' onClick={() => clear()}>Vaciar carrito</button>
                </div>    

            </>

        )
    }

};

export default Cart