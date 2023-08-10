import React from "react";
import styled from "styled-components";
import News1 from "../assets/images/pngs/news-1.png";
import News2 from "../assets/images/pngs/news-2.png";
import News3 from "../assets/images/pngs/news-3.png";
import Ai from "../assets/images/pngs/Ai.png";
import Ai2 from "../assets/images/pngs/Ai-2.png";
import News4 from "../assets/images/pngs/news-4.png";
import profilePhoto from "../assets/images/pngs/Profile-img-skills.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";
import { BiTime } from "react-icons/bi";
import Ads from "./Ads";
import WriterFooter from "../components/WriterFooter";

const LatestNews = () => {
  return (
    <LatestNewsContainer>
      <div className="featured__articles">
        <Ads />
        <h3 className="featured__h3 ">Featured Articles</h3>
        <div className="my-6">
          <h4 className="featured__h4 my-6 ">
            The Great AI Disruption: Six Startling Predictions That Will Shape
            Our Lives and Test O...
          </h4>
          <div className="featured__news_1">
            <div className="featured__news_img">
              <img src={Ai} className="" />
            </div>
            <div className="featured__news_contents">
              <div className="span__light">
                As we rapidly advance into an AI-driven world, our lives are
                becoming more intertwined with artificial..read more...
                <span className="read___more">View More</span>
              </div>
              <div className="mt-2 flex items-center">
                <BiTime className="text-gray-600 mr-2" />
                <span className="text-gray-600 font-bold text-[10px]">
                  03: 23pm
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h4 className="featured__h4 my-6 ">
            The Great AI Disruption: Six Startling Predictions That Will Shape
            Our Lives and Test O...
          </h4>
          <div className="featured__news_1">
            <div className="featured__news_img">
              <img src={Ai2} className="" />
            </div>
            <div className="featured__news_contents">
              <div className="span__light">
                But I must explain to you how all this mistaken idea of
                denouncing sure and praising pain was born and I will give you a
                complete account.
                <span className="read___more">View More</span>
              </div>
              <div className="mt-2 flex items-center">
                <BiTime className="text-gray-600 mr-2" />
                <span className="text-gray-600 font-bold text-[10px]">
                  03: 23pm
                </span>
              </div>
            </div>
          </div>
        </div>

         <div className="writer__foter">
            <WriterFooter />
            
          </div>

      </div>

      <div className="lifestyle">
        <div className="wrapper__div">
          <div className="header-box"></div>
          <div className="bold__text">Latest News</div>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="main__news">
            <img
              src={News1}
              className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
            />
            <h1 className="bold__text">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <img
                  src={profilePhoto}
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
                  <span className="text-gray-600 text-[12px]">23 Comm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main__news">
            <img
              src={News2}
              className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
            />
            <h1 className="bold__text">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <img
                  src={profilePhoto}
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
                  <span className="text-gray-600 text-[12px]">23 Comm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main__news">
            <img
              src={News3}
              className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
            />
            <h1 className="bold__text">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <img
                  src={profilePhoto}
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
                  <span className="text-gray-600 text-[12px]">23 Comm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main__news">
            <img
              src={News4}
              className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
            />
            <h1 className="bold__text">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <img
                  src={profilePhoto}
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
                  <span className="text-gray-600 text-[12px]">23 Comm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LatestNewsContainer>
  );
};

export default LatestNews;

const LatestNewsContainer = styled.div`
  display: flex;
  margin-top: 34px;
  margin-bottom: 10px;
  // justify-content: space-between;

  .featured__h3 {
    color: #008001;
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
  }

  .featured__h4 {
    color: #f06;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
  }

  .wrapper__div {
    display: flex;
    align-items: end;
    max-width: 158px;
  }
  .header-box {
    width: 11px;
    height: 29px;
    color: black;
    margin-right: 11px;
    background-color: #4caf50;
  }

  .span__light {
    font-size: 11px;
  }

  .bold__text {
    color: #000;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .main__news {
    max-width: 388px;
    // margin-right: 23px;
    margin-top: 20px;
  }

  .featured__news_1 {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 16px;
  }

  .featured__news_img {
    margin-right: 10px;
    width: 310px;
    height: 109px;
    img {
      width: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  }

  .news__img {
    width: 330px;
    height: 127px;
    margin-right: 9px;
  }

  .lifestyle {
    max-width: 800px;
  }

  .featured__articles {
    max-width: 400px;
    .custom__style {
      width: 363px;
      height: 252px;
      margin-bottom: 40px;
    }
  }

  .featured__news_contents {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .read___more {
    color: #0081a7;
    font-size: 8px;
    font-style: italic;
  }

  .writer__foter {
    .custom__style {
      width: 363px;
      height: 95px;
    }
  }
`;
