import React, { useEffect, useState } from 'react';
//import data from './Data.js'
import Item from './Item.jsx'
import { useParams } from 'react-router-dom'
import {completeItemList, itemCat} from '../../src/Firebase/Firebase.js'

const ItemList = () => {

  const { category } = useParams()
    const [products, setProducts] = useState([])
    const [charge, setCargando] = useState(true)

    useEffect(()=>{
        if (category != null) {
            const items = itemCat(category)
            items.then((data)=>{
                const itemsAux =[]
                data.forEach(item=>{
                    itemsAux.push({
                        id: item.id, 
                        name: item.data().name, 
                        price: item.data().price, 
                        photo:item.data().photo, 
                        stock: item.data().stock, 
                        category: item.data().category})
                })
                console.log('itemsAux',itemsAux)
                 setProducts(itemsAux)
                 setCargando(false)

            })
        }
        else {
            const items = completeItemList()
            items.then((data)=>{

                const itemsAux = []
                data.forEach(item=> {
                    itemsAux.push({
                        id: item.id, 
                        name: item.data().name, 
                        price: item.data().price,
                        photo:item.data().photo, 
                        stock: item.data().stock, 
                        category: item.data().category})
                });

                setProducts(itemsAux)
                setCargando(false)

            })

        }
    }, [category])
     
    return(
        <>
        { charge ? <h2>CARGANDO PRODUCTOS...</h2> : 
        products.map((product)=>
           <Item 
                key={product.id} 
                name={product.name} 
                price={product.price} 
                stock={product.stock} 
                category={product.category} 
                id={product.id} 
                photo={product.photo}
           />
        )
        }
        {console.log(products)} 
        </>

    )
}
export default ItemList 