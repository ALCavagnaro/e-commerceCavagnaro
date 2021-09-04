import React, {useContext} from 'react'
import {CartContext} from './Context/CacheProvider';

const Cart = () => {

    const {cart} = useContext(CartContext)

  
    return  <>

    {cart?cart.map((item)=><div>{item.name}</div>):<div>El carrito está vacío</div>}

    </>

};

export default Cart