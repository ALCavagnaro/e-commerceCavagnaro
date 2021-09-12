import { useEffect, useState} from "react";

const ItemCount = (props) => { 

    let [ItemStock, setItemStock] = useState(0);

    let [count, setCount] = useState(0);

    let [addToCart, setAddToCart] = useState(true)

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

    const handleOnClick = () => {
        
        if (count===0) {
            alert('Elegir un producto')
        }

        else {setAddToCart(false)
            props.onAdd(count)
        
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
        {addToCart ? <button onClick={handleOnClick}>Agregar al carrito</button> : <div></div>}
        </div>
        </>
      )

    }

export default ItemCount;

