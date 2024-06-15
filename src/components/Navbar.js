import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between m-6 mb-14">
      <div>
        <img src="/images/logo.png" alt="logo" className="w-24 mb-3 lg:w-48"/>
      </div>
      <div>
        <input
          type="search"
          name="search"   
          id=""
          placeholder="Search here"
          autoComplete="off"
          className="p-2 border border-gray-400 text-lg rounded-md outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
