import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import data from './Data.jsx'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = ()=>{

  const [producto, setProducto] = useState([])


  const {id} = useParams()


  useEffect(()=>{
      const productos = () => {
          return new Promise((resolve, reject)=>{
              setTimeout(()=>{
                  resolve(data)
              },2000)
          })
      }
      productos().then((items)=>{
          const producto = items.find(producto => producto.id ===id)
          setProducto(producto)
          
      })
  },[])


  return(
      <>
          <ItemDetail name={producto.name} price={producto.price} stock={producto.stock} thumbnail={producto.thumbnail} />
      </>

  )
}

export default ItemDetailContainer