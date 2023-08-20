import React from "react";
// import styled from "styled-components";

// import Navbar from "../../components/Navbar";
import AdsSecond from "../../components/Ads2";
import Header from "../../components/Header";
import profilePhoto from "../../assets/images/pngs/Profile-img-skills.png";
import Lifestyle from "../../assets/images/pngs/profile-news.png";

import { PiHandsClappingThin } from "react-icons/pi";
import { FiShare } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { BsSave } from "react-icons/bs";

import "../../index.css";
import "../../pages/blogDetails/blogDetails.css";

const BlogDetails = () => {
  return (
    <div className="blog__container">
      {/* <BlogDetailsContainer> */}
      {/* <Navbar /> */}
      <Header />
      <div>
      <div className="custom__width">
        <div className="ads__body">
          <div className="ads__second">
            <AdsSecond />
          </div>
        </div>
        <h1>
          Hey haole! If you’ve taken a trip to Maui, you need to give back
        </h1>

        <div className="writers__stats">
          <div className="writers__stats__container">
            <div className="img__and__details__container">
              <div className="img__and__details">
                <div>
                   <div className="profile__comments">
                    <div className="profile__photo">

                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className=""
                      />
                      </div>
                    <div>
                      <p className="text-[12px] text-gray-800">John Doe</p>
                      <p className="text-gray-600 text-sm"></p>
                    </div>
              
                </div>
                </div>
              </div>
              <div className="img__and__details__2">
                <div className="icons__flex">
                  <div className="reaction">
                    <PiHandsClappingThin className="writer__icons" />
                    <span>4.5k</span>
                  </div>
                  <div className="reaction">
                  <AiOutlineComment className="writer__icons" />
                  <span>65</span>
                  </div>
                </div>
                <div className="downloads">
                  <BsSave className="writer__icons" />
                  <FiShare className="writer__icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="blog__post--picture">

        <div className="main__news__img">
            <img
              src={Lifestyle}
              className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
              />
          </div>
              </div>
      </div>
      </div>
      {/* </BlogDetailsContainer> */}
    </div>
  );
};

export default BlogDetails;

// const BlogDetailsContainer = styled.div`

// `;
