import React, { createContext } from 'react';

export const CartContext = createContext();
const CartProvider = ({children}) => {

    //add items in customer cart 
    const addToCart = (productId) => {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [] ;
        if(!cartItems.includes(productId)){
            cartItems.push(productId);
        }
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }
    return (
        <CartContext.Provider value={{addToCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;