import React from "react";
// import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Ads from "../../components/Ads";
import Tabs from "../../components/Tabs";
import Feeds1 from "../../assets/images/pngs/feeds1.png";
import AdsSecond from "../../components/Ads2";
import Feeds from "../../components/Feeds";
import Filter from "../../components/Filter";
import TrendyNews from "../../components/TrendyNews";
import Writers from "../../components/Writers";
import BlogCategory from "../../components/BlogCategory";
import LatestNews from "../../components/LatestNews";
import { BiTime } from "react-icons/bi";

import '../../index.css'
import Header from "../../components/Header";

const Writer = () => {
  return (
    <WriterContainer>
      <div className="index__page">
        {/* <Navbar /> */}
        <Header />
        <div className="custom__alignment">
          <div className=" custom__width ">
            {/* <div className="writers-body flex justify-between text-center items-center h-[90px] mt-[33px] mb-[33px] "> */}
            <div className="writers-body">
              <div
                style={{ clipPath: "polygon(0 0, 78% 0, 100% 100%, 0% 100%)" }}
                className=" polygon__button"
              >
                <span className="span__white">Top News</span>
              </div>
              <div className="span__style">
                <span>Traveling with kids can be rough. Parents ......</span>
              </div>
              <div className="ads__first">
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

            <div className="ads__second__">
              <div className="ads__second__1">
                <AdsSecond />
              </div>
              <div className="recommended__sidebar">
                <div className="custom__style bg-[#D9D9D9] w-[728px] h-[90px] flex flex-wrap justify-center items-center">
                  <div className="categories">
                    <h4>Recommended</h4>
                  </div>
                  <div className="recommended__news_1">
                    <div className="recommended__news_img">
                      <img src={Feeds1} className="news__img" />
                    </div>
                    <div className="recommended__news_contents">
                      <p className="bold__text">
                        Five things to know about EFCC acting chairman
                      </p>
                      <p className="normal__text">
                        The organisers of Felabration have announced that
                        this....
                      </p>
                      <div className="mt-2 flex items-center">
                        <BiTime className="text-gray-600 mr-2" />
                        <span className="text-gray-600 font-bold text-[10px]">
                          03: 23pm
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="recommended__news_1">
                    <div className="recommended__news_img">
                      <img src={Feeds1} className="news__img" />
                    </div>
                    <div className="recommended__news_contents">
                      <p className="bold__text">
                        Al Pacino, 83, welcomes son..
                      </p>
                      <p className="normal__text">
                        Hollywood icon Al Pacino has become a dad again. The S..
                      </p>
                      <div className="mt-2 flex items-center">
                        <BiTime className="text-gray-600 mr-2" />
                        <span className="text-gray-600 font-bold text-[10px]">
                          06: 13pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="categories__sidebar ">
                  <div className="custom__style bg-[#D9D9D9] w-[728px] h-[90px] flex flex-wrap justify-center items-center"></div>
                </div> */}
              </div>
            </div>
            <Writers />
            <BlogCategory />
            <LatestNews />
          </div>
        </div>
      </div>
    </WriterContainer>
  );
};

export default Writer;

const WriterContainer = styled.div`
  margin-bottom: 80px;

  .custom__width {
    max-width: 120rem;
    height: 100%;
    padding: 0 2.8rem;
  }

  .writers-body {
    display: flex;
    justify-content: space-between;
    text-align: center;
    height: 90px;
    margin-top: 33px;
    margin-bottom: 33px;
    // flex justify-between text-center items-center h-[90px] mt-[33px] mb-[33px]
  }

  .polygon__button {
    width: 145px;
    height: 44px;
    background-color: #4CAF50;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .span__white {
    color: white;
  }

  .custom__alignment {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .index__page {
    position: relative;
  }

  .sidebar {
    position: absolute;
    top: 999px;
    right: 9%;
    width: 229px;
  }

  .ads__first {
    width: 728px;
height: 90px;
    .custom__style {
      width: 100%;
    }
  }

  .ads__second {
    width: 920px;
    display: flex;
    justify-content: space-between;
    .custom__style {
      width: 100%;
      // margin-bottom: 30px;
    }
  }

  .ads__second__ {
    position: relative;
    max-width: 1235px;
  }

  .ads__second__1 {
    max-width: 920px;
    display: flex;
    justify-content: space-between;
    .custom__style {
      width: 100%;
    }
  }

  .recommended__sidebar {
    max-width: 279px;
    position: absolute;
    right: 0;
    // right: 31px;
    top: 0px;
    .custom__style {
      width: 100%;
      height: 282px;
      margin-bottom: 30px;
    }
  }

  .span__style {
    font-size: 13px;
    font-weight: 500;
    color: #000;
    width: 362px;
    height: 20px;
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

  .recommended__news_1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .recommended__news_img {
    margin-right: 23px;
    max-width: 58px;
    height: 55px;
  }

  .news__img {
    border-radius: 10px;
    width: 100%;
    object-fit: cover;
  }

  .recommended__news_contents {
    width: 141px;
  }

  .bold__text {
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
  }

  .normal__text {
    font-size: 9.23px;
    margin: 5px 0;
  }
`;
