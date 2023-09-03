import React from "react";
import styled from "styled-components";
import Lifestyle from "../assets/images/pngs/lifestyle.png";
import Lifestyle1 from "../assets/images/pngs/lifestyle-1.png";
import Lifestyle2 from "../assets/images/pngs/lifestyle-2.png";
import Lifestyle3 from "../assets/images/pngs/lifestyle-3.png";
import Lifestyle4 from "../assets/images/pngs/lifestyle-4.png";
import Lifestyle5 from "../assets/images/pngs/lifestyle-5.png";
import Lifestyle6 from "../assets/images/pngs/lifestyle-6.png";
import Technology from "../assets/images/pngs/technology-img.png";
import Technology1 from "../assets/images/pngs/tech-1.png";
import Technology2 from "../assets/images/pngs/tech-2.png";
import Sport from "../assets/images/pngs/sport-img.png";
import profilePhoto from "../assets/images/pngs/Profile-img-skills.png";
import profilePhoto1 from "../assets/images/pngs/Profile-img.png";
import profilePhoto3 from "../assets/images/profile-image.jfif";
import profilePhoto2 from "../assets/images/pngs/Profile-img-2.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";
import { Link } from "react-router-dom";
import "./mediaQueries.css"
const BlogCategory = () => {
  return (
    <BlogCategoryContainer>
      <div className="blog__category__container">
        <div className="lifestyle">
          <div className="wrapper__div">
            <div className="header-box"></div>
            <div className="bold__text">Lifestyle</div>
          </div>
          <div className="main__news">
            <Link to="/details">
              <img
                src={Lifestyle}
                className="align-middle opp  object-cover transition duration-300 ease-linear mb-5"
              />
            </Link>
            <h1 className="bold__text">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <Link to="/writers-profile">


                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </Link>
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
          <div className="featured__news">
            <div className="featured__news_1">
              <Link to="/details">
                <div className="featured__news_img">
                  <img src={Lifestyle2} className="pet" />
                </div>
              </Link>
              <div className="featured__news_contents">
                <p className="bold__text">
                  Mystify Winner Is Retired Because of wealth's Beds...
                </p>
                <div className="mt-5 mb-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Link to="/writers-profile">
                        <img
                          src={profilePhoto}
                          alt="Profile"
                          className="w-10 h-10 mr-5 rounded-full"
                        />
                      </Link>
                      <p className="text-[12px] text-gray-800">John Doe</p>
                    </div>
                    {/* <p className="mt-2 text-gray-700"></p> */}

                    <div className="mt-2 flex items-center">
                      <LiaComments className="text-gray-600 mr-2" />
                      <span className="text-gray-600 text-[12px]">
                        23 Com..
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center">
                    <AiOutlineCalendar className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[10px]">
                      12th, May 2023 - 03: 23pm
                    </span>
                  </div>
                </div>
                <div className="span__light">
                  But I must explain to you how all this mistaken idea of
                  denouncing sure and praising pain was born and I will give you
                  a complete account.
                </div>
              </div>
            </div>
            <div className="featured__news_1">
              <Link to="/details">
                <div className="featured__news_img">
                  <img src={Lifestyle3} className="pet" />
                </div>
              </Link>
              <div className="featured__news_contents">
                <p className="bold__text">
                  Mystify Winner Is Retired Because of wealth's Beds...
                </p>
                <div className="mt-5 mb-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Link to="/writers-profile">
                        <img
                          src={profilePhoto1}
                          alt="Profile"
                          className="w-10 h-10 mr-5 rounded-full"
                        />
                      </Link>
                      <p className="text-[12px] text-gray-800">John Doe</p>
                    </div>
                    {/* <p className="mt-2 text-gray-700"></p> */}

                    <div className="mt-2 flex items-center">
                      <LiaComments className="text-gray-600 mr-2" />
                      <span className="text-gray-600 text-[12px]">
                        23 Com..
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center">
                    <AiOutlineCalendar className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[10px]">
                      12th, May 2023 - 03: 23pm
                    </span>
                  </div>
                </div>
                <div className="span__light">
                  But I must explain to you how all this mistaken idea of
                  denouncing sure and praising pain was born and I will give you
                  a complete account.
                </div>
              </div>
            </div>
            <div className="featured__news_1">
              <div className="featured__news_img">
                <img src={Lifestyle3} className="pet" />
              </div>
              <div className="featured__news_contents">
                <p className="bold__text">
                  Mystify Winner Is Retired Because of wealth's Beds...
                </p>
                <div className="mt-5 mb-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={profilePhoto}
                        alt="Profile"
                        className="w-10 h-10 mr-5 rounded-full"
                      />
                      <p className="text-[12px] text-gray-800">John Doe</p>
                    </div>
                    {/* <p className="mt-2 text-gray-700"></p> */}

                    <div className="mt-2 flex items-center">
                      <LiaComments className="text-gray-600 mr-2" />
                      <span className="text-gray-600 text-[12px]">
                        23 Comments
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center">
                    <AiOutlineCalendar className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[10px]">
                      12th, May 2023 - 03: 23pm
                    </span>
                  </div>
                </div>
                <div className="span__light">
                  But I must explain to you how all this mistaken idea of
                  denouncing sure and praising pain was born and I will give you
                  a complete account.
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
            <Link to="/writers-profile">


              <img
                src={Sport}
                className="align-middle opp object-cover transition duration-300 ease-linear mb-5"
              />
            </Link>
            <h1 className="bold__text">
              Who is next football Super Hero. Check the future star
            </h1>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <Link to="/writers-profile">


                  <img
                    src={profilePhoto3}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </Link>
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
          <div className="featured__news">
            <div className="featured__news_1">
              <div className="featured__news_img">
                <img src={Lifestyle5} className="pet" />
              </div>
              <div className="featured__news_contents">
                <p className="bold__text">
                  Mystify Winner Is Retired Because of wealth's Beds...
                </p>
                <div className="mt-5 mb-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={profilePhoto2}
                        alt="Profile"
                        className="w-10 h-10 mr-5 rounded-full"
                      />
                      <p className="text-[12px] text-gray-800">John Doe</p>
                    </div>
                    {/* <p className="mt-2 text-gray-700"></p> */}

                    <div className="mt-2 flex items-center">
                      <LiaComments className="text-gray-600 mr-2" />
                      <span className="text-gray-600 text-[12px]">
                        23 Comments
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center">
                    <AiOutlineCalendar className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[10px]">
                      12th, May 2023 - 03: 23pm
                    </span>
                  </div>
                </div>
                <div className="span__light">
                  But I must explain to you how all this mistaken idea of
                  denouncing sure and praising pain was born and I will give you
                  a complete account.
                </div>
              </div>
            </div>
            <div className="featured__news_1">
              <div className="featured__news_img">
                <img src={Lifestyle6} className="pet" />
              </div>
              <div className="featured__news_contents">
                <p className="bold__text">
                  Mystify Winner Is Retired Because of wealth's Beds...
                </p>
                <div className="mt-5 mb-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={profilePhoto}
                        alt="Profile"
                        className="w-10 h-10 mr-5 rounded-full"
                      />
                      <p className="text-[12px] text-gray-800">John Doe</p>
                    </div>
                    {/* <p className="mt-2 text-gray-700"></p> */}

                    <div className="mt-2 flex items-center">
                      <LiaComments className="text-gray-600 mr-2" />
                      <span className="text-gray-600 text-[12px]">
                        23 Comments
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center">
                    <AiOutlineCalendar className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[10px]">
                      12th, May 2023 - 03: 23pm
                    </span>
                  </div>
                </div>
                <div className="span__light">
                  But I must explain to you how all this mistaken idea of
                  denouncing sure and praising pain was born and I will give you
                  a complete account.
                </div>
              </div>
            </div>
            <div className="featured__news_1">
              <div className="featured__news_img">
                <img src={Lifestyle4} className="pet" />
              </div>
              <div className="featured__news_contents">
                <p className="bold__text">
                  Mystify Winner Is Retired Because of wealth's Beds...
                </p>
                <div className="mt-5 mb-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={profilePhoto1}
                        alt="Profile"
                        className="w-10 h-10 mr-5 rounded-full"
                      />
                      <p className="text-[12px] text-gray-800">John Doe</p>
                    </div>
                    {/* <p className="mt-2 text-gray-700"></p> */}

                    <div className="mt-2 flex items-center">
                      <LiaComments className="text-gray-600 mr-2" />
                      <span className="text-gray-600 text-[12px]">
                        23 Comments
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center">
                    <AiOutlineCalendar className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[10px]">
                      12th, May 2023 - 03: 23pm
                    </span>
                  </div>
                </div>
                <div className="span__light">
                  But I must explain to you how all this mistaken idea of
                  denouncing sure and praising pain was born and I will give you
                  a complete account.
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
              className="align-middle opp object-cover transition duration-300 ease-linear mb-5"
            />
            <h1 className="bold__text">
              Who is next football Super Hero. Check the future star
            </h1>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <img
                  src={profilePhoto3}
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
                  <span className="text-gray-600 text-[12px]">23 Com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="featured__news">
            <div className="featured__news_1">
              <div className="featured__news_img">
                <img src={Technology1} className="pet" />
              </div>
              <div className="featured__news_contents">
                <p className="bold__text">
                  Mystify Winner Is Retired Because of wealth's Beds...
                </p>
                <div className="mt-5 mb-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={profilePhoto2}
                        alt="Profile"
                        className="w-10 h-10 mr-5 rounded-full"
                      />
                      <p className="text-[12px] text-gray-800">John Doe</p>
                    </div>
                    {/* <p className="mt-2 text-gray-700"></p> */}

                    <div className="mt-2 flex items-center">
                      <LiaComments className="text-gray-600 mr-2" />
                      <span className="text-gray-600 text-[12px]">
                        23 Comments
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center">
                    <AiOutlineCalendar className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[10px]">
                      12th, May 2023 - 03: 23pm
                    </span>
                  </div>
                </div>
                <div className="span__light">
                  But I must explain to you how all this mistaken idea of
                  denouncing sure and praising pain was born and I will give you
                  a complete account.
                </div>
              </div>
            </div>
            <div className="featured__news_1">
              <div className="featured__news_img">
                <img src={Lifestyle1} className="pet" />
              </div>
              <div className="featured__news_contents">
                <p className="bold__text">
                  Mystify Winner Is Retired Because of wealth's Beds...
                </p>
                <div className="mt-5 mb-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={profilePhoto3}
                        alt="Profile"
                        className="w-10 h-10 mr-5 rounded-full"
                      />
                      <p className="text-[12px] text-gray-800">John Doe</p>
                    </div>
                    {/* <p className="mt-2 text-gray-700"></p> */}

                    <div className="mt-2 flex items-center">
                      <LiaComments className="text-gray-600 mr-2" />
                      <span className="text-gray-600 text-[12px]">
                        23 Comments
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center">
                    <AiOutlineCalendar className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[10px]">
                      12th, May 2023 - 03: 23pm
                    </span>
                  </div>
                </div>
                <div className="span__light">
                  But I must explain to you how all this mistaken idea of
                  denouncing sure and praising pain was born and I will give you
                  a complete account.
                </div>
              </div>
            </div>
            <div className="featured__news_1">
              <div className="featured__news_img">
                <img src={Technology2} className="pet" />
              </div>
              <div className="featured__news_contents">
                <p className="bold__text">
                  Mystify Winner Is Retired Because of wealth's Beds...
                </p>
                <div className="mt-5 mb-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={profilePhoto3}
                        alt="Profile"
                        className="w-10 h-10 mr-5 rounded-full"
                      />
                      <p className="text-[12px] text-gray-800">John Doe</p>
                    </div>
                    {/* <p className="mt-2 text-gray-700"></p> */}

                    <div className="mt-2 flex items-center">
                      <LiaComments className="text-gray-600 mr-2" />
                      <span className="text-gray-600 text-[12px]">
                        23 Comments
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center">
                    <AiOutlineCalendar className="text-gray-600 mr-2" />
                    <span className="text-gray-600 text-[10px]">
                      12th, May 2023 - 03: 23pm
                    </span>
                  </div>
                </div>
                <div className="span__light">
                  But I must explain to you how all this mistaken idea of
                  denouncing sure and praising pain was born and I will give you
                  a complete account.
                </div>
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
  .blog__category__container {
    max-width: 120rem;
    display: flex;
    margin: 80px 0;
    justify-content: space-between;
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

  

  .featured__news_1 {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin-bottom: 16px;
  }

  .featured__news {
    margin-right: 23px;
  }

  .featured__news_img {
    margin-right: 10px;
    
  }

  .news__img {
    width: 330px;
    height: 127px;
    margin-right: 9px;
  }

  

  // .lifestyle {
  //   display: flex;
  //   flex-wrap: wrap; /* Allow cards to wrap to the next line */
  //   justify-content: space-between; /* Distribute cards evenly across the row */
  // }

  // /* Adjust card width based on screen size */
  // .main__news,
  // .featured__news {
  //   flex: 0 0 calc(50% - 12px); /* Initially 2 cards per row on screens above 768px */
  //   margin-bottom: 20px; /* Space between rows */
  // }

`;
