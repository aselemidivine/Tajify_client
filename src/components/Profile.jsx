import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileWriter from "../assets/images/pngs/Profile-img-writer.png";
import Feeds1 from "../assets/images/pngs/feeds1.png";
import News1 from "../assets/images/pngs/news-1.png";
import News2 from "../assets/images/pngs/news-2.png";
import News3 from "../assets/images/pngs/news-3.png";
import News4 from "../assets/images/pngs/news-4.png";
import News7 from "../assets/images/pngs/italy.png";

import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import axios from "axios";

import Lifestyle from "../assets/images/pngs/profile-news.png";
import ProfileNews2 from "../assets/images/pngs/profile-news-2.png";
import profilePhoto from "../assets/images/pngs/Profile-img-skills.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";
import Ads from "./Ads";
import WriterFooter from "./WriterFooter";
import { useAuthContext } from "../context/AuthContext";
import AdsSecond from "./Ads2";
import { useParams } from "react-router-dom";

// const ShareButton = ({ postUrl }) => {
//   const handleCopyClick = () => {
//     // Copy the post's URL to the clipboard
//     navigator.clipboard.writeText(postUrl);
//     alert("Copied to clipboard!");
//   };

//   return (
//     <div>
//       <button onClick={handleCopyClick}>Copy Link</button>
//     </div>
//   );
// };

// export default ShareButton;

