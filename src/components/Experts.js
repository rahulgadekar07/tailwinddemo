import React from 'react'
import laptop from "../assets/images/laptop.jpg";
const Experts = () => {
  return (
    <div className='max-w-[1240px]  mx-auto  md:grid grid-cols-2 p-2' >
      <div className=' col-span-1'>
        <img src={laptop} alt="" srcset="" />
      </div>
      <div className='   col-span-1 text-center my-auto'>
        <h1 className='md:text-3xl text-[#00df9a] my-2 text-2xl'>LEARN FROM EXPERTS</h1>
        <p className=' my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse natus, officia molestiae tempore veniam nobis harum non id itaque odit ipsam laboriosam voluptas minima optio nulla quod eveniet! Nihil, recusandae?</p>
        <button className='bg-[black] text-white p-3 rounded-xl my-2'>Get Started</button>
      </div>
    </div>
  )
}

export default Experts
