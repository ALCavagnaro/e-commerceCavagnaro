import React, { useEffect, useState } from 'react';
import data from './Data.js'
import Item from './Item.jsx'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const { category } = useParams()
    const [products, setProductos] = useState([])
    const [charge, setCargando] = useState(true)

    useEffect(()=>{
        const products = () => {
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(data)
                    console.log("resolving data")
                },2000)
            })
        }
        products().then((items)=>{
            if(category != null){
                const productsFiltered=items.filter((product)=>product.category===category)
                setProductos(productsFiltered)
                setCargando(false)
            } else {
                setProductos(items)
                setCargando(false)
            }
            
        })
    },[category])
     
    return(
        <>
        {charge ? <h2>CARGANDO PRODUCTOS...</h2> : 
        products.map((product)=>
            <Item key={product.id} name={product.name} price={product.price} stock={product.stock} category={product.category} id={product.id} photo={product.photo}/>
        )
        }
        </>

    )
}
export default ItemListContainer 
