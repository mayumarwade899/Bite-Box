import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const handleToast = (name) => toast.success(`Added ${name}`);
  const category = useSelector((state) => state.category.category);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center my-10  ">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food;
          } else {
            return category === food.category;
          }
        }).map((food) => (
          <FoodCard key={food.id} {...food} handleToast={handleToast} />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
