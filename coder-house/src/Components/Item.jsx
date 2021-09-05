import React from 'react'
import { Link } from 'react-router-dom'


function Item ({id, name = '', price = 0, photo = '', category = '', thumbnail = ''}) {
    return (
      <div className="card">
        <Link to={`/${category}/${id}`}>
        <img className="Photo" src={photo} alt={thumbnail}/>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        </Link> 
      </div>
    );
  }

export default Item