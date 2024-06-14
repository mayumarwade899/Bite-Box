import React from "react";

const CategoryMenu = () => {
  return (
    <div className="m-6">
      <h3 className="text-xl font-semibold">Find the best Food!</h3>
      <div className="my-5 flex gap-4 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-md hover:bg-green-400 hover:text-white">
          All
        </button>

        <button className="px-3 py-2 bg-gray-200 font-bold rounded-md hover:bg-green-400 hover:text-white">
          Lunch
        </button>

        <button className="px-3 py-2 bg-gray-200 font-bold rounded-md hover:bg-green-400 hover:text-white">
          Breakfast
        </button>

        <button className="px-3 py-2 bg-gray-200 font-bold rounded-md hover:bg-green-400 hover:text-white">
          Dinner
        </button>

        <button className="px-3 py-2 bg-gray-200 font-bold rounded-md hover:bg-green-400 hover:text-white">
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
