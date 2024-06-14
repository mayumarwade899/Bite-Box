import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";

const FoodItems = () => {
    
  return (
    <div className="flex flex-wrap gap-10 justify-center my-10  ">
      {FoodData.map((food) => {
        return (
          <FoodCard
            key={food.id}
            {...food}
          />
        );
      })}
    </div>
  );
};

export default FoodItems;
