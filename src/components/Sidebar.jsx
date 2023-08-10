import React from "react";
import styled from "styled-components";
import Ads from "./Ads";
import { BsChevronRight } from "react-icons/bs";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="ads__sidebar">
        <Ads />
      </div>
      <div className="categories__sidebar ">
        <div className="custom__style bg-[#D9D9D9] w-[728px] h-[90px] flex flex-wrap justify-center items-center">
          <div className="categories">
            <h4>Categories</h4>
          </div>
          <div className="categories__list">
            <div className="category__h5">
              <h5>Fashion</h5>
              <BsChevronRight className="text-gray-600 mr-2" />
            </div>
           
            <div className="category__h5">
              <h5>Sport</h5>
              <BsChevronRight className="text-gray-600 mr-2" />
            </div>
            <div className="category__h5">
              <h5>Education</h5>
              <BsChevronRight className="text-gray-600 mr-2" />
            </div>
            <div className="category__h5">
              <h5>Entertainment</h5>
              <BsChevronRight className="text-gray-600 mr-2" />
            </div>
            <div className="category__h5">
              <h5>Technology</h5>
              <BsChevronRight className="text-gray-600 mr-2" />
            </div>
            <div className="category__h5">
              <h5>Travel</h5>
              <BsChevronRight className="text-gray-600 mr-2" />
            </div>
            <div className="category__h5">
              <h5>Others</h5>
              <BsChevronRight className="text-gray-600 mr-2" />
            </div>
            <h5></h5>
            <h5></h5>
            <h5></h5>
            <h5></h5>
            <h5></h5>
            <h5></h5>
          </div>
        </div>
      </div>
      <div className="recommended__sidebar">
        <Ads />
      </div>
      <div className="ads__sidebar__1">
        <Ads />
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .ads__sidebar {
    .custom__style {
      width: 100%;
      height: 244px;
      margin-bottom: 30px;
    }
  }

  .ads__sidebar__1 {
    .custom__style {
      width: 100%;
      height: 244px;
    }
  }
  .categories__sidebar {
    .custom__style {
      width: 100%;
      height: 358px;
      margin-bottom: 30px;
      padding: 23px;
    }
  }
  .recommended__sidebar {
    .custom__style {
      width: 100%;
      height: 282px;
      margin-bottom: 30px;
    }
  }

  .categories {
    width: 134px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    justify-content: center;
    padding-bottom: 20px;
    h4 {
      color: #008001;
      font-size: 16px;
      font-weight: 600;
      line-height: normal;
    }
  }

  .categories__list {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    width: 100%;
    margin-top: 20px;
    h5 {
      color: #000;
      font-size: 13.33px;
      font-weight: 600;
      line-height: normal;
    }
  }

  .category__h5 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
