import React, { useEffect, useState } from 'react';
import data from './Data.jsx'
import Item from './Item.jsx'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const { categoria } =useParams()
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        const productos = () => {
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(data)
                    console.log("resolving data")
                },2000)
            })
        }
        productos().then((items)=>{
            if(categoria != null){
                const productosFiltrados=items.filter((producto)=>producto.categoria===categoria)
                setProductos(productosFiltrados)
                setCargando(false)
            } else {
                setProductos(items)
                setCargando(false)
            }
        })
    },[categoria])


    return(
        <>
        {cargando ? <h2>CARGANDO PRODUCTOS...</h2> : 
        productos.map((producto)=>
            <Item key={producto.id} nombre={producto.name} precio={producto.price} stock={producto.stock} categoria={producto.categoria} id={producto.id} imagen={producto.photo}/>
        )
        }
        </>

    )
}
export default ItemListContainer 
