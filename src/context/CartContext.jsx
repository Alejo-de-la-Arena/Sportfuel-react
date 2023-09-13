import React, {createContext, useContext, useState } from 'react';

export const CartContext = createContext([])
    
//Estados del lado de arriba funciones del lado de abajo
    
export const useCartContext = () => useContext(CartContext)



export const CartContextProvider = ( {children} ) => {
    
    const [cartList, setCartList] = useState({})

    const addProduct = (newProduct) => {
        setCartList([
            ...cartList, newProduct
        ])
    }

    //Eliminar por producto
    //mostar la cantidad total de productos que tenemos, hacerlo comparado los productos por id, 
    // y si son iguales que se suemn en 1 solo
    //precio total


    const deleteCart = () => {
        setCartList([])
    }


    return (
        //estados y funciones del context
        <CartContext.Provider value={{cartList, addProduct, deleteCart}}> 
        {children}
        </CartContext.Provider>
        
    )
    }
    
    
