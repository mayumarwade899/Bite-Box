import React from "react";
import "../index.css";
import Navbar from "./Navbar";
import CategoryMenu from "./CategoryMenu";
import FoodItems from "./FoodItems";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
    </>
  );
};

export default Home;
