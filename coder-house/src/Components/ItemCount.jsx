import { useEffect, useState} from "react";
import { Link } from "react-router-dom"

const ItemCount = (props) => { 

    let [ItemStock, setItemStock] = useState(0);

    let [count, setCount] = useState(0);

    useEffect (() => {
        setItemStock(props.stock);
    }, [ItemStock, props.stock])

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

    return (
        <>
        <div className = 'SetCountContainer'>
        <div className = 'SetCountButtonContainer'>
        <button className = 'SetCountButton' onClick={() => add()}>+</button>
        <button className = 'SetCountButton'onClick={() => sub()}>-</button>
        </div>
        <div className = 'SetCountSubtitle'>Unidades seleccionadas <strong>{count}</strong></div>
        <div className = 'SetCountSubtitle'>Stock disponible <strong>{ItemStock-count}</strong></div>
        <button onClick={()=> props.onAdd(count)}>Agregar al carrito</button>
        </div>
        </>
      )

    }

export default ItemCount;