const Profile = () => {
  const { id } = useParams(); // This retrieves the ID from the URL parameter
  const { user, token } = useAuthContext();
  const [error, setError] = useState(null);
  const [creator, setCreator] = useState([]);

  const [isFollowing, setIsFollowing] = useState(false);

  // Define the handleFollowClick function outside of useEffect
  const handleFollowClick = async () => {
    try {
      if (!id) {
        // Handle the case where id is not defined
        console.error("User ID is not defined");
        return;
      }
      const response = await axios.post(
        `http://localhost:3005/api/users/${id}/request-follow`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setIsFollowing(!isFollowing);
      }
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  // useEffect(() => {
  //   // Fetch the list of creators from your API
  //   fetch(`http://localhost:3005/api/users/${id}`)
  //     // .then((response) => {
  //     //   if (!response.ok) {
  //     //     throw new Error("Network response was not ok");
  //     //   }
  //     //   return response.json();
  //     // })
  //     .then((data) => {
  //       console.log(data);
  //       const users = data.users;
  //       setCreator(users);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       console.log(error.message);
  //       console.error("Error fetching creators:", error);
  //     });
  // }, []);

  const fetchData = async () => {
    try {
        const response = await axios.get(`http://localhost:3005/api/users/${id}`);

      if (response.data.data.user) {
        // Handle the fetched data and set it in state
        // setPosts(response.data);
        console.log(response);
        setCreator(response.data.data.user);
      } else {
        console.error("Error fetching user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, user, token]);

  return (
    // <div>
    //     <div>
    //       <h3>{creator.fullname}</h3>
    //     </div>
    // </div>
      <ProfileContainer>
      <div className="profile"  >
        <div className="profile__container__1">
          <div className="profile__container" >
            <div className="profile__news_img">
              <img src={ProfileWriter} className="profile__img" />
            </div>
          </div>

          <div className="writers__container">
            <div className="profile__socials">
              <div>
                {/* <h3>{creators.fullname}</h3> */}
                <h3>{creator.username}</h3>
                <ul className="socials__icons">
                  <li>
                    <a href="#" className="social__icon--link">
                      <AiOutlineInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social__icon--link">
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social__icon--link">
                      <AiFillTwitterSquare />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social__icon--link">
                      <BsPinterest />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={handleFollowClick}
                  className="w-[166px] h-[40px] bg-[#F06] text-center text-white flex items-center cursor-pointer justify-center rounded-lg p-21 px-78"
                >
                  {isFollowing ? "Unfollow" : "Follow"}
                </button>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              omnis tempora in quod ratione eum tenetur nihil, dolorum dolor
              harum quis voluptatum hic nam, blanditiis architecto, possimus
              optio voluptatibus laborum?
            </p>
          </div>
        </div>
        <div className="main__news">
          <div className="main__news__img">
            <img
              src={Lifestyle}
              className="align-middle object-cover transition duration-300 ease-linear mb-5"
            />
          </div>
          <div className="p-4 ">
            <h1 className="bold__text__pink">
              Trump administration officials, have used veto power over other
              companies, forcing them to buy their products instead of .
            </h1>
            <div className="flex r-profile-container profile__comments items-center justify-between">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="r-profile">
                <p className="text-[12px] text-gray-800">John Doe</p>
                <p className="text-gray-600 text-sm"></p>
              </div>
              <p className="mr-profile"></p>
              <div className="mt-2 flex items-center">
                <AiOutlineCalendar className="text-gray-600 mr-2" />
                <span className="text-gray-600 text-[12px]">
                  12th, May 2023 - 03: 23pm
                </span>
              </div>
              <div className="r-profile">
                <LiaComments className="text-gray-600 mr-2" />
                <span className="text-gray-600 text-[12px]">23 Comm</span>
              </div>
            </div>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              sure and praising Group continues to sell and market memberships
              to Premier country club despite. pain was born and I will give you
              a complete account. But I must explain to you how all this
              mistaken idea of denouncing sure and praising Group continues to
              sell and market memberships to Premier country club despite. pain
              was born and I will give you a complete account. read more...
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-16">
          <div className="main__news__1">
            <div className="img__container">
              <img src={News1} className="align-middle " />
            </div>
            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
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
          <div className="main__news__1">
            <div className="img__container">
              <img
                src={News2}
                className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
              />
            </div>
            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
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
          <div className="main__news__1">
            <div className="img__container">
              <img
                src={News3}
                className="align-middle object-cover transition duration-300 ease-linear mb-5"
              />
            </div>
            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
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
          <div className="main__news__1">
            <div className="img__container">
              <img
                src={News4}
                className="align-middle object-cover transition duration-300 ease-linear mb-5"
              />
            </div>
            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
              <div className="flex r-profile-container items-center justify-between">
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div className="r-profile">
                  <p className="text-[12px] text-gray-800">John Doe</p>
                  <p className="text-gray-600 text-sm"></p>
                </div>
                <p className="r-profile"></p>
                <div className="mt-2 flex items-center">
                  <AiOutlineCalendar className="text-gray-600 mr-2" />
                  <span className="text-gray-600 text-[12px]">
                    12th, May 2023 - 03: 23pm
                  </span>
                </div>
                <div className="r-profile">
                  <LiaComments className="text-gray-600 mr-2" />
                  <span className="text-gray-600 text-[12px]">23 Comm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__news">
          <div className="main__news__img">
            <img
              src={ProfileNews2}
              className="align-middle object-cover transition duration-300 ease-linear mb-5"
            />
          </div>
          <div className="p-4 ">
            <h1 className="bold__text__pink">
              Trump administration officials, have used veto power over other
              companies, forcing them to buy their products instead of .
            </h1>
            <div className="flex r-profile-container profile__comments items-center justify-between">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="r-profile">
                <p className="text-[12px] text-gray-800">John Doe</p>
                <p className="text-gray-600 text-sm"></p>
              </div>
              <p className="mt-2 text-gray-700"></p>
              <div className="r-profile">
                <AiOutlineCalendar className="text-gray-600 mr-2" />
                <span className="text-gray-600 text-[12px]">
                  12th, May 2023 - 03: 23pm
                </span>
              </div>
              <div className="r-profile">
                <LiaComments className="text-gray-600 mr-2" />
                <span className="text-gray-600 text-[12px]">23 Comm</span>
              </div>
            </div>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              sure and praising Group continues to sell and market memberships
              to Premier country club despite. pain was born and I will give you
              a complete account. But I must explain to you how all this
              mistaken idea of denouncing sure and praising Group continues to
              sell and market memberships to Premier country club despite. pain
              was born and I will give you a complete account. read more...
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-16">
          <div className="main__news__1">
            <div className="img__container">
              <img
                src={News3}
                className="align-middle object-cover transition duration-300 ease-linear mb-5"
              />
            </div>
            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
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
          <div className="main__news__1">
            <div className="img__container">
              <img
                src={News2}
                className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
              />
            </div>
            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
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
          <div className="main__news__1">
            <div className="img__container">
              <img
                src={News3}
                className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
              />
            </div>
            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
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
          <div className="main__news__1">
            <div className="img__container">
              <img
                src={News4}
                className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
              />
            </div>
            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
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
        <div className="ads__box--xl" style={{width: '100%', height: '12rem', margin: '1.4rem 0'}}>&nbsp;</div>

        <div className="flex flex-wrap gap-16">
          <div className="main__news__1">
            <div className="img__container">
              <img
                src={News2}
                className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
              />
            </div>

            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
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
          <div className="main__news__1">
            <div className="img__container">
              <img
                src={News2}
                className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
              />
            </div>
            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
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
          <div className="main__news__1">
            <div className="img__container">
              <img
                src={News3}
                className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
              />
            </div>
            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
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
          <div className="main__news__1">
            <div className="img__container">
              <img
                src={News4}
                className="align-middle w-full object-cover transition duration-300 ease-linear mb-5"
              />
            </div>
            <h1 className="bold__text__pink">
              Mystify Winner Is Retired Because of Wealth's Beds Ankle World
              Wide.
            </h1>
            <div className="r-profile-info">
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
        <div className="profile__ads">
          <Ads />
        </div>
        <div className="writer__foter">
          <WriterFooter />
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
  padding: 10px;

  h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
  }

  .profile__container {
    display: flex;
    height: 18rem;
    margin-bottom: 10px;
    justify-content: space;
  }

  .profile__container__1 {
    display: flex;
    gap:2.4rem;
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
    height: 18rem;
    overflow: hidden;
    border-radius: 2rem;
  }

  .profile__img {
    height: 100%;
  }

  .profile__container__1 .writers__container {
    height: 190px;
    margin: 0;
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

  .socials__icons {
    display: flex;
    gap: 1.2rem;
    margin-top: 10px;
  }

  .social__icon--link:link,
  .social__icon--link:visited {
    color: gray;
    text-decoration: none;
    font-size: 2.6rem;
  }

  .profile {
    max-width: 90rem;
    margin-right:3rem
  }

  .profile__socials {
    display: flex;
    margin-bottom: 20px;
  }

  .main__news__img {
    width: 100%;
    height: 30rem;
  }

  .main__news {
    margin-top: 2rem;
    margin-bottom: 27px;
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
  }

  .main__news__1 {
    max-width: 400px;
    // margin-right: 1.6rem;
    // margin-top: 20px;
  }

  .profile__comments {
    max-width: 380px;
    margin-top: 10px;
    margin-bottom: 18px;
  }

  .bold__text__pink {
    color: #f06;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.3;
  }

  .profile__ads {
    .custom__style {
      height: 252px;
    }
  }
  .writer__foter {
    .custom__style {
      height: 95px;
    }
  }

  .ads__second {
    max-width: 728px;
    display: flex;
    margin-bottom: 33px;
    margin-top: 33px;
    .custom__style {
      width: 100%;
      margin-left: 118px;
    }
  }

  .r-profile-container {
    display: flex;
    gap: 1.2rem;
  }

  .r-profile {
    display: flex;
  }

  .main__news_img {
    width: 388px;
    height: 242px;
  }

  .align-middle {
    object-fit: cover;
  }

  .img__container {
    width: 40rem;
    height: 24rem;
    margin-bottom: 1rem;
  }

  .r-profile-info {
    display: flex;
  }
`;
