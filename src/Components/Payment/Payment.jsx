import {React, useState, useContext} from 'react';
import {addPaymentOrder} from '../../Firebase/Firebase.js';
import {CartContext} from '../Context/CartProvider';
import Greetings from '../Greetings/Greetings';


const Payment = () => {

    let newOrder = []

    let buyerName = []

    let buyerPhone = []

    let buyerEmail = []

    const {total, cart, clear} = useContext(CartContext)

    const [finalMessage, setFinalMessage] = useState(false)

    const finishPayment = () => {

        const validation = () => {

        if ((buyerName.length === 0) || 
        (buyerPhone.length === 0) || 
        (buyerEmail.length === 0)) {

          console.log('Campos incompletos')
          alert('Completar el formulario para terminar compra')
        }

        else {

            newOrder = {
                buyer: {
                  name:`${buyerName[buyerName.length-1]}`,
                  phone: `${buyerPhone[buyerPhone.length-1]}`,
                  email: `${buyerEmail[buyerEmail.length-1]}`,
                },
                items: [],
                date: new Date().toString()
              };
              let totalPrice = total;
              cart.forEach(item => {
                newOrder.items.push(item);
                newOrder.items.push(totalPrice);
              });

              newOrder['totalPrice'] = totalPrice;
              
              addPaymentOrder('Órdenes', newOrder).then(res=>(console.log(res)));


              clear()

              setFinalMessage(true)
            }

        }

      validation()
      
    }

      const handleSubmit = (event) => {

        event.preventDefault()

      }

      const handleChangeName = (event) => {

        buyerName.push(event.target.value)
      }

      const handleChangePhone = (event) => {

        buyerPhone.push(event.target.value)
      }


      const handleChangeEmail = (event) => {

        buyerEmail.push(event.target.value)

      }

    
      return (

            <>  

              <Greetings greetings = 'Formulario de compra'/> 

              { 
              
                !finalMessage ? <form className = 'pymt-container' onSubmit={handleSubmit}>

                  <h4>Ingresá los siguientes datos para finalizar tu compra</h4>
                  <input type = 'text' placeholder= 'Nombre y apellido' onChange={handleChangeName}/>
                  <input type = 'email' placeholder= 'Dirección de email'onChange={handleChangePhone}/>
                  <input type = 'number' placeholder= 'Número de teléfono'onChange={handleChangeEmail}/>

                  <h4>Total <strong> $ {total}</strong></h4>
                  <button className = 'buy-btn' onClick={()=>{finishPayment()}}>Finalizar compra</button>
                </form> : <></>

              }
            
                
              {
              
                finalMessage?  <div className ='card'>
                    <strong><h2>La operación ha sido exitosa</h2></strong>
                    <h2>¡Muchas gracias por tu compra!</h2>
                </div> : <></>
              
              }


            </>
        )

}



export default Payment

