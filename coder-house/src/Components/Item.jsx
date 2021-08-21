import React from 'react'
import { Link } from 'react-router-dom'


function Item ({id, name, price, photo, categoria, thumbnail}) {
    return (
      <div className="card">
        <Link to={`/${categoria}/${id}`}>
        <div className="id">{id}</div>
        <img className="Photo" src={`${photo}`} alt={thumbnail}/>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        </Link> 
      </div>
    );
  }

export default Item