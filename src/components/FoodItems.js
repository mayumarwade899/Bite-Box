import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  const handleToast = (name) => toast.success(`Added ${name}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center my-10  ">
        {FoodData.map((food) => {
          return <FoodCard key={food.id} {...food} handleToast={handleToast}/>;
        })}
      </div>
    </>
  );
};

export default FoodItems;
