import { useEffect, useState } from "react";
//import { Link } from "react-router-dom"

function ItemCount ({stock = () => {}}) {

    let [ItemStock, setItemStock] = useState(0);

    let [count, setCount] = useState(0);

    useEffect (() => {
        setItemStock(stock);
    }, [ItemStock, stock])

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

    // const handleOnAddBuy = (event) => {
    //    if (count>0) {
    //        addBtn(event)

    //    }
       
    //    else {
    //        alert("Seleccionar producto")
    //    }
    // }


    return (
        <>
        <div className = 'SetCountContainer'>
        <div className = 'SetCountButtonContainer'>
        <button className = 'SetCountButton' onClick={() => add(count+1)}>+</button>
        <button className = 'SetCountButton'onClick={() => sub(count-1)}>-</button>
        </div>
        <div className = 'SetCountSubtitle'>Unidades seleccionadas <strong>{count}</strong></div>
        <div className = 'SetCountSubtitle'>Stock disponible <strong>{ItemStock-count}</strong></div>
        {console.log('itemcount', count)}
        </div>
        </>
      )

    }

export default ItemCount;

