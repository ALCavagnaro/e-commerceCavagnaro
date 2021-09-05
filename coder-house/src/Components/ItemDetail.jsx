import React, {useContext, useState} from 'react'
import {CartContext} from './Context/CacheProvider';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom"

const ItemDetail =  ({ id='',name = '', description='', price= 0, thumbnail = '' , stock = '', photo = ''}) => {
  
    const {onAdd, count} = useContext(CartContext)
    const [addedItem, setAddedItem] = useState(false)
    const [itemCount, setItemCount] = useState(count)
    console.log('itemdetail', count, itemCount)

    const add = (props, event, addBtn) => {  

      onAdd({id , name, price}, itemCount)
      setAddedItem(true)

      if (count>0) {
          addBtn(event)
      }
      
      // else {
      //     alert("Seleccionar producto")
      // }
    }

  return (
    <div className="card">
        <img className="Photo" src= {photo} alt={thumbnail}/>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        <div>{description}</div>
        <ItemCount stock={stock}/>
        <div className='buttonContainer'>
          <button onClick={add}>Agregar al carrito</button>
          <Link to="/Cart">{addedItem && <button onClick={()=>{add()}}>Finalizar tu compra</button>}</Link>
        </div>
    </div>
  );
}

export default ItemDetail


