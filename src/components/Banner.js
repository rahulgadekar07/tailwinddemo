import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] text-white w-full py-[100px] text-center">
      <div className="max-w-[1240px] mx-auto font-bold">
        <h1 className="md:text-5xl text-3xl my-3">Welcome to the Pro Learning</h1>
      </div>
      <div className="md:text-4xl text-2xl my-3">
        Learn With Us{" "}
        <ReactTyped strings={["React", "Spring", "Angular"]} typeSpeed={120} loop={true} backSpeed={60}/>
      </div>
      <button className='bg-[black] text-white p-3 rounded-xl'>Get Started</button>
    </div>
  );
};

export default Banner;
