import React from 'react';
import Data from './Data.jsx'
import Item from './Item.jsx'


function ItemListContainer () {

  const ItemList = Data.map( Item =>  (
    <Item key={Item.id} name={Item.name} photo={Item.photo}/>
  ));

  return (
    <>
      <div className='PhotoGallery'>{ItemList}</div>
    </>
  )
  
}

export default ItemListContainer 
