import { useEffect, useState } from "react";
//import Pullover from '../Statics/Images/fashion-1283863_1920.jpg'

function ItemCount ({stock}) {

    let [ItemStock, setStock] = useState(0);

    let [count, setCount] = useState(0);

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
        if(count>1){
            setCount(count-1)
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
        <button className = 'BuyButtonMain'>Agregar al carrito</button>
        </div>
        </>
      )

    }

export default ItemCount;

