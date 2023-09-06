import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Tabs from "../../components/Tabs";
import AdsSecond from "../../components/Ads2";
import Profile from "../../components/Profile";
import SubHeader from "../../components/SubHeader";
import '../../pages/blogHome/main.css'
import { Link } from "react-router-dom";


const WritersProfile = () => {


  useEffect(() => {
    // This code will run after the component has rendered
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <WritersProfileContainer>
    <div className="blog__container">

      <SubHeader />
      <div className="section__container">
        <div className=" custom__width h-full mt-[33px] mb-[33px] ">
          <div className="flex justify-between items-end">
            <div>
              <Link to="/editor">

              <button className="add__post ">
                Add Post
              </button>
              </Link>
            </div>
            <div className="ads__box--xl" style={{width: '60%', height: '12rem'}}>&nbsp;</div>
          </div>
          <div className="">
            <Tabs />
          </div>
          <Profile />
        </div>
      </div>
      </div>
    </WritersProfileContainer>
  );
};

export default WritersProfile;

const WritersProfileContainer = styled.div`
  .custom__alignment {
    display: flex;
    align-items: center;
    justify-content: center;
      .custom__width {
        max-width: 160rem;
        padding: 46px;
      }
  }

  .ads__second {
    width: 728px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    background-color: #d9d9d9d9;
    .custom__style {
      width: 100%;
      height: 100%;
    }
  }

  .blog__container {
    .header {
      background-color: #008001;
      max-width: 100%;
      color: #fff;
    }
  }

  .custom__tabs {
    padding: 10px;
    .custom__style {
      .custom__tab__bg {
        background: #4caf50;
      }
    }
  }

  .add__post {
    width: 166px;
    height: 40px;
    background-color: #F06;
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    border-radius: 6px;
    padding: 21px;
    padding-left: 26px;
    padding-right: 20px;
  }
`;
