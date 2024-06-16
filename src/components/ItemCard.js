import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQty,
} from "../reduxStore/slices/CartSlice";
import toast from "react-hot-toast";

const ItemCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-lg rounded-lg p-2 mb-3 bg-white">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart(props));
          toast(`${props.name} Removed!`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 text-gray-700 hover:text-red-500 text-lg"
      />
      <img src={props.img} alt="foodImage" className="w-[50px] h-[50px]" />

      <div>
        <h2 className="font-bold text-gray-800">{props.name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{props.price}</span>
          <div className="flex justify-center items-center gap-1 absolute right-7">
            <AiOutlinePlus
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={() => dispatch(addToCart(props))}
            />

            <span>{props.qty}</span>

            <AiOutlineMinus
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              onClick={() => dispatch(decreaseQty(props))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
