import React from "react";
import Navbar from "../../components/Navbar";
import Ads from "../../components/Ads";
import Tabs from "../../components/Tabs";
import AdsSecond from "../../components/Ads2";

const Writer = () => {
  return (
    <div>
      <Navbar />
      <div className="pl-40 pr-40 ">
        <div className="writers-body flex justify-between text-center items-center h-[90px] mt-[33px] mb-[33px] ">
          <div className="w-[145px] h-[44px] bg-[#4CAF50] text-center flex items-center justify-center">
            <span className="text-white">Top News</span>
          </div>
          <div className="w-[362px] h-[20px] text-black text-md">
            <span>Traveling with kids can be rough. Parents ......</span>
          </div>
          <div className="">
            <Ads />
          </div>
        </div>
        <Tabs />
        <div className="flex justify-between">
          <div className="">
            <AdsSecond />
          </div>
          <div>
          <div className="w-[166px] h-[40px] bg-[#F06] text-center flex items-center cursor-pointer justify-center rounded-lg p-21 px-78">
          Add Post
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writer;
