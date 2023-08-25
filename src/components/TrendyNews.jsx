import React from "react";
import styled from "styled-components";
import Feeds1 from "../assets/images/pngs/feeds1.png";
import Ads from "./Ads";
import Ai from "../assets/images/pngs/Ai.png";
import { BsChevronRight } from "react-icons/bs";

const TrendyNews = () => {
  return (
    <TrendyContainer>
      <div className="trendy__container">
        <div className="main__news">
          <div className="trendy__img">
            <img
              src={Feeds1}
              className="align-middle object-cover transition duration-300 ease-linear"
            />
          </div>
          <h1 className="bold__text">
            The Radical Strategy Behind Trump’s Promise to ‘Go After’.....
          </h1>
          <p>
            When Donald Trump responded to his latest indictment by promising to
            appoint a special prosecutor if he’s reelected to “go after”
            President Joe Biden and his family, he signaled that a second......{" "}
            <span className="read__more">Read more</span>
          </p>
        </div>
        <div className="featured__news">
          <div className="featured__news_1">
            <div className="featured__news_img">
              <img src={Feeds1} className="news__img" />
            </div>
            <div className="featured__news_contents">
              <p className="bold__text">
                Five things to know about EFCC acting chairman
              </p>
              <div className="span__light">1 hour ago</div>
            </div>
          </div>
          <div className="featured__news_1">
            <div className="featured__news_img">
              <img src={Feeds1} className="news__img" />
            </div>
            <div className="featured__news_contents">
              <p className="bold__text">
                Five things to know about EFCC acting chairman
              </p>
              <div className="span__light">1 hour ago</div>
            </div>
          </div>
          <div className="featured__news_1">
            <div className="featured__news_img">
              <img src={Feeds1} className="news__img" />
            </div>
            <div className="featured__news_contents">
              <p className="bold__text">
                Five things to know about EFCC acting chairman
              </p>
              <div className="span__light">1 hour ago</div>
            </div>
          </div>
          <div className="featured__news_1">
            <div className="featured__news_img">
              <img src={Feeds1} className="news__img" />
            </div>
            <div className="featured__news_contents">
              <p className="bold__text">
                Five things to know about EFCC acting chairman
              </p>
              <div className="span__light">1 hour ago</div>
            </div>
          </div>
          <div className="featured__news_1">
            <div className="featured__news_img">
              <img src={Feeds1} className="news__img" />
            </div>
            <div className="featured__news_contents">
              <p className="bold__text">
                Five things to know about EFCC acting chairman
              </p>
              <div className="span__light">1 hour ago</div>
            </div>
          </div>
        </div>

        <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center flex justify-center mt-5 mb-10">
        <button className="read___more">View More</button>
      </div>
    </TrendyContainer>
  );
};

export default TrendyNews;

const TrendyContainer = styled.div`

.trendy__container {
    max-width: 1248px;
    display: flex;
    justify-content: space-between;
  }

  .categories__sidebar {
    .custom__style {
      width: 100%;
      height: 358px;
      margin-bottom: 30px;
      padding: 23px;
    }
  }

  .bold__text {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .read___more {
    color: #0081a7;
    font-size: 8px;
    font-style: italic;
    font-weight: 400;
  }

  .featured__news_1 {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  .featured__news_img {
    margin-right: 23px;
  }

  .featured__news_contents {
    p {
      margin-bottom: 33px;
    }
  }

  .main__news {
    max-width: 447px;
    margin-right: 23px;
    p {
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
    }
  }

  .__h1 {
    font-size: 25px;
  }

  .news__img {
    width: 118px;
    height: 92px;
    border-radius: 10px;
  }

  .span__light {
    margin-top: 20px;
    color: #464646;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
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

  .ads__sidebar {
    height: 244px;
    margin-bottom: 20px;
    background: #d9d9d9;
    .custom__style {
      width: 100%;
      height: 244px;
      margin-bottom: 30px;
    }
  }

  .trendy__img {
    // width: 477px;
    height: 294px;
        margin-bottom: 26px;
      .align-middle {
        height: 100%;
        object-fit: cover;
      }
  }

  .ads__sidebar__1 {
    .custom__style {
      width: 100%;
      height: 169px;
    }
  }
`;
