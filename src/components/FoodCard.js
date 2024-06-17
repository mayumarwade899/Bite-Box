import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxStore/slices/CartSlice";

const FoodCard = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="font-bold w-[250px] p-5 bg-white flex flex-col rounded-md gap-2 shadow-lg transition-all duration-500 hover:scale-110">
        <img
          src={props.img}
          alt=""
          className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        />
        <div className="text-lg flex justify-between">
          <h2>{props.name}</h2>
          <span className="text-green-500">₹{props.price}</span>
        </div>
        <p className="text-sm font-medium text-gray-500">
          {props.desc.slice(0, 50)}...
        </p>
        <div className="flex justify-between">
          <span className="flex justify-center items-center">
            <FaStar className="mr-1 text-yellow-500" /> {props.rating}
          </span>
          <button
            onClick={() => {
              dispatch(addToCart(props));
              props.handleToast(props.name);
            }}
            className="p-1 text-white bg-green-400 hover:bg-green-500 rounded-md text-sm"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
