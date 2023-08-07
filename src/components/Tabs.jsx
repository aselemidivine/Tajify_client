import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";

const Tabs = () => {
  return (
    <div className="flex text-center items-center text-white gap-10 " >
      <div className="flex text-center items-center h-[90px] text-white gap-10 mr-[50px]">
        <div className="w-[119px] h-[40px] bg-[#F06] text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24">
          News
        </div>
        <div className="w-[119px] h-[40px] bg-[#4CAF50] text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24">
          Sport
        </div>
        <div className="w-[119px] h-[40px] bg-[#4CAF50] text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24">
          Travel
        </div>
        <div className="w-[119px] h-[40px] bg-[#4CAF50] text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24">
          Future
        </div>
        <div className="w-[119px] h-[40px] bg-[#4CAF50] text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24">
          Culture
        </div>
        <div className="w-[119px] h-[40px] bg-[#4CAF50] text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24">
          Style
        </div>
        <div className="w-[119px] h-[40px] bg-[#4CAF50] text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24">
          Health
        </div>
      </div>
     <div className="icons flex items-center w-[200px] justify-between ml-[50px]"> 
        <i className="cursor-pointer text-black h-6 w-6">
          <AiOutlineSearch />
        </i>
        <i className="cursor-pointer text-black h-6 w-6">
          <HiDotsVertical />
        </i>
     </div>
    </div> 
  );
};

export default Tabs;
