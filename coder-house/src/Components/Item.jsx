import React from 'react'
import { Link } from 'react-router-dom'


function Item ({id, name, price, photo, categoria}) {
    return (
      <div className="card">
        <Link to={`/${categoria}/${id}`}>
        <div className="id">{id}</div>
        <div className="Photo">{photo}</div>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        </Link> 
      </div>
    );
  }

export default Item