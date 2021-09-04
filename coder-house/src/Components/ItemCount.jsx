import { useEffect, useState } from "react";
//import { Link } from "react-router-dom"

function ItemCount ({stock, onAdd = () => {}}) {

    let [ItemStock, setStock] = useState(0);

    let [count, setCount] = useState(0);

    //const [addedItem, setAddedItem] = useState(false)

    useEffect (() => {
        setStock(stock);
    }, [ItemStock,stock])

    console.log(ItemStock,stock);

    const add = () => {
        if(count<ItemStock) {
            setCount(count+1)
        }
    }

    const sub = () => {
        if(count>=1){
            setCount(count-1)
        }
    }

    const handleOnAddBuy = (event) => {
       if (count>0) {
           onAdd(event)
           //setAddedItem(true)
           console.log(event)

       }
       
       else {
           alert("Seleccionar producto")
       }
    }


    return (
        <>
        <div className = 'SetCountContainer'>
        <div className = 'SetCountButtonContainer'>
        <button className = 'SetCountButton' onClick={() => add(count+1)}>+</button>
        <button className = 'SetCountButton'onClick={() => sub(count-1)}>-</button>
        </div>
        <div className = 'SetCountSubtitle'>Unidades seleccionadas <strong>{count}</strong></div>
        <div className = 'SetCountSubtitle'>Stock disponible <strong>{ItemStock-count}</strong></div>
        <button className = 'BuyButtonMain' onClick={handleOnAddBuy}>Agregar al carrito</button>
        {/*<Link to="/cart">{addedItem && <button className = 'BuyButtonMain'>Finalizar tu compra</button>}</Link>*/}
        </div>
        </>
      )

    }

export default ItemCount;

