import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import data from './Data.js'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = ()=>{

  const [product, setProduct] = useState([])


  const {id} = useParams()


  useEffect(()=>{
      const products = () => {
          return new Promise((resolve, reject)=>{
              setTimeout(()=>{
                  resolve(data)
              },2000)
          })
      }
      products().then((items)=>{
          const product = items.find(product => product.id === "1")
          setProduct(product)
          
      })
  },[])


  return(
      <>
          <ItemDetail name={product.name} price={product.price} stock={product.stock} thumbnail={product.thumbnail} photo={product.photo} category={product.category}/>
      </>

  )
}

export default ItemDetailContainer