import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// import Navbar from "../../components/Navbar";
import AdsSecond from "../../components/Ads2";
import SubHeader from "../../components/SubHeader";
import TabsArticle from "../../components/TabsArticle";
import profilePhoto from "../../assets/images/pngs/Profile-img-skills.png";
import Lifestyle from "../../assets/images/pngs/profile-news.png";
import Creator from "../../assets/images/pngs/creator-1.png";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { PiHandsClappingThin } from "react-icons/pi";
import { FiShare } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { BsSave } from "react-icons/bs";
import axios from "axios";

// import "../../index.css";
import "../../pages/blogDetails/blogDetails.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import TreadingArticles from "../../components/TreadingArticles";
import { useAuthContext } from "../../context/AuthContext";

import Profile from "../../components/Profile";
// import Loader from "../../components/Loader";
import LoaderSpiner from "../../components/LoaderSpinner";

// const SINGLE_BLOGS_URL =
//   // "http://localhost:3005/api/blogs/64edfe64306fb36f9a0d7fd3"; // Updated API URL
// `http://localhost:3005/api/blogs/:${id}`;

const BlogDetails = () => {
  const { token } = useAuthContext();
  const {id} = useParams(); // This retrieves the ID from the URL parameter

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);



  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0); // Scroll to the top of the page

    const fetchData = async () => {
      try {
          const response = await axios.get(`http://localhost:3005/api/blogs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.data.blog) {
          // Handle the fetched data and set it in state
          // setPosts(response.data);
          setPost(response.data.data.blog);
        } else {
          console.error("Error fetching posts");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, token]);

  return (
    <div className="blog__container">
    
      <SubHeader />

      {loading ? (
        <div className="loader__container">
          <LoaderSpiner />
        </div>
      ) : post ? ( // Check if post is not null before rendering
        <div key={post._id} className="blog__content">
          <div className="content__container">
            {/* <div className="ads__body">
              <div className="ads__second">
                <AdsSecond />
              </div>
            </div> */}
            <div className="ads__box--big width-100">&nbsp;</div>

            <div className="writers__stats">
              <div className="writers__stats__container">
                <div className="img__and__details__container">
                  <h1 className="blog__title">{post.title}</h1>
                  <div className="img__and__details">
                    <div>
                      <div className="profile__comments">
                        <div className="profile__photo">
                          <img src={profilePhoto} alt="Profile" className="" />
                        </div>
                        <div>
                          <p className="blog__author">John Doe</p>
                          <p className="blog__info">7 min read Jan 17, 2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="img__and__details__2">
                    <div className="blog__metrics">
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
            <div className="paragraph__container">
              <p className="details__paragraph">
                Emotional maturity is the work of a lifetime. So it’s a big ask
                to expect it of yourself, let alone anyone else, when you’re
                still learning who you are as a person and as a partner. But
                it’s also fair to say that a lack of emotional maturity will
                hold you back in every area of your life including, and
                especially, your relationships.
              </p>
              <p className="details__paragraph">
                I often have clients who spotted emotional red flags in their
                partners way back when they were besotted with each other. But
                they chose to ignore them because, well, everyone deserves the
                benefit of the doubt, don’t they? I recall one man who
                remembered his new girlfriend getting extremely angry at
                restaurant wait staff when their meals arrived late. “She got
                this wild look in her eyes and I remember thinking ‘wow, you are
                way too mad over such a small thing.’
              </p>
              <p className="details__paragraph">
                But I let it go, I just put it down to a bad day. Big mistake,”
                he said, with his head in his hands. He’d gone on to have three
                children with this woman and the eight years they’d been
                together had been an “absolutely bloody exhausting” emotional
                roller coaster.
              </p>
              <p className="details__paragraph">
                “Never again,” he said. But how could he be sure? Emotional
                Maturity 101 “Emotional immaturity is searching for love outside
                you. Emotional maturity comes from realizing you are the source
                of love.” ― Collette O’Mahony Emotional maturity is the ability
                to manage yourself in any circumstances. It means being able to
                identify and understand your thoughts and feelings, then
                reacting appropriately to them. No-one gets it right every time
                — well, a few might, but they are in Category Rare. Most of us
                have moments when we lose ourselves emotionally, get all caught
                up in what’s going on in our heads and hearts.
              </p>
              <p className="details__paragraph--italics">
                But the most telling sign is a lack of emotional control.
                Especially an inability to control anger. If you want the inside
                oil on a partner, watch how they deal with stress, frustration
                and/or provocation. Particularly watch the speed of their
                reaction. Do they fire back? Escalate into a highly emotional
                state? React impulsively? Or over-react? Lash out in hurtful
                ways? Or are they able to hit pause, then combine their
                intellect with their feelings in deciding how to react?
              </p>
              <p className="details__paragraph">
                However, a person who can’t control their reactions, or who
                reacts in ways that are too much (or too little) for the
                occasion is hard to be with, because you never know what you’re
                going to…
              </p>
            </div>

            <Link className="membership">
              <div className="referal__link">
                <h2>Join Tajify with my referral link — Karen Nimmo</h2>
                <h3 className="member">
                  As a Tajify member, a portion of your membership fee goes to
                  writers you read, and you get full access to every story…
                </h3>
                <span className="writer__link">aselemidivine@tajify.com</span>
              </div>
              <div className="refferal__img">
                <img src={Creator} className="align-middle mb-5" />
              </div>
            </Link>
            <div>
              <TabsArticle />
              <div className="profile__container-main">
                <div className="profile__container">
                  <div className="profile__news_img">
                    <img src={Creator} className="profile__img" />
                  </div>
                </div>
                <div className="writers__container">
                  <div className="profile__socials">
                    <div>
                      <h3>Filter Mark</h3>
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
                      <button className="w-[166px] h-[40px] bg-[#F06] text-center text-white flex items-center cursor-pointer justify-center rounded-lg p-21 px-78">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere omnis tempora in quod ratione eum tenetur nihil,
                    dolorum dolor harum quis voluptatum hic nam, blanditiis
                    architecto, possimus optio voluptatibus laborum?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No post found</p>
      )}

      {/* {post.map((post) => (
        <div key={post._id} className="blog__content">
          <div className="custom__width">
            <div className="ads__body">
              <div className="ads__second">
                <AdsSecond />
              </div>
            </div>
            <h1>
            {post.title}
            </h1>

            <div className="writers__stats">
              <div className="writers__stats__container">
                <div className="img__and__details__container">
                  <div className="img__and__details">
                    <div>
                      <div className="profile__comments">
                        <div className="profile__photo">
                          <img src={profilePhoto} alt="Profile" className="" />
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
            <div className="paragraph__container">
              <p className="details__paragraph">
                Emotional maturity is the work of a lifetime. So it’s a big ask
                to expect it of yourself, let alone anyone else, when you’re
                still learning who you are as a person and as a partner. But
                it’s also fair to say that a lack of emotional maturity will
                hold you back in every area of your life including, and
                especially, your relationships.
              </p>
              <p className="details__paragraph">
                I often have clients who spotted emotional red flags in their
                partners way back when they were besotted with each other. But
                they chose to ignore them because, well, everyone deserves the
                benefit of the doubt, don’t they? I recall one man who
                remembered his new girlfriend getting extremely angry at
                restaurant wait staff when their meals arrived late. “She got
                this wild look in her eyes and I remember thinking ‘wow, you are
                way too mad over such a small thing.’
              </p>
              <p className="details__paragraph">
                But I let it go, I just put it down to a bad day. Big mistake,”
                he said, with his head in his hands. He’d gone on to have three
                children with this woman and the eight years they’d been
                together had been an “absolutely bloody exhausting” emotional
                roller coaster.
              </p>
              <p className="details__paragraph">
                “Never again,” he said. But how could he be sure? Emotional
                Maturity 101 “Emotional immaturity is searching for love outside
                you. Emotional maturity comes from realizing you are the source
                of love.” ― Collette O’Mahony Emotional maturity is the ability
                to manage yourself in any circumstances. It means being able to
                identify and understand your thoughts and feelings, then
                reacting appropriately to them. No-one gets it right every time
                — well, a few might, but they are in Category Rare. Most of us
                have moments when we lose ourselves emotionally, get all caught
                up in what’s going on in our heads and hearts.
              </p>
              <p className="details__paragraph__italics">
                But the most telling sign is a lack of emotional control.
                Especially an inability to control anger. If you want the inside
                oil on a partner, watch how they deal with stress, frustration
                and/or provocation. Particularly watch the speed of their
                reaction. Do they fire back? Escalate into a highly emotional
                state? React impulsively? Or over-react? Lash out in hurtful
                ways? Or are they able to hit pause, then combine their
                intellect with their feelings in deciding how to react?
              </p>
              <p className="details__paragraph">
                However, a person who can’t control their reactions, or who
                reacts in ways that are too much (or too little) for the
                occasion is hard to be with, because you never know what you’re
                going to…
              </p>
            </div>

            <Link className="membership">
              <div className="referal__link">
                <h2>Join Tajify with my referral link — Karen Nimmo</h2>
                <h3 className="member">
                  As a Tajify member, a portion of your membership fee goes to
                  writers you read, and you get full access to every story…
                </h3>
                <span className="writer__link">aselemidivine@tajify.com</span>
              </div>
              <div className="refferal__img">
                <img src={Creator} className="align-middle mb-5" />
              </div>
            </Link>
            <div>
              <TabsArticle />
              <div className="profile__container__1">
                <div className="profile__container">
                  <div className="profile__news_img">
                    <img src={Creator} className="profile__img" />
                  </div>
                </div>
                <div className="writers__container">
                  <div className="profile__socials">
                    <div>
                      <h3>Filter Mark</h3>
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
                      <button className="w-[166px] h-[40px] bg-[#F06] text-center text-white flex items-center cursor-pointer justify-center rounded-lg p-21 px-78">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere omnis tempora in quod ratione eum tenetur nihil,
                    dolorum dolor harum quis voluptatum hic nam, blanditiis
                    architecto, possimus optio voluptatibus laborum?
                  </p>
                </div>
              </div>
            </div>
            <TreadingArticles />
          </div>
        </div>
      ))} */}

      <Footer />
    </div>
  );
};

export default BlogDetails;

// const BlogDetailsContainer = styled.div`

// `;
