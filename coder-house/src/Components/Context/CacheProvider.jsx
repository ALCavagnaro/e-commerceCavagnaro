import React, {useState} from 'react'

const CartContext = React.createContext()

const CartState = ({children}) => {

    const [cart, setCart] = useState([])

    const [Item, setItems] = useState(0)

    const [Total, setTotal] = useState(0)

    const onAdd = ({quantity, product}) => {
     
    const isInCart = cart.find(item => item.id === product.id)

        if (!isInCart){
            setCart([...cart, {id:product.id, name:product.name, price:product.price, subtotal: (product.price*quantity), quantity:quantity}])
            console.log(product, quantity)
            setItems(Item+1)
            setTotal(Total+(product.price*quantity))
            
        }

    

    }


    return <CartContext.Provider value = {{onAdd, cart, Item, Total}}>

        {children}

           </CartContext.Provider>
}

export {CartState, CartContext}




