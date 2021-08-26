import React, {useContext} from 'react'
import {useState} from 'react'


const CartContext = React.createContext()

export default function CacheProvider ({defaultValue = [], children}) {
    const [cache, setCache] = useState (defaultValue);

    function getFromCache(id) {
        return cache.find(obj => obj.id === id )
    }

    function isInCache(id) {
        return id === undefined ? undefined : getFromCache !== undefined
    }

    function addToCache(obj) {
        if (isInCache (obj && obj.id)) {
            console.log('prueba')
            return;
        }

        setCache ([...cache, obj]);
    }

    return <CartContext.Provider value = {{cache, addToCache, isInCache, cacheSize: cache.lenght}}>

        {children}

           </CartContext.Provider>
}


// const Context = React.createContext({Item}, {Quantity}) 

// export default function CartContext ({children}) {

//     const [Item, setItem] = useState ([])
//     const [Quantity, setQuantity] = useState = (0)

//     const toggleTheme = ({data}) => {

//      const inCart = () => {
//          setItem({
//              ...data,
//              inCart:true
//          });
//          console.log(data)
//      }


//     }

//     return (
//         <>
     
//          <CartContext.Provider value ={{valor:[]}}>
//              <ItemDetail/>
//          </CartContext.Provider>

//         </>
//     )
// }

