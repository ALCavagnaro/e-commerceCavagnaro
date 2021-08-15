import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const getItems = () => {
  return fetch('https://api.mercadolibre.com/sites/MLA/search?q=jeans').then(
    response => response.json()
  );
};

export default function ItemListContainer() {
  const [items, setItems] = useState();

  useEffect(async () => {
    const data = await getItems();
    const arr = [];
    data.results.forEach(item => {
      arr.push(
       <ItemDetail key={item.id} 
        name={item.title} 
        price={item.price} 
        thumbnail={item.thumbnail}/>
      );
    });
    setItems(arr);
  }, []);

  return <>
  <div className='PhotoGallery'>{items}</div>
  </>;
}

//


// function Item ({id, name, price, photo}) {
//   return (
//     <div className="card">
//       <div className="id">{id}</div>
//       <div className="Photo">{photo}</div>
//       <div className="name">{name}</div>
//       <div className="price">{price}</div>
//       <button className = 'BuyButton'>Agregar al carrito</button>
//     </div>
//   );
// }

// function ItemListContainer () {

//   const ItemsSotck = [
//     {
//       id: "1" ,
//       name: "Bufanda",
//       price: 500,
//       photo: <img className="Photo" src={Bufanda} alt="Bufanda"/>
//     },

//     {
//       id: "2",
//       name: "Campera",
//       price: 1000,
//       photo: <img className="Photo" src={Campera} alt="Campera"/>
//     },

//     {
//       id: "3",
//       name: "Jeans",
//       price: 850,
//       photo: <img className="Photo" src={Jeans} alt="Jeans"/>
//     },

//     {
//       id: "4",
//       name: "Vestido",
//       price: 690,
//       photo: <img className="Photo" src={Vestido} alt="Vestido"/>
//     },
//   ];

//   const ItemList = ItemsSotck.map( ItemStock =>  (
//     <Item key={ItemStock.id} photo={ItemStock.photo} name={ItemStock.name} price={ItemStock.price}/>
//   ));

//   return (
//     <>
//       <div className='PhotoGallery'>{ItemList}</div>
//     </>
//   )
  
// }

// export default ItemListContainer 
