import React from "react";
import styled from "styled-components";
import ProfileWriter from "../assets/images/pngs/Profile-img-writer.png";
import Feeds1 from "../assets/images/pngs/feeds1.png";

import Ads from "./Ads";

const Profile = () => {
  return (
    <ProfileContainer>
      <div className="profile__container__1">
        <div className="profile__container">
          <div className="profile__news_img">
            <img src={ProfileWriter} className="profile__img" />
          </div>
        </div>
        <div className="writers__container"></div>
      </div>
      <div className="ads__sidebar">
        <div className="wrapper__div">
          <div className="header-box"></div>
          <div className="bold__text">Most Popular News</div>
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
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  //   max-width: 1235px;
  margin-top: 34px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: flex-end;

  .profile__container {
    display: flex;
    height: 40px;
    margin-top: 15px;
    margin-bottom: 10px;
    justify-content: space-between;
  }

  .profile__container__1 {
    display: flex;
    width: 931px;
    height: 190px;
  }

  .view__all {
    margin-right: 10px;
  }

  .ads__sidebar {
    height: 217px;
    width: 343px;
    .custom__style {
      width: 100%;
      height: 155px;
      margin-top: 59px;
    }
  }

  .bold__text {
    color: #000;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .wrapper__div {
    display: flex;
    align-items: end;
    max-width: 209px;
    margin-bottom: 20px;
  }
  .header-box {
    width: 11px;
    height: 29px;
    color: black;
    margin-right: 11px;
    background-color: #4caf50;
  }

  .featured__news_1 {
    display: flex;
    // align-items: center;
    justify-content: space-between;
  }

  .featured__news_img {
    width: 118px;
    height: 92px;
    margin-right: 23px;
  }

  .profile__news_img {
    width: 181px;
    height: 181px;
  }

  .profile__img {
    border-radius: 20px;
  }

  .writers__container {
    width: 635px;
    border: 1px solid black;
    height: 190px;
    margin-left: 40px;
  }

  .featured__news_contents {
    .bold__text {
      color: #000;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 15px;
    }
  }
`;
