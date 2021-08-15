import React from 'react';

export default function ItemDetail({ key='', name = '', description='', price= 0, thumbnail = '' }) {
  return (
    <div className="card">
        <div className="id">{key}</div>
        <img className="Photo" src= {thumbnail} alt={thumbnail}/>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        <div>{description}</div>
        <button className = 'BuyButton'>Agregar al carrito</button>
    </div>
  );
}


