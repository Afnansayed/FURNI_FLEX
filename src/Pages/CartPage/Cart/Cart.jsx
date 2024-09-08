import React, { useContext, useState } from 'react';
import { GiTireIronCross } from "react-icons/gi";
import { CartContext } from '../../../Providers/CartProvider/CartProvider';
const Cart = ({item}) => {
    const [quantity, setQuantity] = useState(1);
    const {removeFromCart} = useContext(CartContext);
     // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    setQuantity(Math.max(quantity - 1, 1)); 
  };
    return (
        <>
             <li className="flex flex-col py-6 sm:flex-row sm:justify-between border-b-2">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <div className="flex items-center">
                    <div className="quantity-container flex items-center bg-[#ffffff] h-12">
                      <button
                        className="quantity-button p-2"
                        onClick={decreaseQuantity} 
                      >
                        -
                      </button>
                      <h1 className="p-2">{quantity}</h1>
                      <button
                        className="quantity-button p-2"
                        onClick={increaseQuantity} 
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 border-rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    alt="Polaroid camera"
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between items-center w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                          Polaroid camera
                        </h3>
                      </div>
                      <div>
                        <button 
                        onClick={() => removeFromCart(item._id)}
                        className="text-xl">
                          <GiTireIronCross />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">59.99€</p>
                    </div>
                  </div>
                </div>
              </li>
        </>
    );
};

export default Cart;