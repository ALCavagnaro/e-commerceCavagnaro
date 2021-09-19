import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {itemId} from '../../Firebase/Firebase.js'


const ItemDetailContainer = ()=>{

  const [product, setProduct] = useState([])
  const [charge, setCharge] = useState(true)


  const {id} = useParams()

useEffect(()=>{
    const item = itemId(id)
    item.then((data)=>{
        setProduct({
            
            id:data.id, 
            ...data.data()
        })
        setCharge(false)
    })
},[id])


  return(
      <>
      {charge?<h2>Cargando productos...</h2>:
          <ItemDetail 
          key={product.id}
          id={product.id}
          name={product.name} 
          price={product.price} 
          stock={product.stock} 
          thumbnail={product.thumbnail} 
          photo={product.photo} 
          category={product.category}/>}
      </>

  )

}

export default ItemDetailContainer

