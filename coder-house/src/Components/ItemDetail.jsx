import React, {useContext, useState} from 'react'
import {CartContext} from './Context/CacheProvider';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom"

const ItemDetail =  ({ id='',name = '', description='', price= 0, thumbnail = '' , stock = '', photo = ''}) => {
  
    const {onAdd} = useContext(CartContext)
    
    let [itemUnit, setItemUnit] = useState(0)


    const add = (count) => {

      setItemUnit(count)
       
      onAdd({id , name, price}, itemUnit)
      
    }

  return (
    <div className="card">
        <img className="Photo" src= {photo} alt={thumbnail}/>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        <div>{description}</div>
        <ItemCount stock={stock} onAdd={add}/>
        <div className='buttonContainer'>
        <Link to="/Cart"><button onClick={()=>{add()}}>Finalizar tu compra</button></Link>
        </div>
    </div>
  );
}

export default ItemDetail


