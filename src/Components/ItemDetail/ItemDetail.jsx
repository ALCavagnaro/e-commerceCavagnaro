import React, {useContext, useState} from 'react'
import {CartContext} from '../Context/CartProvider';
import ItemCount from '../itemCount/ItemCount';
import { Link } from "react-router-dom"

const ItemDetail =  ({ id='',name = '', description='', price= 0, thumbnail = '' , stock = '', photo = ''}) => {
  
    const {onAdd} = useContext(CartContext)

    let [goToCart, setGoToCart] = useState(false)


    const addCount = (count) => {
       
      onAdd({id , name, price}, count)

      setGoToCart(true)
      
    }


  return (
    <div className="card">
        <img className="Photo" src= {photo} alt={thumbnail}/>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        <div>{description}</div>
        <ItemCount stock={stock} onAdd={addCount}/>
        <div className = 'goToCartButtonContainer'>
            {goToCart ? <Link to="/Cart"><button>Ir al carrito</button></Link> : <button disabled={true} className = 'disabledButton'>Ir al carrito</button> }
        </div>
    </div>
  );
}

export default ItemDetail


