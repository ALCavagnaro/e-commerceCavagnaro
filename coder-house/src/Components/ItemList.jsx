import React, { useEffect, useState } from 'react';
import data from './Data.js'
import Item from './Item.jsx'
import { useParams } from 'react-router-dom'


const ItemList = () => {

  const { category } = useParams()
    const [products, setProducts] = useState([])
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
                setProducts(productsFiltered)
                setCargando(false)
            } else {
                setProducts(items)
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
        {console.log(products)}
        </>

    )
}
export default ItemList 