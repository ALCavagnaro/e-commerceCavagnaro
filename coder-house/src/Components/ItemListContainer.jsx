import React from 'react';
import data from './Data.jsx'
import Item from './Item.jsx'


function ItemListContainer () {

  const ItemList = data.map( item =>  (
    <Item name={item.name} photo={item.photo} categoria={item.Categoría} id={item.id}/>
  ));

  return (
    <>
      <div className='PhotoGallery'>{ItemList}</div>
    </>
  )
  
}

export default ItemListContainer 
