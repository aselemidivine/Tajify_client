import React from "react";
import styled from "styled-components";
import Lifestyle from "../assets/images/pngs/lifestyle.png";
import Technology from "../assets/images/pngs/technology-img.png";
import Sport from "../assets/images/pngs/sport-img.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";

const BlogCategory = () => {
  return (
    <BlogCategoryContainer>
      <div className="lifestyle">
        <div className="wrapper__div">
          <div className="header-box"></div>
          <div className="bold__text">Lifestyle</div>
        </div>
        <div className="main__news">
          <img
            src={Lifestyle}
            className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
          />
          <h1 className="bold__text">
            Mystify Winner Is Retired Because of Wealth's Beds Ankle World Wide.
          </h1>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <img
                // src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-[12px] text-gray-800">John Doe</p>
                <p className="text-gray-600 text-sm"></p>
              </div>
              <p className="mt-2 text-gray-700"></p>
              <div className="mt-2 flex items-center">
                <AiOutlineCalendar className="text-gray-600 mr-2" />
                <span className="text-gray-600 text-[12px]">
                  12th, May 2023 - 03: 23pm
                </span>
              </div>
              <div className="mt-2 flex items-center">
                <LiaComments className="text-gray-600 mr-2" />
                <span className="text-gray-600 text-[12px]">23 Com..</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lifestyle">
        <div className="wrapper__div">
          <div className="header-box"></div>
          <div className="bold__text">Sport</div>
        </div>
        <div className="main__news">
          <img
            src={Sport}
            className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
          />
          <h1 className="bold__text">
          Who is next football Super Hero. Check the future star

          </h1>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <img
                // src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-[12px] text-gray-800">John Doe</p>
                <p className="text-gray-600 text-sm"></p>
              </div>
              <p className="mt-2 text-gray-700"></p>
              <div className="mt-2 flex items-center">
                <AiOutlineCalendar className="text-gray-600 mr-2" />
                <span className="text-gray-600 text-[12px]">
                  12th, May 2023 - 03: 23pm
                </span>
              </div>
              <div className="mt-2 flex items-center">
                <LiaComments className="text-gray-600 mr-2" />
                <span className="text-gray-600 text-[12px]">23 Com..</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lifestyle">
        <div className="wrapper__div">
          <div className="header-box"></div>
          <div className="bold__text">Technology</div>
        </div>
        <div className="main__news">
          <img
            src={Technology}
            className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
          />
          <h1 className="bold__text">
            Who is next football Super Hero. Check the future star
          </h1>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <img
                // src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-[12px] text-gray-800">John Doe</p>
                <p className="text-gray-600 text-sm"></p>
              </div>
              <p className="mt-2 text-gray-700"></p>
              <div className="mt-2 flex items-center">
                <AiOutlineCalendar className="text-gray-600 mr-2" />
                <span className="text-gray-600 text-[12px]">
                  12th, May 2023 - 03: 23pm
                </span>
              </div>
              <div className="mt-2 flex items-center">
                <LiaComments className="text-gray-600 mr-2" />
                <span className="text-gray-600 text-[12px]">23 Com..</span>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </BlogCategoryContainer>
  );
};

export default BlogCategory;

const BlogCategoryContainer = styled.div`
  display: flex;
  margin-top: 34px;
  margin-bottom: 10px;
  justify-content: space-between;

  .wrapper__div {
    display: flex;
    align-items: end;
    max-width: 112px;
  }
  .header-box {
    width: 11px;
    height: 29px;
    color: black;
    margin-right: 11px;
    background-color: #4caf50;
  }

  .bold__text {
    color: #000;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .main__news {
    max-width: 400px;
    margin-right: 23px;
    margin-top: 20px;
  }
`;
