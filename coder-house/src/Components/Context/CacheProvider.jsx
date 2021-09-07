import React, {useState} from 'react'

const CartContext = React.createContext()

const CartState = ({children}) => {

    const [cart, setCart] = useState([])

    const [unit, setUnit] = useState(0)

    const [total, setTotal] = useState(0)

    const onAdd = (product, quantity) => {   /*acá empieza*/

    const isInCart = cart.find(item => item.id === product.id)

    console.log(cart.length)

        if (!isInCart){
            setCart([...cart, {

                key:product.id,
                id:product.id, 
                name:product.name, 
                price:product.price, 
                quantity:quantity,
                subtotal: (product.price*quantity)
            }])
            setUnit(unit+1)
            setTotal(total+(product.price*quantity))
            

        }

        else {
            const cartCheck = cart.map((item)=>{
                if (item.id === product.id){
                    item.quantity+=quantity
                    item.subtotal+=(product.price*quantity)
                }

                return item
            })

            setCart(cartCheck)
            setTotal(total+(product.price*quantity))
        }

    }  /*Acá termina*/

    const remove = (quantity, id, price) => {
        const removeItem = cart.filter((item)=> item.id !== id)
        setCart(removeItem)
        setTotal(total-(quantity*price))
    }

    const clear = () => {
        setCart([])
        setTotal(0)
    }


    return <CartContext.Provider value = {{

                        onAdd, 
                        cart, 
                        unit, 
                        total, 
                        remove, 
                        clear}}>

                       {children}

           </CartContext.Provider>
}

export {CartState, CartContext}




