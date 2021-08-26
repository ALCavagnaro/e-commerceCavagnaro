import ItemCount from './ItemCount.jsx'
import React, {useContext} from 'react'
import CacheProvider from './Context/CacheProvider';

const Data = () => {
  
  useContext(CacheProvider)
  console.log('contexto')
}

const ItemDetail =  ({ id='', name = '', description='', price= 0, thumbnail = '' , stock = '', photo = ''}) => {
  return (
    
    <CacheProvider>

    <div className="card">
        <img className="Photo" src= {photo} alt={thumbnail}/>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        <div>{description}</div>
        <ItemCount stock={stock} onAdd = {() => ('Agrego al carrito') }/>
    </div>
    </CacheProvider>
  );
}

export default ItemDetail


