import { useEffect, useState } from "react";

function Stock () {

    let [ItemStock, setStock] = useState(5);

}

function ItemCount (stock, initial,  onAdd) {
    let [count, setCount] = useState(0);
    useEffect(() => {
        console.log('UseEffect()')
        console.log(stock)
    }, [count, stock])

    return (
      <>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
      <div>{count}</div>
      </>
    )
}

/*  <ItemCount stock='5' initial='1' />*/

export default ItemCount; 

/*const [time, setTime] = useState(0)

useEffect(() => {
    setInterval(() => {
        setTime(prevTime => prevTime+1)
    }, 1000)
}, [])*/ 