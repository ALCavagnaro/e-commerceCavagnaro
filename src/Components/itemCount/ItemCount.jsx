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

        else {
            
            setAddToCart(false)
            props.onAdd(count)
        }

        
    }

    return (
        <>
        <div className = 'count-container'>
           <div className = 'count-btn-container'>
              {addToCart ? <button className = 'count-btn' onClick={() => add()}>+</button> : <button disabled={true} className = 'count-btn disabled-btn' onClick={() => add()}>+</button>}
              {addToCart ? <button className = 'count-btn'onClick={() => sub()}>-</button> : <button disabled={true} className = 'count-btn disabled-btn'onClick={() => sub()}>-</button>}
           </div>
           <div className = 'count-subtitle'>Unidades seleccionadas <strong>{count}</strong></div>
           <div className = 'count-subtitle'>Stock disponible <strong>{ItemStock-count}</strong></div>
        <div className = 'add-btn-container'>
            {addToCart ? <button onClick={handleOnClick}>Agregar al carrito</button> : <button disabled={true} className = 'disabled-btn' onClick={handleOnClick}>Agregar al carrito</button>}
        </div>
        </div>
        </>
      )

    }

export default ItemCount;

