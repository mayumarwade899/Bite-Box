import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.Cart);

  const totalQty = cartItems.reduce(
    (totalItem, item) => totalItem + item.qty,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <div>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-gray-50 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-400 hover:border-red-400"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return <ItemCard key={food.id} {...food} qty={food.qty} />;
          })
        ) : (
          <h2 className="text-center text-lg font-semibold text-gray-800">
            Your Cart is Empty!
          </h2>
        )}

        <div className="absolute bottom-0 mb-5">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount: {totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button className="bg-green-400 font-bold px-2 rounded-md w-[90vw] lg:w-[18vw] text-white py-2 hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`text-5xl rounded-full bg-green-300 hover:bg-green-400 shadow-2xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-300 transition-all"
        }`}
      />
    </div>
  );
};

export default Cart;
