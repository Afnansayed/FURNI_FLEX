import React, { useContext, useState } from "react";
import { CartContext } from "../../Providers/CartProvider/CartProvider";
import Cart from "./Cart/Cart";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
 

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold my-8">An overview of your order</h2>
        <div>
          {/* Component UI */}
          <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-[#fafafa] text-gray-800">
            <ul className="flex flex-col divide-y divide-gray-300">
             {
                 cartItems.map(item => <Cart key={item._id} item={item} removeFromCart={removeFromCart}/>)
             }

            </ul>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
