import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="bg-[#2699fb] flex justify-between  p-4 ">
      <h1 className=" text-white text-3xl font-bold ">Pro Learning </h1>
      {toggle ? (
        <AiOutlineClose  onClick={() => {
            settoggle(!toggle);
          }} className="text-white text-2xl my-auto md:hidden cursor-pointer " />
        
      ) : (
        <AiOutlineMenu
          onClick={() => {
            settoggle(!toggle);
          }}
          className="  text-white text-2xl my-auto md:hidden cursor-pointer "
        />
      )}

      <ul className="hidden md:flex justify-center gap-6 my-auto text-white">
        <li className="text-xl cursor-pointer align-middle">Home</li>
        <li className=" text-xl cursor-pointer align-middle">About</li>
        <li className="text-xl cursor-pointer align-middle">Contact</li>
        <li className=" text-xl cursor-pointer align-middle">FaQs</li>
      </ul>
      {/* Responsive Menu  */}
      <ul
        className={`${
          toggle ? "left-0" : "left-[-100%]"
        } w-full h-screen bg-black text-white fixed top-[68px] md:hidden duration-300`}
      >
        <li className="text-xl cursor-pointer align-middle p-6">Home</li>
        <li className=" text-xl cursor-pointer align-middle p-6">About</li>
        <li className="text-xl cursor-pointer align-middle p-6">Contact</li>
        <li className=" text-xl cursor-pointer align-middle p-6">FaQs</li>
      </ul>
    </div>
  );
};

export default Header;
