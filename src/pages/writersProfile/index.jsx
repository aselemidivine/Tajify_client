import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Tabs from "../../components/Tabs";
import AdsSecond from "../../components/Ads2";
import Profile from "../../components/Profile";

const WritersProfile = () => {
  return (
    <WritersProfileContainer>
      <Navbar />
      <div className="custom__alignment">
        <div className=" custom__width h-full mt-[33px] mb-[33px] ">
          <div className="flex justify-between items-end">
            <div>
              <button className="w-[166px] h-[40px] bg-[#F06] text-center text-white flex items-center cursor-pointer justify-center rounded-lg p-21 px-78">
                Add Post
              </button>
            </div>
            <div className="ads__second">
              <AdsSecond />
            </div>
          </div>
          <div className="custom__tabs">
            <Tabs />
          </div>
          <Profile />
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
  }

  .ads__second {
    width: 920px;
    display: flex;
    justify-content: space-between;
    .custom__style {
      width: 100%;
    }
  }

  .custom__tabs {
    .custom__style {
      .custom__tab__bg {
        background: #4caf50;
      }
    }
  }
`;
