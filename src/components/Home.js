import React from "react";
import "../index.css";
import Navbar from "./Navbar";
import CategoryMenu from "./CategoryMenu";
import FoodItems from "./FoodItems";
import Cart from "./Cart";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </>
  );
};

export default Home;
