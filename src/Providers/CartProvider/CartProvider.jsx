import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Fetch data according to cart
    const fetchCartProducts = async () => {
        const productIds = JSON.parse(localStorage.getItem("cart")) || [];

        if (productIds.length > 0) {
            try {
                const res = await axios.post('http://localhost:5000/furnichairs', { productIds });
                setCartItems(res.data);
                console.log(res.data)
            } catch (error) {
                console.error("Failed to fetch cart products:", error);
            }
        } else {
            // If no product IDs are in local storage, clear cartItems
            setCartItems([]);
        }
    };

    useEffect(() => {
        fetchCartProducts();
    }, []);

    // Add items to customer cart
    const addToCart = (productId) => {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        if (!cartItems.includes(productId)) {
            cartItems.push(productId);
        }
        localStorage.setItem("cart", JSON.stringify(cartItems));
        fetchCartProducts();
    };

    const removeFromCart = (productId) => {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems = cartItems.filter(id => id !== productId);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        fetchCartProducts();
    }

    return (
        <CartContext.Provider value={{ addToCart, cartItems,removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
