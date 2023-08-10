import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Ads from "../../components/Ads";
import Tabs from "../../components/Tabs";
import AdsSecond from "../../components/Ads2";
import Feeds from "../../components/Feeds";
import Filter from "../../components/Filter";
import TrendyNews from "../../components/TrendyNews";
import Writers from "../../components/Writers";
import BlogCategory from "../../components/BlogCategory";
import LatestNews from "../../components/LatestNews";
import WriterFooter from "../../components/WriterFooter";
import Sidebar from "../../components/Sidebar";

const Writer = () => {
  return (
    <WriterContainer>
      <div className="index__page">
        <Navbar />
        <div className="pl-40 pr-40 w-full h-full ">
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
          <div className="flex justify-between items-end">
            <div className="ads__second">
              <AdsSecond />
            </div>
            <div>
              <button className="w-[166px] h-[40px] bg-[#F06] text-center text-white flex items-center cursor-pointer justify-center rounded-lg p-21 px-78">
                Add Post
              </button>
            </div>
          </div>
          <Feeds />
          <Filter />
          <TrendyNews />
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="ads__second">
          <AdsSecond />
          </div>
          <Writers />
          <BlogCategory />
          <LatestNews />
          <div className="writer__foter">
            <WriterFooter />
          </div>
        </div>
      </div>
    </WriterContainer>
  );
};

export default Writer;

const WriterContainer = styled.div`
  margin-bottom: 80px;

  .index__page {
    position: relative;
  }

  .writer__foter {
    position: absolute;
    bottom: 0;
    left: 100px;
    .custom__style {
      width: 363px;
      height: 95px;
    }
  }

  .sidebar {
    position: absolute;
    top: 999px;
    right: 9%;
    width: 229px;
  }

  .ads__second {
      width: 944px;
  }
`;
