
import React from "react";
import single from '../assets/images/single.png'
import double from '../assets/images/double.png'
import triple from '../assets/images/triple.png'
const Plans = () => {
  return (
    <div className="py-[100px]">
      <div className="md:grid grid-cols-3 md:mx-[80px] py-3">
        <div className=" text-center mx-2 col-span-1 border border-black  rounded-md shadow-xl bg-gray-100 md:hover:scale-105 hover:bg-gray-200 duration-300 m-3 ">
            <img className=" relative top-[-20%] left-[40%] w-[40%]" src={single} alt="single" srcset="" />
            <h1 className="md:text-2xl  font-bold mt-0">React Developement</h1>
            <h1 className="text-3xl my-2">$149</h1>
            <p className="mb-2">Lorem ipsum dolor sit amet.</p>
            <p className="mb-2">Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet </p>
            <p className="mb-2">Lorem ipsum dolor sit amet consectetur.</p>
            <button className="bg-[#1bf1ce] p-2 rounded-md w-[80%] mb-5">Start Trial</button>
        </div>
        <div className=" text-center mx-2 col-span-1 border border-black  rounded-md shadow-xl bg-gray-100 hover:scale-105 hover:bg-gray-200 duration-300 m-3 ">
            <img className=" relative top-[-20%] left-[40%] w-[40%]" src={double} alt="single" srcset="" />
            <h1 className="md:text-2xl  font-bold mt-0">Spring Developement</h1>
            <h1 className="text-3xl my-2">$149</h1>
            <p className="mb-2">Lorem ipsum dolor sit amet.</p>
            <p className="mb-2">Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet </p>
            <p className="mb-2">Lorem ipsum dolor sit amet consectetur.</p>
            <button className="bg-[#1bf1ce] p-2 rounded-md w-[80%] mb-5">Start Trial</button>
        </div>
        <div className=" text-center mx-2 col-span-1 border border-black  rounded-md shadow-xl bg-gray-100 hover:scale-105 hover:bg-gray-200 duration-300 m-3 ">
            <img className=" relative top-[-20%] left-[40%] w-[40%]" src={triple} alt="single" srcset="" />
            <h1 className="md:text-2xl  font-bold mt-0">Angular Developement</h1>
            <h1 className="text-3xl my-2">$149</h1>
            <p className="mb-2">Lorem ipsum dolor sit amet.</p>
            <p className="mb-2">Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet </p>
            <p className="mb-2">Lorem ipsum dolor sit amet consectetur.</p>
            <button className="bg-[#1bf1ce] p-2 rounded-md w-[80%] mb-5">Start Trial</button>
        </div>
       
      </div>
    </div>
  );
};

export default Plans;
