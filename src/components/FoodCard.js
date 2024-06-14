import React from "react";
import { FaStar } from "react-icons/fa";

const FoodCard = () => {
  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col rounded-md gap-2">
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-lg flex justify-between">
        <h2>Onion Pizza</h2>
        <span className="text-green-500">₹180</span>
      </div>
      <p className="text-sm font-medium text-gray-500">
        akdclksc alskalsk sdhsd lKS O lkxckxc cmxcxlc achaoic asals mashas
        aslasl
      </p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <FaStar className="mr-1 text-yellow-500"/> 4.5
        </span>
        <button className="p-1 text-white bg-green-400 hover:bg-green-500 rounded-md text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
