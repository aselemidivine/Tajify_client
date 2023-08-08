import React from "react";
import styled from "styled-components";
import Feeds1 from "../assets/images/pngs/feeds1.png";

const TrendyNews = () => {
  return (
    <TrendyContainer>
      <div className="trendy__container">

      <div className="main__news">
        <img
          src={Feeds1}
          className="align-middle w-full object-cover transition duration-300 ease-linear"
          />
        <h1 className="bold__text">
          The Radical Strategy Behind Trump’s Promise to ‘Go After’.....
        </h1>
        <p>
          When Donald Trump responded to his latest indictment by promising to
          appoint a special prosecutor if he’s reelected to “go after” President
          Joe Biden and his family, he signaled that a second......{" "}
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
          </div>
          <div className="text-center flex justify-center mt-5 mb-10">

      <button className="read__more">View More</button>
          </div>
    </TrendyContainer>
  );
};

export default TrendyNews;

const TrendyContainer = styled.div`
 
  max-width: 1000px;
  padding: 20px;

  .trendy__container {
    display: flex;
    justify-content: space-between;
  }

  .bold__text {
    color: #000;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .read__more {
    color: #0081a7;
    font-family: Montserrat;
    font-size: 15px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
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
`;
