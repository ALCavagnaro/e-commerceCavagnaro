import React, {useContext, useState} from 'react'
import {CartContext} from './Context/CacheProvider';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom"

const ItemDetail =  ({ id, name = '', description='', price= 0, thumbnail = '' , stock = '', photo = ''}) => {
  

const [quantity, setQuantity]= useState(0)   
const {onAdd} = useContext(CartContext)
const [addedItem, setAddedItem] = useState(false)

const add = (props) => {  

  setQuantity(props.Item)
  onAdd({id, name, price}, quantity)
  setAddedItem(true)
}


  return (
    <div className="card">
        <img className="Photo" src= {photo} alt={thumbnail}/>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        {console.log({name})}
        <div>{description}</div>
        <ItemCount stock={stock} onAdd = {add}/>
        <Link to="/cart">{addedItem && <button className = 'BuyButtonMain'>Finalizar tu compra</button>}</Link>
    </div>
  );
}

export default ItemDetail


