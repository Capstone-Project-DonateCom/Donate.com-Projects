/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#ffffff] text-[#00B0B9] p-4 text-xl">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <a href="#" className=" text-3xl font-bold pl-40">
            Donate.com
          </a>
        </div>
        <div className=" pr-20">
          <a href="#" className=" m-10">
            Home
          </a>
          <a href="#" className=" m-10">
            Events
          </a>
          <a href="#" className=" m-10">
            Donates
          </a>
          <a href="#" className=" m-5">
            About
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
