import {React, useState, useContext} from 'react';
import {addPaymentOrder} from '../../src/Firebase/Firebase.js';
import {CartContext} from './Context/CacheProvider';

let message = []

const Payment = () => {

    const {total, cart} = useContext(CartContext)

    const [items, setItems] = useState([]);

    console.log('items', items, 'cart', cart)

    const [finalMessage, setFinalMessage] = useState(false)

    const finishPayment = () => {

    const newOrder = {
        buyer: {
          name: 'Ana Laura',
          phone: '+54 9 9999-9999',
          email: 'analauracavagnaro@gmail.com'
        },
        items: [],
        date: new Date().toString()
      };
      let totalPrice = total;
      cart.forEach(item => {
        newOrder.items.push(item);
        console.log(item)
        totalPrice = totalPrice + item.price;
      });

      newOrder['totalPrice'] = totalPrice;
      message.push(newOrder.buyer.name)
      message.push(newOrder.date)
     
  
      addPaymentOrder('Órdenes', newOrder).then(res => console.log(res));
      console.log(message, message[0])

      setFinalMessage(true)
}

return (

    <>  

        {console.log(message)}

        <h3>Total {total}</h3>
     
        <button className = 'BuyButtonMain' onClick={()=>{finishPayment()}}>Finalizar compra</button>
         
        {finalMessage?  <div className ='card'>
            <strong><h2>La operación ha sido exitosa</h2></strong>
            <h3>{message[0]}, gracias por tu compra</h3>
            <h4>Fecha y horario: {message[1]}</h4>
        </div> : <></>}
    

    </>
)

}



export default Payment