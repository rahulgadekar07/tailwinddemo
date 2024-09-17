import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly  bg-[#2699fb]  w-full p-10">
      <div className="text-white my-auto   ">
        <h1 className="md:text-4xl text-xl my-2">Want to Learn Latest I.T Skills?</h1>
        <p className="my-2">Sign up to our NewsLetter and stay up to date </p>
      </div>
      <div className="  my-auto">
        <input
          className="w-[60%] p-3 rounded-md md:mx-1"
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
        />
        <button className="bg-[black] text-white p-3 rounded-md my-2 mx-1">
          Notify Me
        </button>

        <div>
          <p>
            We care about the protection of your data Read our{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
